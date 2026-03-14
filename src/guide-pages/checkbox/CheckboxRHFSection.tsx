import { Button, Field, RHFCheckbox } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { useState } from "react";
import { useForm } from "react-hook-form";

type CheckboxBasicFormValues = {
  receiveEvent: boolean;
};

type CheckboxValidationFormValues = {
  agreeTerms: boolean;
};

type CheckboxOptionalFormValues = {
  receiveNewsletter: boolean;
  receiveSms: boolean;
};

type CheckboxStatePreviewFormValues = {
  disabledConsent: boolean;
  readOnlyConsent: boolean;
  errorConsent: boolean;
};

export default function CheckboxRHFSection() {
  const [showSmsConsent, setShowSmsConsent] = useState(true);
  const [optionalSubmitResult, setOptionalSubmitResult] = useState("");
  const {
    control: basicControl,
    handleSubmit: handleBasicSubmit,
    formState: { isSubmitting: isBasicSubmitting },
  } = useForm<CheckboxBasicFormValues>({
    mode: "onSubmit",
    defaultValues: {
      receiveEvent: true,
    },
  });

  const {
    control: validationControl,
    handleSubmit: handleValidationSubmit,
    formState: { errors, isSubmitting: isValidationSubmitting },
  } = useForm<CheckboxValidationFormValues>({
    mode: "onSubmit",
    defaultValues: {
      agreeTerms: false,
    },
  });

  const {
    control: optionalControl,
    handleSubmit: handleOptionalSubmit,
    formState: { isSubmitting: isOptionalSubmitting },
  } = useForm<CheckboxOptionalFormValues>({
    mode: "onSubmit",
    defaultValues: {
      receiveNewsletter: true,
      receiveSms: false,
    },
  });

  const { control: statePreviewControl } = useForm<CheckboxStatePreviewFormValues>(
    {
      mode: "onSubmit",
      defaultValues: {
        disabledConsent: true,
        readOnlyConsent: true,
        errorConsent: false,
      },
    },
  );

  const handleBasicFormSubmit = async (values: CheckboxBasicFormValues) => {
    console.log(values);
  };

  const handleValidationFormSubmit = async (
    values: CheckboxValidationFormValues,
  ) => {
    console.log(values);
  };

  const handleOptionalFormSubmit = async (
    values: CheckboxOptionalFormValues,
  ) => {
    console.log(values);
    setOptionalSubmitResult(JSON.stringify(values));
  };

  return (
    <GuideSection
      label="React Hook Form"
      title="RHFCheckbox / 폼 연동"
      description="RHFCheckbox는 react-hook-form의 boolean 필드와 Checkbox를 연결하는 래퍼 컴포넌트입니다."
    >
      <GuideProp
        isWide
        name="Checkbox props 확장 + RHFComponentProps"
        typeLabel="RHFComponentProps<TFormValues, TFieldName, CheckboxProps, RHFCheckedInputManagedProps>"
        description="RHFCheckbox는 Checkbox props를 기반으로 하고, checked/defaultChecked/defaultValue/name/onBlur/onChange는 RHF가 관리합니다. 단일 boolean 필드와 연결하면 ref와 checked 상태가 자동으로 연결되고, 초기값은 보통 useForm의 defaultValues로 두며 필요할 때만 RHFCheckbox의 defaultValue를 함께 사용할 수 있습니다."
      >
        <form onSubmit={handleBasicSubmit(handleBasicFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Item align="start">
                <RHFCheckbox name="receiveEvent" control={basicControl} />
                <Field.Label>이벤트 알림 수신에 동의합니다.</Field.Label>
              </Field.Item>
              <Field.Description>
                Checkbox는 RHF에서 boolean 값으로 관리됩니다.
              </Field.Description>
            </Field>
            <Button color="primary" type="submit" disabled={isBasicSubmitting}>
              제출
            </Button>
          </div>
        </form>
      </GuideProp>

      <GuideProp
        isWide
        name="shouldUnregister"
        typeLabel="boolean"
        defaultValue="false"
        description="shouldUnregister가 true이면 조건부 렌더링으로 필드가 사라질 때 RHF 상태에서도 해당 값을 제거합니다. 동적으로 나타났다 사라지는 체크박스에 주로 사용합니다."
      >
        <form onSubmit={handleOptionalSubmit(handleOptionalFormSubmit)}>
          <div className="guideFormStack">
            <Button
              variant="line"
              type="button"
              onClick={() => setShowSmsConsent((prev) => !prev)}
            >
              {showSmsConsent ? "SMS 항목 숨기기" : "SMS 항목 다시 보이기"}
            </Button>
            <Field>
              <Field.Item align="start">
                <RHFCheckbox
                  name="receiveNewsletter"
                  control={optionalControl}
                  defaultValue
                />
                <Field.Label>뉴스레터 수신에 동의합니다.</Field.Label>
              </Field.Item>
              {showSmsConsent && (
                <Field.Item align="start">
                  <RHFCheckbox
                    name="receiveSms"
                    control={optionalControl}
                    shouldUnregister
                  />
                  <Field.Label>SMS 알림 수신에 동의합니다.</Field.Label>
                </Field.Item>
              )}
              <Field.Description>
                {showSmsConsent
                  ? "SMS 항목이 보이는 상태입니다."
                  : "SMS 항목을 숨긴 뒤 제출하면 receiveSms 값이 제출 결과에서 제거됩니다."}
              </Field.Description>
              {optionalSubmitResult && (
                <Field.Description>
                  최근 제출 결과: {optionalSubmitResult}
                </Field.Description>
              )}
            </Field>
            <Button
              color="primary"
              type="submit"
              disabled={isOptionalSubmitting}
            >
              제출
            </Button>
          </div>
        </form>
      </GuideProp>

      <GuideProp
        isWide
        name="disabled | readOnly | error"
        typeLabel="boolean"
        defaultValue="false"
        description="RHFCheckbox도 Checkbox 상태 props를 그대로 상속합니다. disabled는 RHF 필드 업데이트와 입력 상호작용을 막고, readOnly는 현재 값을 유지한 채 변경만 막습니다. error는 RHF 검증 상태에 시각 에러 상태를 추가할 때 사용할 수 있습니다."
      >
        <Field>
          <Field.Item align="start">
            <RHFCheckbox
              name="disabledConsent"
              control={statePreviewControl}
              disabled
            />
            <Field.Label>disabled 예시</Field.Label>
          </Field.Item>
        </Field>
        <Field>
          <Field.Item align="start">
            <RHFCheckbox
              name="readOnlyConsent"
              control={statePreviewControl}
              readOnly
            />
            <Field.Label>readOnly 예시</Field.Label>
          </Field.Item>
          <Field.Description>
            readOnly에서는 체크 상태를 유지한 채 변경만 막습니다.
          </Field.Description>
        </Field>
        <Field>
          <Field.Item align="start">
            <RHFCheckbox
              name="errorConsent"
              control={statePreviewControl}
              error
            />
            <Field.Label>error 예시</Field.Label>
          </Field.Item>
          <Field.Message errorMsg="시각 에러 상태를 강제로 표시한 예시입니다." />
        </Field>
      </GuideProp>

      <GuideProp
        isWide
        name="rules"
        typeLabel="validate | required"
        description="필수 동의처럼 체크 여부가 true여야 하는 규칙은 validate로 연결하는 방식이 가장 명확합니다."
      >
        <form onSubmit={handleValidationSubmit(handleValidationFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Item align="start">
                <RHFCheckbox
                  name="agreeTerms"
                  control={validationControl}
                  rules={{
                    validate: (value) => value || "약관 동의는 필수입니다.",
                  }}
                />
                <Field.Label>
                  이용약관 및 개인정보 처리방침에 동의합니다.
                </Field.Label>
              </Field.Item>
              <Field.Message errorMsg={errors.agreeTerms?.message} />
            </Field>
            <Button
              color="primary"
              type="submit"
              disabled={isValidationSubmitting}
            >
              검증
            </Button>
          </div>
        </form>
      </GuideProp>
    </GuideSection>
  );
}
