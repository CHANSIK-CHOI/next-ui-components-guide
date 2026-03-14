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
        name="name | control | defaultValue"
        typeLabel="UseControllerProps<TFormValues>"
        description="단일 boolean 필드와 연결하면 checked, onChange, onBlur, ref가 RHF 상태로 자동 연결됩니다. 초기 선택값은 보통 useForm의 defaultValues로 두고, 필요한 경우 RHFCheckbox의 defaultValue로도 지정할 수 있습니다."
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
