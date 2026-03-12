import { Button, RHFTextfield } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { useForm } from "react-hook-form";

const demoStackStyle = {
  display: "grid",
  gap: "1.2rem",
  width: "100%",
} as const;

type RHFBasicDemoValues = {
  sampleText: string;
};

type RHFValidationDemoValues = {
  requiredText: string;
};

type RHFNativePropsDemoValues = {
  amount: string;
};

export default function TextfieldRHFSection() {
  const {
    control: basicControl,
    handleSubmit: handleBasicSubmit,
    formState: { isSubmitting: isBasicSubmitting },
  } = useForm<RHFBasicDemoValues>({
    mode: "onSubmit",
    defaultValues: {
      sampleText: "react-hook-form",
    },
  });

  const {
    control: validationControl,
    handleSubmit: handleValidationSubmit,
    formState: { isSubmitting: isValidationSubmitting },
  } = useForm<RHFValidationDemoValues>({
    mode: "onSubmit",
    defaultValues: {
      requiredText: "",
    },
  });

  const {
    control: nativePropsControl,
    handleSubmit: handleNativePropsSubmit,
    formState: { isSubmitting: isNativePropsSubmitting },
  } = useForm<RHFNativePropsDemoValues>({
    mode: "onSubmit",
    defaultValues: {
      amount: "12000",
    },
  });

  const handleBasicFormSubmit = async (values: RHFBasicDemoValues) => {
    console.log(values);
  };

  const handleValidationFormSubmit = async (
    values: RHFValidationDemoValues,
  ) => {
    console.log(values);
  };

  const handleNativePropsFormSubmit = async (
    values: RHFNativePropsDemoValues,
  ) => {
    console.log(values);
  };

  return (
    <GuideSection
      label="React Hook Form"
      title="RHFTextfield / form binding"
      description="RHFTextfield는 useController를 사용해 Textfield를 react-hook-form 필드와 연결하는 래퍼 컴포넌트입니다."
    >
      <GuideProp
        isWide
        name="name | control"
        typeLabel="UseControllerProps<TFieldValues>"
        description="필드 이름과 control을 전달하면 RHF 상태와 연결되어 value, onChange, onBlur, ref가 자동으로 주입됩니다."
      >
        <form onSubmit={handleBasicSubmit(handleBasicFormSubmit)}>
          <div style={demoStackStyle}>
            <RHFTextfield
              name="sampleText"
              control={basicControl}
              isClearable
              infoMsg="name과 control을 전달하면 RHF 상태와 연결됩니다."
            />
            <Button color="primary" type="submit" disabled={isBasicSubmitting}>
              Submit
            </Button>
          </div>
        </form>
      </GuideProp>

      <GuideProp
        isWide
        name="rules"
        typeLabel="required | validate | minLength ..."
        description="rules를 통해 필드 검증을 연결할 수 있습니다. 아래 예시는 공백만 입력한 경우도 에러로 처리합니다."
      >
        <form onSubmit={handleValidationSubmit(handleValidationFormSubmit)}>
          <div style={demoStackStyle}>
            <RHFTextfield
              name="requiredText"
              control={validationControl}
              placeholder="공백만 입력한 뒤 Submit 해보세요"
              isClearable
              rules={{
                required: "필수 입력 값입니다.",
                validate: (value) =>
                  value.trim().length > 0 || "공백만 입력할 수 없습니다.",
              }}
            />
            <Button
              color="primary"
              type="submit"
              disabled={isValidationSubmitting}
            >
              Validate
            </Button>
          </div>
        </form>
      </GuideProp>

      <GuideProp
        isWide
        name="native input props"
        typeLabel="placeholder | inputMode | maxLength | disabled ..."
        description="RHF 연결과 함께 input native props와 Textfield UI props를 함께 전달할 수 있습니다."
      >
        <form onSubmit={handleNativePropsSubmit(handleNativePropsFormSubmit)}>
          <div style={demoStackStyle}>
            <RHFTextfield
              name="amount"
              control={nativePropsControl}
              placeholder="금액을 입력해주세요"
              inputMode="numeric"
              maxLength={8}
              unit="원"
              isClearable
              infoMsg="native input props와 Textfield UI props를 함께 전달할 수 있습니다."
            />
            <Button
              color="primary"
              type="submit"
              disabled={isNativePropsSubmitting}
            >
              Submit
            </Button>
          </div>
        </form>
      </GuideProp>
    </GuideSection>
  );
}
