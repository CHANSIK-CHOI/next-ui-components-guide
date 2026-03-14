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

type RHFDateRangeStateValues = {
  readOnlyRange: DateRange | undefined;
  disabledRange: DateRange | undefined;
};

type RHFDateRangeCalendarValues = {
  initiallyOpenRange: DateRange | undefined;
  persistentOpenRange: DateRange | undefined;
};

type RHFDateRangeAdvancedCalendarValues = {
  defaultMonthRange: DateRange | undefined;
  customCloseRange: DateRange | undefined;
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

  const { control: stateControl } = useForm<RHFDateRangeStateValues>({
    defaultValues: {
      readOnlyRange: {
        from: new Date(2026, 2, 7),
        to: new Date(2026, 2, 9),
      },
      disabledRange: {
        from: new Date(2026, 2, 28),
        to: new Date(2026, 2, 30),
      },
    },
  });

  const { control: calendarControl } = useForm<RHFDateRangeCalendarValues>({
    defaultValues: {
      initiallyOpenRange: {
        from: new Date(2026, 2, 12),
        to: new Date(2026, 2, 14),
      },
      persistentOpenRange: {
        from: new Date(2026, 2, 20),
        to: new Date(2026, 2, 23),
      },
    },
  });

  const { control: advancedCalendarControl } =
    useForm<RHFDateRangeAdvancedCalendarValues>({
      defaultValues: {
        defaultMonthRange: undefined,
        customCloseRange: undefined,
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
      label="React Hook Form"
      title="RHFDateRangePicker / 폼 연동"
      description="RHFDateRangePicker는 DateRangePicker props를 유지하면서 useController로 DateRange 필드를 React Hook Form에 연결합니다."
    >
      <GuideProp
        isWide
        name="DateRangePicker props 확장 + RHFComponentProps"
        typeLabel='RHFComponentProps<TFormValues, TFieldName, DateRangePickerProps, "selected">'
        description='RHFDateRangePicker는 DateRangePicker props를 기반으로 하고, "selected" 값은 RHF field.value로 관리합니다. name/control/rules/defaultValue/shouldUnregister/disabled는 RHF가 관리하고, 나머지 DateRangePicker UI props와 캘린더 제어 props는 그대로 전달할 수 있습니다. 새 범위를 다시 시작하면 RHF 값은 undefined로 초기화되고, clear 버튼을 사용하면 RHF 값이 먼저 undefined로 정리된 뒤 onClear가 호출됩니다.'
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

      <GuideProp
        isWide
        name="disabled | readOnly"
        typeLabel="boolean"
        description="RHFDateRangePicker도 DateRangePicker 상태 props를 그대로 상속합니다. disabled는 RHF controller와 UI를 함께 비활성화하고, readOnly는 현재 기간만 표시하면서 캘린더 열기, 기간 변경, clear를 막습니다."
      >
        <div className="guideFormStack">
          <Field>
            <Field.Label>disabled 기간</Field.Label>
            <RHFDateRangePicker
              name="disabledRange"
              control={stateControl}
              disabled
              infoMsg="disabled는 RHF field와 UI를 함께 비활성화합니다."
            />
          </Field>
          <Field>
            <Field.Label>readOnly 기간</Field.Label>
            <RHFDateRangePicker
              name="readOnlyRange"
              control={stateControl}
              readOnly
              isClearable
              infoMsg="readOnly 상태에서는 현재 기간만 표시되고 캘린더와 clear 버튼이 비활성화됩니다."
            />
          </Field>
        </div>
      </GuideProp>

      <GuideProp
        isWide
        name="defaultCalendarOpen | closeOnSelect | calendarButtonTitle | dropdownClassName"
        typeLabel="boolean | string"
        description="RHF 연결 상태에서도 캘린더 열림/닫힘 관련 props를 그대로 사용할 수 있습니다. defaultCalendarOpen은 내부 상태의 초기값이고, closeOnSelect=false로 완료 후에도 캘린더를 유지할 수 있습니다. calendarButtonTitle과 dropdownClassName도 동일하게 전달됩니다."
      >
        <div className="guideFormStack">
          <Field>
            <Field.Label>초기 열림 RHF 기간 캘린더</Field.Label>
            <RHFDateRangePicker
              name="initiallyOpenRange"
              control={calendarControl}
              defaultCalendarOpen
              calendarButtonTitle="초기 열림 RHF 기간 캘린더"
              dropdownClassName="datepicker__dropdown--preview"
              infoMsg="defaultCalendarOpen, calendarButtonTitle, dropdownClassName을 함께 사용한 RHF 예시입니다."
            />
          </Field>
          <Field>
            <Field.Label>완료 후 유지 RHF 기간 캘린더</Field.Label>
            <RHFDateRangePicker
              name="persistentOpenRange"
              control={calendarControl}
              closeOnSelect={false}
              calendarButtonTitle="완료 후 유지 RHF 기간 캘린더"
              infoMsg="closeOnSelect=false로 완료 후에도 캘린더를 유지하는 RHF 예시입니다."
            />
          </Field>
        </div>
      </GuideProp>

      <GuideProp
        isWide
        name="getDefaultMonth | shouldCloseOnSelect"
        typeLabel='({ selected }) => Date | undefined | ({ closeOnSelect, nextSelected }) => boolean'
        description="RHF 연결 상태에서도 getDefaultMonth와 shouldCloseOnSelect를 그대로 사용할 수 있습니다. 선택값이 없을 때 처음 보여줄 월을 계산하거나, 범위 선택 완료 후 닫힘 조건을 직접 커스터마이징할 때 사용합니다."
      >
        <div className="guideFormStack">
          <Field>
            <Field.Label>기본 월 커스텀</Field.Label>
            <RHFDateRangePicker
              name="defaultMonthRange"
              control={advancedCalendarControl}
              defaultCalendarOpen
              getDefaultMonth={({ selected }) =>
                selected?.from ?? selected?.to ?? new Date(2026, 6, 1)
              }
              calendarButtonTitle="기본 월 커스텀 RHF 기간 캘린더"
              infoMsg="selected가 없으면 2026년 7월부터 시작하도록 기본 월을 커스터마이징한 RHF 예시입니다."
            />
          </Field>
          <Field>
            <Field.Label>닫힘 조건 커스텀</Field.Label>
            <RHFDateRangePicker
              name="customCloseRange"
              control={advancedCalendarControl}
              shouldCloseOnSelect={({ nextSelected }) =>
                Boolean(
                  nextSelected?.from &&
                    nextSelected?.to &&
                    nextSelected.to.getDate() >= 20,
                )
              }
              calendarButtonTitle="종료일 20일 이후면 닫힘"
              infoMsg="종료일이 20일 미만이면 완료 범위를 선택해도 캘린더를 유지하고, 20일 이후면 닫히도록 제어한 RHF 예시입니다."
            />
          </Field>
        </div>
      </GuideProp>
    </GuideSection>
  );
}
