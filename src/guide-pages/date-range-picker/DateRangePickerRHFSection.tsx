import { Button, Field, RHFDateRangePicker } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import type { DateRange } from "react-day-picker";

type RHFDateRangeBasicValues = {
  stayRange: DateRange | undefined;
};

type RHFDateRangeRuleValues = {
  requiredRange: DateRange | undefined;
};

type RHFDateRangeOptionsValues = {
  limitedRange: DateRange | undefined;
};

type RHFDateRangeDisplayValues = {
  customRange: DateRange | undefined;
};

export default function DateRangePickerRHFSection() {
  const {
    control: basicControl,
    handleSubmit: handleBasicSubmit,
    formState: { isSubmitting: isBasicSubmitting },
  } = useForm<RHFDateRangeBasicValues>({
    mode: "onSubmit",
    defaultValues: {
      stayRange: {
        from: new Date(2026, 2, 11),
        to: new Date(2026, 2, 13),
      },
    },
  });

  const {
    control: ruleControl,
    handleSubmit: handleRuleSubmit,
    formState: { isSubmitting: isRuleSubmitting },
  } = useForm<RHFDateRangeRuleValues>({
    mode: "onSubmit",
    defaultValues: {
      requiredRange: undefined,
    },
  });

  const {
    control: optionsControl,
    handleSubmit: handleOptionsSubmit,
    formState: { isSubmitting: isOptionsSubmitting },
  } = useForm<RHFDateRangeOptionsValues>({
    mode: "onSubmit",
    defaultValues: {
      limitedRange: {
        from: new Date(2026, 2, 18),
        to: new Date(2026, 2, 20),
      },
    },
  });

  const {
    control: displayControl,
    handleSubmit: handleDisplaySubmit,
    formState: { isSubmitting: isDisplaySubmitting },
  } = useForm<RHFDateRangeDisplayValues>({
    mode: "onSubmit",
    defaultValues: {
      customRange: {
        from: new Date(2026, 2, 24),
        to: new Date(2026, 2, 27),
      },
    },
  });

  const handleBasicFormSubmit = async (values: RHFDateRangeBasicValues) => {
    console.log(values);
  };

  const handleRuleFormSubmit = async (values: RHFDateRangeRuleValues) => {
    console.log(values);
  };

  const handleOptionsFormSubmit = async (
    values: RHFDateRangeOptionsValues,
  ) => {
    console.log(values);
  };

  const handleDisplayFormSubmit = async (
    values: RHFDateRangeDisplayValues,
  ) => {
    console.log(values);
  };

  return (
    <GuideSection
      label="리액트 훅 폼"
      title="RHFDateRangePicker / 폼 연동"
      description="RHFDateRangePicker는 DateRangePicker props를 유지하면서 useController로 DateRange 필드를 react-hook-form에 연결합니다."
    >
      <GuideProp
        isWide
        name="DateRangePicker props 확장 + UseControllerProps"
        typeLabel='Omit<DateRangePickerProps, "selected"> & UseControllerProps<TFieldValues, TName>'
        description="RHFDateRangePicker도 DateRangePicker props를 그대로 유지합니다. selected는 RHF field.value로 주입되고, onSelectedChange는 완료된 범위가 선택됐을 때 field.onChange와 함께 동작합니다. 새 범위를 다시 시작하면 RHF 값은 undefined로 초기화됩니다."
      >
        <form onSubmit={handleBasicSubmit(handleBasicFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>숙박 기간</Field.Label>
              <RHFDateRangePicker
                name="stayRange"
                control={basicControl}
                isClearable
                infoMsg="name과 control만으로 RHF 기간 필드와 연결됩니다."
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
        typeLabel="required | validate ..."
        description="기간 필드는 시작일과 종료일이 모두 있어야 하므로 validate에서 from/to를 함께 검사하는 패턴이 자주 사용됩니다."
      >
        <form onSubmit={handleRuleSubmit(handleRuleFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>필수 기간 선택</Field.Label>
              <RHFDateRangePicker
                name="requiredRange"
                control={ruleControl}
                isClearable
                rules={{
                  validate: (value) =>
                    value?.from && value?.to
                      ? true
                      : "시작일과 종료일을 모두 선택해주세요.",
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
        typeLabel="PropsRange | PropsRangeRequired"
        description="RHF 연결 상태에서도 min, max, excludeDisabled, disabled, required 같은 기간 선택 옵션을 그대로 전달할 수 있습니다."
      >
        <form onSubmit={handleOptionsSubmit(handleOptionsFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>제한된 기간 선택</Field.Label>
              <RHFDateRangePicker
                name="limitedRange"
                control={optionsControl}
                isClearable
                dayPickerProps={{
                  min: 2,
                  max: 4,
                  excludeDisabled: true,
                  disabled: { dayOfWeek: [0, 6] },
                }}
                infoMsg="주말 제외, 최소 2일 이상 최대 4일 이하 범위 예시입니다."
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
        description="DateRangePicker에서 제공하는 표시 포맷과 닫힘 제어도 RHFDateRangePicker에서 그대로 사용할 수 있습니다."
      >
        <form onSubmit={handleDisplaySubmit(handleDisplayFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>기간 표시 형식 커스텀</Field.Label>
              <RHFDateRangePicker
                name="customRange"
                control={displayControl}
                displayFormat="yyyy년 MM월 dd일"
                closeOnSelect={false}
                isClearable
                formatDisplayValue={({ selected, locale }) => {
                  if (!selected?.from) return "";
                  if (!selected.to) {
                    return `${format(selected.from, "M월 d일", {
                      locale,
                    })} 체크인`;
                  }

                  return `${format(selected.from, "M월 d일", {
                    locale,
                  })} - ${format(selected.to, "M월 d일", {
                    locale,
                  })} 숙박`;
                }}
                infoMsg="기간 표시 문자열을 커스터마이징한 RHF 예시입니다."
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
