import { Button, Field, RHFTextfield } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { formatPhoneNumber, normalizePhoneNumber } from "@/utils/phoneNumber";
import { useForm } from "react-hook-form";

type RHFBasicDemoValues = {
  sampleText: string;
};

type RHFValidationDemoValues = {
  requiredText: string;
};

type RHFNativePropsDemoValues = {
  amount: string;
};

type RHFPatternDemoValues = {
  numericOnly: string;
  email: string;
};

type RHFFormatValueDemoValues = {
  phone: string;
};

export default function TextfieldRHFSection() {
  const {
    control: basicControl,
    handleSubmit: handleBasicSubmit,
    formState: { isSubmitting: isBasicSubmitting },
  } = useForm<RHFBasicDemoValues>({
    mode: "onSubmit",
    defaultValues: {
      sampleText: "React Hook Form",
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

  const {
    control: patternControl,
    handleSubmit: handlePatternSubmit,
    formState: { isSubmitting: isPatternSubmitting },
  } = useForm<RHFPatternDemoValues>({
    mode: "onSubmit",
    defaultValues: {
      numericOnly: "",
      email: "",
    },
  });

  const {
    control: formatValueControl,
    handleSubmit: handleFormatValueSubmit,
    formState: { isSubmitting: isFormatValueSubmitting },
  } = useForm<RHFFormatValueDemoValues>({
    mode: "onSubmit",
    defaultValues: {
      phone: "",
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

  const handlePatternFormSubmit = async (values: RHFPatternDemoValues) => {
    console.log(values);
  };

  const handleFormatValueFormSubmit = async (
    values: RHFFormatValueDemoValues,
  ) => {
    const normalizedValues = {
      ...values,
      phone: normalizePhoneNumber(values.phone),
    };

    console.log(normalizedValues);
  };

  return (
    <GuideSection
      label="React Hook Form"
      title="RHFTextfield / 폼 연동"
      description="RHFTextfield는 useController로 Textfield를 React Hook Form 필드와 연결한 래퍼 컴포넌트입니다."
    >
      <GuideProp
        isWide
        name="Textfield props 확장 + RHFComponentProps"
        typeLabel='RHFComponentProps<TFormValues, TFieldName, TextfieldProps, RHFValueInputManagedProps> & { formatValue?: (value: string) => string; }'
        description="RHFTextfield는 Textfield props를 기반으로 하고, name/value/defaultValue/onBlur/onChange는 RHF가 관리합니다. 나머지 Textfield UI props와 native input props는 그대로 전달할 수 있으며, clear 버튼을 쓰면 RHF 값이 먼저 빈 문자열로 정리된 뒤 onClear가 호출됩니다. formatValue는 가공된 값을 RHF 상태에 반영합니다."
      >
        <form onSubmit={handleBasicSubmit(handleBasicFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>샘플 입력</Field.Label>
              <RHFTextfield
                name="sampleText"
                control={basicControl}
                isClearable
                infoMessage="name과 control을 전달하면 RHF 상태와 연결됩니다."
              />
            </Field>
            <Button color="primary" type="submit" disabled={isBasicSubmitting}>
              제출
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
          <div className="guideFormStack">
            <Field>
              <Field.Label>검증용 입력</Field.Label>
              <RHFTextfield
                name="requiredText"
                control={validationControl}
                placeholder="공백만 입력한 뒤 제출해보세요"
                isClearable
                rules={{
                  required: "필수 입력 값입니다.",
                  validate: (value) =>
                    value.trim().length > 0 || "공백만 입력할 수 없습니다.",
                }}
              />
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

      <GuideProp
        isWide
        name="rules.pattern"
        typeLabel="RegExp"
        description="pattern 검증을 사용하면 숫자, 이메일처럼 정규식 기반 형식을 RHF에서 검증할 수 있습니다."
      >
        <form onSubmit={handlePatternSubmit(handlePatternFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>숫자 입력</Field.Label>
              <RHFTextfield
                name="numericOnly"
                control={patternControl}
                placeholder="숫자만 입력"
                inputMode="numeric"
                isClearable
                rules={{
                  required: "숫자를 입력해주세요.",
                  pattern: {
                    value: /^\d+$/,
                    message: "숫자만 입력할 수 있습니다.",
                  },
                }}
              />
            </Field>
            <Field>
              <Field.Label>이메일 입력</Field.Label>
              <RHFTextfield
                name="email"
                control={patternControl}
                placeholder="sample@email.com"
                type="email"
                inputMode="email"
                isClearable
                rules={{
                  required: "이메일을 입력해주세요.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "올바른 이메일 형식이 아닙니다.",
                  },
                }}
              />
            </Field>
            <Button color="primary" type="submit" disabled={isPatternSubmitting}>
              검증
            </Button>
          </div>
        </form>
      </GuideProp>

      <GuideProp
        isWide
        name="formatValue"
        typeLabel="(value: string) => string"
        description={
          <>
            formatValue를 전달하면 RHFTextfield 내부 onChange에서 값을 가공한 뒤
            field.onChange로 전달할 수 있습니다.
            <br /> 아래 예시는 휴대전화 입력 중 하이픈을 자동으로 추가하고,
            submit 시에는 숫자만 남겨 payload를 정리합니다.
          </>
        }
      >
        <form onSubmit={handleFormatValueSubmit(handleFormatValueFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>휴대전화 번호</Field.Label>
              <RHFTextfield
                name="phone"
                control={formatValueControl}
                placeholder="01012345678"
                inputMode="tel"
                maxLength={13}
                formatValue={formatPhoneNumber}
                isClearable
                infoMessage="입력 중에는 하이픈이 자동으로 추가되고, submit 시에는 숫자만 남겨서 처리할 수 있습니다."
                rules={{
                  required: "휴대전화 번호를 입력해주세요.",
                  pattern: {
                    value: /^01[016789]-\d{3,4}-\d{4}$/,
                    message: "올바른 휴대전화 번호 형식이 아닙니다.",
                  },
                }}
              />
            </Field>
            <Button
              color="primary"
              type="submit"
              disabled={isFormatValueSubmitting}
            >
              포맷 값 제출
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
          <div className="guideFormStack">
            <Field>
              <Field.Label>금액 입력</Field.Label>
              <RHFTextfield
                name="amount"
                control={nativePropsControl}
                placeholder="금액을 입력해주세요"
                inputMode="numeric"
                maxLength={8}
                unit="원"
                isClearable
                infoMessage="native input props와 Textfield UI props를 함께 전달할 수 있습니다."
              />
            </Field>
            <Button
              color="primary"
              type="submit"
              disabled={isNativePropsSubmitting}
            >
              제출
            </Button>
          </div>
        </form>
      </GuideProp>
    </GuideSection>
  );
}
