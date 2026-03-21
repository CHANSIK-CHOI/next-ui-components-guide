import { Button, Field, RHFRadio, RadioGroup } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { useState } from "react";
import { useForm } from "react-hook-form";

type RadioBasicFormValues = {
  notificationCycle: string;
};

type RadioValidationFormValues = {
  paymentMethod: string;
};

type RadioStatePreviewFormValues = {
  disabledPreview: string;
  readOnlyPreview: string;
  errorPreview: string;
};

type RadioConditionalFormValues = {
  reminderWindow?: string;
};

export default function RadioRHFSection() {
  const [showReminderWindow, setShowReminderWindow] = useState(true);
  const [conditionalSubmitResult, setConditionalSubmitResult] = useState("");
  const {
    control: basicControl,
    handleSubmit: handleBasicSubmit,
    formState: { isSubmitting: isBasicSubmitting },
  } = useForm<RadioBasicFormValues>({
    mode: "onSubmit",
    defaultValues: {
      notificationCycle: "daily",
    },
  });

  const {
    control: validationControl,
    handleSubmit: handleValidationSubmit,
    formState: { errors, isSubmitting: isValidationSubmitting },
  } = useForm<RadioValidationFormValues>({
    mode: "onSubmit",
    defaultValues: {
      paymentMethod: "",
    },
  });

  const { control: statePreviewControl } = useForm<RadioStatePreviewFormValues>(
    {
      mode: "onSubmit",
      defaultValues: {
        disabledPreview: "disabled",
        readOnlyPreview: "readonly",
        errorPreview: "",
      },
    },
  );

  const {
    control: conditionalControl,
    handleSubmit: handleConditionalSubmit,
    formState: { isSubmitting: isConditionalSubmitting },
  } = useForm<RadioConditionalFormValues>({
    mode: "onSubmit",
    defaultValues: {
      reminderWindow: "morning",
    },
  });

  const handleBasicFormSubmit = async (values: RadioBasicFormValues) => {
    console.log(values);
  };

  const handleValidationFormSubmit = async (
    values: RadioValidationFormValues,
  ) => {
    console.log(values);
  };

  const handleConditionalFormSubmit = async (
    values: RadioConditionalFormValues,
  ) => {
    console.log(values);
    setConditionalSubmitResult(JSON.stringify(values));
  };

  return (
    <GuideSection
      label="React Hook Form"
      title="RHFRadio / 폼 연동"
      description="RHFRadio는 같은 name 아래 여러 옵션을 두고, 선택된 value를 React Hook Form 필드와 연결한 래퍼 컴포넌트입니다."
    >
      <GuideProp
        isWide
        name="Radio props 확장 + RHFComponentProps"
        typeLabel='RHFComponentProps<TFormValues, TFieldName, RadioProps, RHFCheckedInputManagedProps | "value"> & { value: NonNullable<RadioProps["value"]>; }'
        description="RHFRadio는 Radio props를 기반으로 하고, checked/defaultChecked/defaultValue/name/onBlur/onChange는 RHF가 관리합니다. 각 옵션은 자신의 value를 필수로 전달하고, 같은 name을 공유한 여러 RHFRadio가 하나의 RHF 필드를 함께 사용합니다. 초기 선택값은 보통 useForm의 defaultValues로 둡니다."
      >
        <form onSubmit={handleBasicSubmit(handleBasicFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <RadioGroup name="notificationCycle" aria-label="알림 주기">
                <Field.Item>
                  <RHFRadio
                    name="notificationCycle"
                    control={basicControl}
                    value="daily"
                  />
                  <Field.Label>매일 받기</Field.Label>
                </Field.Item>
                <Field.Item>
                  <RHFRadio
                    name="notificationCycle"
                    control={basicControl}
                    value="weekly"
                  />
                  <Field.Label>주 1회 받기</Field.Label>
                </Field.Item>
                <Field.Item>
                  <RHFRadio
                    name="notificationCycle"
                    control={basicControl}
                    value="monthly"
                  />
                  <Field.Label>월 1회 받기</Field.Label>
                </Field.Item>
              </RadioGroup>
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
        description="shouldUnregister는 라디오 그룹 전체가 조건부 렌더링으로 사라질 때 선택값을 폼 상태에서 제거하고 싶을 때 사용합니다."
      >
        <form onSubmit={handleConditionalSubmit(handleConditionalFormSubmit)}>
          <div className="guideFormStack">
            <Button
              variant="line"
              type="button"
              onClick={() => setShowReminderWindow((prev) => !prev)}
            >
              {showReminderWindow
                ? "알림 시간 숨기기"
                : "알림 시간 다시 보이기"}
            </Button>
            <Field>
              {showReminderWindow ? (
                <RadioGroup name="reminderWindow" aria-label="알림 시간">
                  <Field.Item>
                    <RHFRadio
                      name="reminderWindow"
                      control={conditionalControl}
                      value="morning"
                      shouldUnregister
                    />
                    <Field.Label>오전 알림</Field.Label>
                  </Field.Item>
                  <Field.Item>
                    <RHFRadio
                      name="reminderWindow"
                      control={conditionalControl}
                      value="afternoon"
                      shouldUnregister
                    />
                    <Field.Label>오후 알림</Field.Label>
                  </Field.Item>
                  <Field.Item>
                    <RHFRadio
                      name="reminderWindow"
                      control={conditionalControl}
                      value="evening"
                      shouldUnregister
                    />
                    <Field.Label>저녁 알림</Field.Label>
                  </Field.Item>
                </RadioGroup>
              ) : (
                <Field.Description>
                  알림 시간 라디오 그룹이 숨겨진 상태입니다.
                </Field.Description>
              )}
              <Field.Description>
                {showReminderWindow
                  ? "라디오 그룹이 보이는 상태에서 선택값을 유지합니다."
                  : "라디오 그룹을 숨긴 뒤 제출하면 reminderWindow 값이 제출 결과에서 제거됩니다."}
              </Field.Description>
              {conditionalSubmitResult && (
                <Field.Description>
                  최근 제출 결과: {conditionalSubmitResult}
                </Field.Description>
              )}
            </Field>
            <Button
              color="primary"
              type="submit"
              disabled={isConditionalSubmitting}
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
        description="RHFRadio도 Radio 상태 props를 그대로 상속합니다. disabled는 입력 상호작용을 막고, readOnly는 현재 선택 상태를 유지한 채 변경만 막습니다. isError는 RHF 검증 상태에 시각 에러 상태를 추가할 때 사용할 수 있습니다."
      >
        <Field>
          <RadioGroup name="disabledPreview" aria-label="비활성 라디오 예시">
            <Field.Item>
              <RHFRadio
                name="disabledPreview"
                control={statePreviewControl}
                value="disabled"
                disabled
              />
              <Field.Label>disabled 상태</Field.Label>
            </Field.Item>
          </RadioGroup>
        </Field>
        <Field>
          <RadioGroup name="readOnlyPreview" aria-label="읽기 전용 라디오 예시">
            <Field.Item>
              <RHFRadio
                name="readOnlyPreview"
                control={statePreviewControl}
                value="readonly"
                readOnly
              />
              <Field.Label>readOnly 상태</Field.Label>
            </Field.Item>
          </RadioGroup>
        </Field>
        <Field errorMessage="에러 상태를 표시한 예시입니다.">
          <RadioGroup
            name="errorPreview"
            isError
            aria-label="에러 라디오 예시"
          >
            <Field.Item>
              <RHFRadio
                name="errorPreview"
                control={statePreviewControl}
                value="error"
                isError
              />
              <Field.Label>isError 상태</Field.Label>
            </Field.Item>
          </RadioGroup>
        </Field>
      </GuideProp>

      <GuideProp
        isWide
        name="rules"
        typeLabel="required | validate"
        description="선택이 필수인 라디오 그룹은 required 규칙으로 간단하게 검증할 수 있습니다."
      >
        <form onSubmit={handleValidationSubmit(handleValidationFormSubmit)}>
          <div className="guideFormStack">
            <Field errorMessage={errors.paymentMethod?.message}>
              <RadioGroup
                name="paymentMethod"
                isError={Boolean(errors.paymentMethod)}
                aria-label="결제 수단"
              >
                <Field.Item>
                  <RHFRadio
                    name="paymentMethod"
                    control={validationControl}
                    value="card"
                    rules={{ required: "결제 수단을 선택해주세요." }}
                  />
                  <Field.Label>카드 결제</Field.Label>
                </Field.Item>
                <Field.Item>
                  <RHFRadio
                    name="paymentMethod"
                    control={validationControl}
                    value="bank"
                    rules={{ required: "결제 수단을 선택해주세요." }}
                  />
                  <Field.Label>계좌 이체</Field.Label>
                </Field.Item>
                <Field.Item>
                  <RHFRadio
                    name="paymentMethod"
                    control={validationControl}
                    value="phone"
                    rules={{ required: "결제 수단을 선택해주세요." }}
                  />
                  <Field.Label>휴대폰 결제</Field.Label>
                </Field.Item>
              </RadioGroup>
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
