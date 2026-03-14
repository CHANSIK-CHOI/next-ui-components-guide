import { Button, Field, RHFDateMultiplePicker } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { format } from "date-fns";
import { useForm } from "react-hook-form";

type RHFDateMultipleBasicValues = {
  selectedDates: Date[] | undefined;
};

type RHFDateMultipleRuleValues = {
  requiredDates: Date[] | undefined;
};

type RHFDateMultipleOptionsValues = {
  limitedDates: Date[] | undefined;
};

type RHFDateMultipleDisplayValues = {
  customDates: Date[] | undefined;
};

export default function DateMultiplePickerRHFSection() {
  const {
    control: basicControl,
    handleSubmit: handleBasicSubmit,
    formState: { isSubmitting: isBasicSubmitting },
  } = useForm<RHFDateMultipleBasicValues>({
    mode: "onSubmit",
    defaultValues: {
      selectedDates: [new Date(2026, 2, 2), new Date(2026, 2, 16)],
    },
  });

  const {
    control: ruleControl,
    handleSubmit: handleRuleSubmit,
    formState: { isSubmitting: isRuleSubmitting },
  } = useForm<RHFDateMultipleRuleValues>({
    mode: "onSubmit",
    defaultValues: {
      requiredDates: undefined,
    },
  });

  const {
    control: optionsControl,
    handleSubmit: handleOptionsSubmit,
    formState: { isSubmitting: isOptionsSubmitting },
  } = useForm<RHFDateMultipleOptionsValues>({
    mode: "onSubmit",
    defaultValues: {
      limitedDates: [new Date(2026, 2, 7), new Date(2026, 2, 14)],
    },
  });

  const {
    control: displayControl,
    handleSubmit: handleDisplaySubmit,
    formState: { isSubmitting: isDisplaySubmitting },
  } = useForm<RHFDateMultipleDisplayValues>({
    mode: "onSubmit",
    defaultValues: {
      customDates: [new Date(2026, 2, 11), new Date(2026, 2, 18)],
    },
  });

  const handleBasicFormSubmit = async (values: RHFDateMultipleBasicValues) => {
    console.log(values);
  };

  const handleRuleFormSubmit = async (values: RHFDateMultipleRuleValues) => {
    console.log(values);
  };

  const handleOptionsFormSubmit = async (
    values: RHFDateMultipleOptionsValues,
  ) => {
    console.log(values);
  };

  const handleDisplayFormSubmit = async (
    values: RHFDateMultipleDisplayValues,
  ) => {
    console.log(values);
  };

  return (
    <GuideSection
      label="리액트 훅 폼"
      title="RHFDateMultiplePicker / 폼 연동"
      description="RHFDateMultiplePicker는 DateMultiplePicker props를 유지하면서 Date[] 필드를 react-hook-form에 연결합니다."
    >
      <GuideProp
        isWide
        name="DateMultiplePicker props 확장 + UseControllerProps"
        typeLabel='Omit<DateMultiplePickerProps, "selected"> & UseControllerProps<TFieldValues, TName>'
        description="RHFDateMultiplePicker도 DateMultiplePicker props를 그대로 유지합니다. selected는 RHF field.value에서 주입됩니다."
      >
        <form onSubmit={handleBasicSubmit(handleBasicFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>선택 날짜 목록</Field.Label>
              <RHFDateMultiplePicker
                name="selectedDates"
                control={basicControl}
                isClearable
                infoMsg="복수 선택 모드의 RHF 기본 연결 예시"
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
        typeLabel="validate ..."
        description="복수 선택 필드는 선택 개수 조건을 validate로 검사하는 패턴이 자주 사용됩니다."
      >
        <form onSubmit={handleRuleSubmit(handleRuleFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>최소 2개 날짜 선택</Field.Label>
              <RHFDateMultiplePicker
                name="requiredDates"
                control={ruleControl}
                isClearable
                rules={{
                  validate: (value) =>
                    value && value.length >= 2
                      ? true
                      : "날짜를 2개 이상 선택해주세요.",
                }}
              />
            </Field>
            <Button color="primary" type="submit" disabled={isRuleSubmitting}>
              검증
            </Button>
          </div>
        </form>
      </GuideProp>

      <GuideProp
        isWide
        name="dayPickerProps"
        typeLabel="PropsMulti | PropsMultiRequired"
        description="required, min, max, disabled 같은 복수 선택 옵션을 RHF 상태와 함께 사용할 수 있습니다."
      >
        <form onSubmit={handleOptionsSubmit(handleOptionsFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>제한된 복수 날짜 선택</Field.Label>
              <RHFDateMultiplePicker
                name="limitedDates"
                control={optionsControl}
                isClearable
                dayPickerProps={{
                  min: 1,
                  max: 3,
                  disabled: { dayOfWeek: [0] },
                }}
                infoMsg="최대 3개까지 선택하고 일요일은 제외한 RHF 예시입니다."
              />
            </Field>
            <Button color="primary" type="submit" disabled={isOptionsSubmitting}>
              제출
            </Button>
          </div>
        </form>
      </GuideProp>

      <GuideProp
        isWide
        name="displayFormat | formatDisplayValue | closeOnSelect"
        typeLabel='string | ({ displayFormat, locale, selected }) => string | boolean'
        description="복수 선택 모드도 DatepickerBase의 공통 표시 포맷/닫힘 제어 props를 그대로 사용할 수 있습니다."
      >
        <form onSubmit={handleDisplaySubmit(handleDisplayFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>복수 날짜 표시 형식</Field.Label>
              <RHFDateMultiplePicker
                name="customDates"
                control={displayControl}
                closeOnSelect
                isClearable
                formatDisplayValue={({ selected, locale }) =>
                  selected?.length
                    ? `${selected
                        .map((date) => format(date, "M월 d일", { locale }))
                        .join(", ")}`
                    : ""
                }
                infoMsg="closeOnSelect=true와 커스텀 표시 문자열 예시입니다."
              />
            </Field>
            <Button color="primary" type="submit" disabled={isDisplaySubmitting}>
              제출
            </Button>
          </div>
        </form>
      </GuideProp>
    </GuideSection>
  );
}
