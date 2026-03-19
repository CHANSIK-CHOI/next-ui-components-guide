import { Button, Field, RHFSwitch } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { useState } from "react";
import { useForm } from "react-hook-form";

type SwitchBasicFormValues = {
  receivePush: boolean;
};

type SwitchValidationFormValues = {
  agreeAlarmPolicy: boolean;
};

type SwitchOptionalFormValues = {
  enableMarketing: boolean;
  enableNightPush?: boolean;
};

type SwitchStatePreviewFormValues = {
  disabledAutoSave: boolean;
  readOnlyLocationAccess: boolean;
  errorPreview: boolean;
};

export default function SwitchRHFSection() {
  const [showNightPush, setShowNightPush] = useState(true);
  const [optionalSubmitResult, setOptionalSubmitResult] = useState("");
  const {
    control: basicControl,
    handleSubmit: handleBasicSubmit,
    formState: { isSubmitting: isBasicSubmitting },
  } = useForm<SwitchBasicFormValues>({
    mode: "onSubmit",
    defaultValues: {
      receivePush: true,
    },
  });

  const {
    control: validationControl,
    handleSubmit: handleValidationSubmit,
    formState: { errors, isSubmitting: isValidationSubmitting },
  } = useForm<SwitchValidationFormValues>({
    mode: "onSubmit",
    defaultValues: {
      agreeAlarmPolicy: false,
    },
  });

  const {
    control: optionalControl,
    handleSubmit: handleOptionalSubmit,
    formState: { isSubmitting: isOptionalSubmitting },
  } = useForm<SwitchOptionalFormValues>({
    mode: "onSubmit",
    defaultValues: {
      enableMarketing: true,
      enableNightPush: false,
    },
  });

  const { control: statePreviewControl } =
    useForm<SwitchStatePreviewFormValues>({
      mode: "onSubmit",
      defaultValues: {
        disabledAutoSave: true,
        readOnlyLocationAccess: true,
        errorPreview: false,
      },
    });

  const handleBasicFormSubmit = async (values: SwitchBasicFormValues) => {
    console.log(values);
  };

  const handleValidationFormSubmit = async (
    values: SwitchValidationFormValues,
  ) => {
    console.log(values);
  };

  const handleOptionalFormSubmit = async (values: SwitchOptionalFormValues) => {
    console.log(values);
    setOptionalSubmitResult(JSON.stringify(values));
  };

  return (
    <GuideSection
      label="React Hook Form"
      title="RHFSwitch / 폼 연동"
      description="RHFSwitch는 React Hook Form의 boolean 필드와 Switch를 연결하는 래퍼 컴포넌트입니다."
    >
      <GuideProp
        isWide
        name="Switch props 확장 + RHFComponentProps"
        typeLabel="RHFComponentProps<TFormValues, TFieldName, SwitchProps, RHFCheckedInputManagedProps>"
        description="RHFSwitch는 Switch props를 기반으로 하고, checked/defaultChecked/defaultValue/name/onBlur/onChange는 RHF가 관리합니다. boolean 필드와 연결하면 ref와 checked 상태가 자동으로 연결되고, 초기값은 보통 useForm의 defaultValues로 둡니다."
      >
        <form onSubmit={handleBasicSubmit(handleBasicFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Item>
                <RHFSwitch name="receivePush" control={basicControl} />
                <Field.Label>주요 공지 푸시를 받겠습니다.</Field.Label>
              </Field.Item>
              <Field.Description>
                Switch는 RHF에서 boolean 값으로 관리됩니다.
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
        description="shouldUnregister가 true이면 조건부 렌더링으로 필드가 사라질 때 RHF 상태에서도 해당 값을 제거합니다. 동적으로 나타났다 사라지는 토글 항목에 유용합니다."
      >
        <form onSubmit={handleOptionalSubmit(handleOptionalFormSubmit)}>
          <div className="guideFormStack">
            <Button
              variant="line"
              type="button"
              onClick={() => setShowNightPush((prev) => !prev)}
            >
              {showNightPush
                ? "야간 알림 항목 숨기기"
                : "야간 알림 항목 다시 보이기"}
            </Button>
            <Field>
              <Field.Item>
                <RHFSwitch
                  name="enableMarketing"
                  control={optionalControl}
                  defaultValue
                />
                <Field.Label>마케팅 알림 받기</Field.Label>
              </Field.Item>
              {showNightPush && (
                <Field.Item>
                  <RHFSwitch
                    name="enableNightPush"
                    control={optionalControl}
                    shouldUnregister
                  />
                  <Field.Label>야간 알림 허용</Field.Label>
                </Field.Item>
              )}
              <Field.Description>
                {showNightPush
                  ? "야간 알림 항목이 보이는 상태입니다."
                  : "야간 알림 항목을 숨긴 뒤 제출하면 enableNightPush 값이 제출 결과에서 제거됩니다."}
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
        name="disabled | readOnly | isError"
        typeLabel="boolean"
        defaultValue="false"
        description="RHFSwitch도 Switch 상태 props를 그대로 상속합니다. disabled는 RHF 필드 업데이트와 입력 상호작용을 막고, readOnly는 현재 값을 유지한 채 변경만 막습니다. isError는 RHF 검증 상태에 시각 에러 상태를 추가할 때 사용할 수 있습니다."
      >
        <Field>
          <Field.Item>
            <RHFSwitch
              name="disabledAutoSave"
              control={statePreviewControl}
              disabled
            />
            <Field.Label>disabled 예시</Field.Label>
          </Field.Item>
        </Field>
        <Field>
          <Field.Item>
            <RHFSwitch
              name="readOnlyLocationAccess"
              control={statePreviewControl}
              readOnly
            />
            <Field.Label>readOnly 예시</Field.Label>
          </Field.Item>
        </Field>
        <Field>
          <Field.Item>
            <RHFSwitch
              name="errorPreview"
              control={statePreviewControl}
              isError
            />
            <Field.Label>isError 예시</Field.Label>
          </Field.Item>
          <Field.Message errorMessage="에러 상태를 표시한 예시입니다." />
        </Field>
      </GuideProp>

      <GuideProp
        isWide
        name="rules"
        typeLabel="validate | required"
        description="필수 설정을 켜야 하는 규칙은 validate로 연결하는 방식이 가장 명확합니다."
      >
        <form onSubmit={handleValidationSubmit(handleValidationFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Item>
                <RHFSwitch
                  name="agreeAlarmPolicy"
                  control={validationControl}
                  rules={{
                    validate: (value) =>
                      value || "필수 알림 정책 동의가 필요합니다.",
                  }}
                />
                <Field.Label>필수 알림 정책에 동의합니다.</Field.Label>
              </Field.Item>
              <Field.Message errorMessage={errors.agreeAlarmPolicy?.message} />
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
