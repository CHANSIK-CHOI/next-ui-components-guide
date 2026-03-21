import { Button, Field, RHFTextarea } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { useForm } from "react-hook-form";

type RHFBasicDemoValues = {
  projectOverview: string;
};

type RHFValidationDemoValues = {
  requiredDescription: string;
};

type RHFNativePropsDemoValues = {
  reviewMemo: string;
};

type RHFFormatValueDemoValues = {
  note: string;
};

function limitLineCount(value: string, maxLines: number) {
  return value.split("\n").slice(0, maxLines).join("\n");
}

export default function TextareaRHFSection() {
  const {
    control: basicControl,
    handleSubmit: handleBasicSubmit,
    formState: { isSubmitting: isBasicSubmitting },
  } = useForm<RHFBasicDemoValues>({
    mode: "onSubmit",
    defaultValues: {
      projectOverview: "프로젝트 목표와 기대 효과를 2~3문장으로 설명해주세요.",
    },
  });

  const {
    control: validationControl,
    handleSubmit: handleValidationSubmit,
    formState: { isSubmitting: isValidationSubmitting },
  } = useForm<RHFValidationDemoValues>({
    mode: "onSubmit",
    defaultValues: {
      requiredDescription: "",
    },
  });

  const {
    control: nativePropsControl,
    handleSubmit: handleNativePropsSubmit,
    watch: watchReviewMemo,
    formState: { isSubmitting: isNativePropsSubmitting },
  } = useForm<RHFNativePropsDemoValues>({
    mode: "onSubmit",
    defaultValues: {
      reviewMemo: "",
    },
  });

  const {
    control: formatValueControl,
    handleSubmit: handleFormatValueSubmit,
    formState: { isSubmitting: isFormatValueSubmitting },
  } = useForm<RHFFormatValueDemoValues>({
    mode: "onSubmit",
    defaultValues: {
      note: "",
    },
  });

  const reviewMemoLength = watchReviewMemo("reviewMemo").length;

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

  const handleFormatValueFormSubmit = async (
    values: RHFFormatValueDemoValues,
  ) => {
    console.log(values);
  };

  return (
    <GuideSection
      label="React Hook Form"
      title="RHFTextarea / 폼 연동"
      description="RHFTextarea는 useController로 Textarea를 React Hook Form 필드와 연결한 래퍼 컴포넌트입니다."
    >
      <GuideProp
        isWide
        name="Textarea props 확장 + RHFComponentProps"
        typeLabel='RHFComponentProps<TFormValues, TFieldName, TextareaProps, RHFValueInputManagedProps> & { formatValue?: (value: string) => string; }'
        description="RHFTextarea는 Textarea props를 기반으로 하고, name/value/defaultValue/onBlur/onChange는 RHF가 관리합니다. clear 버튼을 쓰면 RHF 값이 먼저 빈 문자열로 정리된 뒤 onClear가 호출되고, formatValue를 전달하면 가공된 값을 RHF 상태에 반영합니다."
      >
        <form onSubmit={handleBasicSubmit(handleBasicFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>프로젝트 개요</Field.Label>
              <RHFTextarea
                name="projectOverview"
                control={basicControl}
                rows={5}
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
        description="rules를 통해 멀티라인 입력 검증을 연결할 수 있습니다. 아래 예시는 공백만 입력한 경우와 최소 길이를 함께 검증합니다."
      >
        <form onSubmit={handleValidationSubmit(handleValidationFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>상세 설명</Field.Label>
              <RHFTextarea
                name="requiredDescription"
                control={validationControl}
                rows={6}
                placeholder="상세 설명을 입력해주세요"
                isClearable
                rules={{
                  required: "상세 설명은 필수입니다.",
                  minLength: {
                    value: 20,
                    message: "최소 20자 이상 입력해주세요.",
                  },
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
        name="formatValue"
        typeLabel="(value: string) => string"
        description={
          <>
            formatValue를 전달하면 RHFTextarea 내부 onChange에서 값을 가공한 뒤
            field.onChange로 전달할 수 있습니다.
            <br /> 아래 예시는 입력 줄 수를 최대 5줄까지만 허용하도록 제한합니다.
          </>
        }
      >
        <form onSubmit={handleFormatValueSubmit(handleFormatValueFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>회의 메모</Field.Label>
              <RHFTextarea
                name="note"
                control={formatValueControl}
                rows={6}
                isClearable
                formatValue={(value) => limitLineCount(value, 5)}
                infoMessage="최대 5줄까지만 입력할 수 있습니다."
                placeholder="줄바꿈을 포함해 5줄까지 입력해보세요"
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
        name="native textarea props"
        typeLabel="rows | maxLength | spellCheck | resize | disabled ..."
        description="RHF 연결과 함께 textarea native props와 Textarea UI props를 함께 전달할 수 있습니다."
      >
        <form onSubmit={handleNativePropsSubmit(handleNativePropsFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>리뷰 메모</Field.Label>
              <RHFTextarea
                name="reviewMemo"
                control={nativePropsControl}
                rows={5}
                maxLength={200}
                resize="none"
                spellCheck={false}
                isClearable
                infoMessage={`${reviewMemoLength}/200`}
                placeholder="최대 200자까지 입력해주세요"
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
