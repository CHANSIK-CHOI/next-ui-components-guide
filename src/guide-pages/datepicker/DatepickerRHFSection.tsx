import { Button, Field, RHFDatepicker } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { format } from "date-fns";
import { useForm } from "react-hook-form";

type RHFDatepickerBasicValues = {
  bookingDate: Date | undefined;
};

type RHFDatepickerRuleValues = {
  requiredDate: Date | undefined;
};

type RHFDatepickerOptionsValues = {
  optionDate: Date | undefined;
};

type RHFDatepickerDisplayValues = {
  displayDate: Date | undefined;
};

export default function DatepickerRHFSection() {
  const {
    control: basicControl,
    handleSubmit: handleBasicSubmit,
    formState: { isSubmitting: isBasicSubmitting },
  } = useForm<RHFDatepickerBasicValues>({
    mode: "onSubmit",
    defaultValues: {
      bookingDate: new Date(2026, 2, 13),
    },
  });

  const {
    control: ruleControl,
    handleSubmit: handleRuleSubmit,
    formState: { isSubmitting: isRuleSubmitting },
  } = useForm<RHFDatepickerRuleValues>({
    mode: "onSubmit",
    defaultValues: {
      requiredDate: undefined,
    },
  });

  const {
    control: optionsControl,
    handleSubmit: handleOptionsSubmit,
    formState: { isSubmitting: isOptionsSubmitting },
  } = useForm<RHFDatepickerOptionsValues>({
    mode: "onSubmit",
    defaultValues: {
      optionDate: new Date(2026, 2, 17),
    },
  });

  const {
    control: displayControl,
    handleSubmit: handleDisplaySubmit,
    formState: { isSubmitting: isDisplaySubmitting },
  } = useForm<RHFDatepickerDisplayValues>({
    mode: "onSubmit",
    defaultValues: {
      displayDate: new Date(2026, 2, 24),
    },
  });

  const handleBasicFormSubmit = async (values: RHFDatepickerBasicValues) => {
    console.log(values);
  };

  const handleRuleFormSubmit = async (values: RHFDatepickerRuleValues) => {
    console.log(values);
  };

  const handleOptionsFormSubmit = async (
    values: RHFDatepickerOptionsValues,
  ) => {
    console.log(values);
  };

  const handleDisplayFormSubmit = async (
    values: RHFDatepickerDisplayValues,
  ) => {
    console.log(values);
  };

  return (
    <GuideSection
      label="리액트 훅 폼"
      title="RHFDatepicker / 폼 연동"
      description="RHFDatepicker는 Datepicker props를 유지하면서 useController로 단일 날짜 필드를 react-hook-form에 연결하는 래퍼 컴포넌트입니다."
    >
      <GuideProp
        isWide
        name="Datepicker props 확장 + UseControllerProps"
        typeLabel='Omit<DatepickerProps, "selected"> & UseControllerProps<TFieldValues, TName>'
        description="RHFDatepicker는 Datepicker props를 확장하고, selected는 RHF field.value로 연결합니다. 그래서 placeholder, isClearable, dayPickerProps 같은 Datepicker props를 그대로 사용할 수 있습니다."
      >
        <form onSubmit={handleBasicSubmit(handleBasicFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>예약 날짜</Field.Label>
              <RHFDatepicker
                name="bookingDate"
                control={basicControl}
                isClearable
                infoMsg="name과 control을 전달하면 RHF 단일 날짜 필드와 연결됩니다."
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
        description="날짜 필드도 RHF rules로 검증할 수 있습니다. 아래 예시는 선택하지 않은 상태로 제출하면 에러를 보여줍니다."
      >
        <form onSubmit={handleRuleSubmit(handleRuleFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>필수 날짜 선택</Field.Label>
              <RHFDatepicker
                name="requiredDate"
                control={ruleControl}
                isClearable
                rules={{
                  required: "날짜를 선택해주세요.",
                  validate: (value) =>
                    value instanceof Date || "유효한 날짜를 선택해주세요.",
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
        typeLabel="PropsSingle | PropsSingleRequired"
        description="RHF 연결 상태에서도 dayPickerProps를 그대로 전달할 수 있습니다. required, startMonth, endMonth, disabled 같은 DayPicker 옵션을 함께 사용할 수 있습니다."
      >
        <form onSubmit={handleOptionsSubmit(handleOptionsFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>옵션 날짜</Field.Label>
              <RHFDatepicker
                name="optionDate"
                control={optionsControl}
                isClearable
                dayPickerProps={{
                  required: true,
                  startMonth: new Date(2026, 2, 1),
                  endMonth: new Date(2026, 2, 31),
                  disabled: [
                    { dayOfWeek: [0, 6] },
                    { before: new Date(2026, 2, 10) },
                    { after: new Date(2026, 2, 25) },
                  ],
                }}
                infoMsg="required + 2026년 3월 10일~25일 범위 제한 + 주말 비활성화 예시입니다."
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
        description="Datepicker에서 제공하는 표시 포맷과 캘린더 동작 props도 RHFDatepicker에서 그대로 사용할 수 있습니다."
      >
        <form onSubmit={handleDisplaySubmit(handleDisplayFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>표시 형식 커스텀</Field.Label>
              <RHFDatepicker
                name="displayDate"
                control={displayControl}
                displayFormat="yyyy년 MM월 dd일"
                closeOnSelect={false}
                isClearable
                formatDisplayValue={({ selected, locale }) =>
                  selected
                    ? `${format(selected, "yyyy.MM.dd (EEE)", {
                        locale,
                      })} 일정`
                    : ""
                }
                infoMsg="선택 후 캘린더를 유지하면서 커스텀 표시 문자열을 노출합니다."
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
