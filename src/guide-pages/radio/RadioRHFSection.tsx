import { Button, Field, RHFRadio, RadioGroup } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { useForm } from "react-hook-form";

type RadioBasicFormValues = {
  notificationCycle: string;
};

type RadioValidationFormValues = {
  paymentMethod: string;
};

type RadioStatePreviewFormValues = {
  statePreview: string;
};

export default function RadioRHFSection() {
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

  const { control: statePreviewControl } = useForm<RadioStatePreviewFormValues>({
    mode: "onSubmit",
    defaultValues: {
      statePreview: "",
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

  return (
    <GuideSection
      label="React Hook Form"
      title="RHFRadio / 폼 연동"
      description="RHFRadio는 같은 name 아래 여러 옵션을 두고, 선택된 value를 RHF 상태로 관리하는 래퍼 컴포넌트입니다."
    >
      <GuideProp
        isWide
        name="name | control | value | defaultValue"
        typeLabel="UseControllerProps<TFormValues>"
        description="여러 RHFRadio가 같은 name을 공유하고, 각 컴포넌트는 자신의 value를 선택값으로 전달합니다. 초기 선택값은 보통 useForm의 defaultValues로 두고, 필요한 경우 RHFRadio의 defaultValue로도 지정할 수 있습니다."
      >
        <form onSubmit={handleBasicSubmit(handleBasicFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <RadioGroup name="notificationCycle">
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
        name="shouldUnregister | disabled | error"
        typeLabel="boolean"
        defaultValue="false"
        description="shouldUnregister는 라디오 그룹 전체가 조건부 렌더링으로 사라질 때 선택값을 폼 상태에서 제거하고 싶을 때 사용합니다. disabled와 error는 base Radio props를 그대로 상속합니다."
      >
        <Field>
          <Field.Description>
            RHFRadio는 같은 name을 가진 여러 옵션이 하나의 필드를 공유합니다.
            그래서 shouldUnregister는 개별 옵션보다 라디오 그룹 전체가 보였다
            사라지는 화면에서 사용하는 쪽이 더 자연스럽습니다.
          </Field.Description>
          <RadioGroup name="statePreview" error>
            <Field.Item>
              <RHFRadio
                name="statePreview"
                control={statePreviewControl}
                value="disabled"
                disabled
              />
              <Field.Label>disabled 예시</Field.Label>
            </Field.Item>
            <Field.Item>
              <RHFRadio
                name="statePreview"
                control={statePreviewControl}
                value="error"
                error
              />
              <Field.Label>error 예시</Field.Label>
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
            <Field>
              <RadioGroup
                name="paymentMethod"
                error={Boolean(errors.paymentMethod)}
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
              <Field.Message errorMsg={errors.paymentMethod?.message} />
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
