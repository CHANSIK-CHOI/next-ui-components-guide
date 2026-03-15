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

type RHFDatepickerStateValues = {
  readOnlyDate: Date | undefined;
  disabledDate: Date | undefined;
};

type RHFDatepickerCalendarValues = {
  initiallyOpenDate: Date | undefined;
  persistentOpenDate: Date | undefined;
};

type RHFDatepickerAdvancedCalendarValues = {
  defaultMonthDate: Date | undefined;
  customCloseDate: Date | undefined;
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

  const { control: stateControl } = useForm<RHFDatepickerStateValues>({
    defaultValues: {
      readOnlyDate: new Date(2026, 2, 6),
      disabledDate: new Date(2026, 2, 28),
    },
  });

  const { control: calendarControl } = useForm<RHFDatepickerCalendarValues>({
    defaultValues: {
      initiallyOpenDate: new Date(2026, 2, 9),
      persistentOpenDate: new Date(2026, 2, 21),
    },
  });

  const { control: advancedCalendarControl } =
    useForm<RHFDatepickerAdvancedCalendarValues>({
      defaultValues: {
        defaultMonthDate: undefined,
        customCloseDate: undefined,
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
      label="React Hook Form"
      title="RHFDatepicker / 폼 연동"
      description="RHFDatepicker는 Datepicker props를 유지하면서 useController로 단일 날짜 필드를 React Hook Form에 연결하는 래퍼 컴포넌트입니다."
    >
      <GuideProp
        isWide
        name="Datepicker props 확장 + RHFComponentProps"
        typeLabel='RHFComponentProps<TFormValues, TFieldName, DatepickerProps, "selected">'
        description='RHFDatepicker는 Datepicker props를 기반으로 하고, "selected" 값은 RHF field.value로 관리합니다. name/control/rules/defaultValue/shouldUnregister/disabled는 RHF가 관리하고, 나머지 Datepicker UI props와 캘린더 제어 props는 그대로 전달할 수 있습니다. clear 버튼을 사용하면 RHF 값이 먼저 undefined로 정리된 뒤 onClear가 호출됩니다.'
      >
        <form onSubmit={handleBasicSubmit(handleBasicFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>예약 날짜</Field.Label>
              <RHFDatepicker
                name="bookingDate"
                control={basicControl}
                isClearable
                infoMessage="name과 control을 전달하면 RHF 단일 날짜 필드와 연결됩니다."
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
                infoMessage="required + 2026년 3월 10일~25일 범위 제한 + 주말 비활성화 예시입니다."
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
        name="displayFormat | formatDisplayValue | shouldCloseOnSelect"
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
                shouldCloseOnSelect={false}
                isClearable
                formatDisplayValue={({ selected, locale }) =>
                  selected
                    ? `${format(selected, "yyyy.MM.dd (EEE)", {
                        locale,
                      })} 일정`
                    : ""
                }
                infoMessage="선택 후 캘린더를 유지하면서 커스텀 표시 문자열을 노출합니다."
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
        description="RHFDatepicker도 Datepicker 상태 props를 그대로 상속합니다. disabled는 RHF controller와 UI 모두 비활성화하고, readOnly는 현재 값만 표시하면서 캘린더 열기, 날짜 변경, clear를 막습니다."
      >
        <div className="guideFormStack">
          <Field>
            <Field.Label>disabled 날짜</Field.Label>
            <RHFDatepicker
              name="disabledDate"
              control={stateControl}
              disabled
              infoMessage="disabled는 RHF field와 UI를 함께 비활성화합니다."
            />
          </Field>
          <Field>
            <Field.Label>readOnly 날짜</Field.Label>
            <RHFDatepicker
              name="readOnlyDate"
              control={stateControl}
              readOnly
              isClearable
              infoMessage="readOnly 상태에서는 현재 값만 표시되고 캘린더와 clear 버튼이 비활성화됩니다."
            />
          </Field>
        </div>
      </GuideProp>

      <GuideProp
        isWide
        name="defaultIsCalendarOpen | shouldCloseOnSelect | calendarButtonTitle | dropdownClassName"
        typeLabel="boolean | string"
        description="RHF 연결 상태에서도 캘린더 열림/닫힘 관련 props를 그대로 사용할 수 있습니다. defaultIsCalendarOpen은 내부 상태의 초기값이고, shouldCloseOnSelect=false로 선택 후에도 캘린더를 유지할 수 있습니다. dropdownClassName은 실제 열리는 캘린더 래퍼에 class를 추가합니다."
      >
        <div className="guideFormStack">
          <Field>
            <Field.Label>초기 열림 RHF 캘린더</Field.Label>
            <RHFDatepicker
              name="initiallyOpenDate"
              control={calendarControl}
              defaultIsCalendarOpen
              calendarButtonTitle="초기 열림 RHF 캘린더"
              dropdownClassName="datepicker__dropdown--preview"
              infoMessage="defaultIsCalendarOpen과 dropdownClassName을 함께 사용한 RHF 예시입니다."
            />
          </Field>
          <Field>
            <Field.Label>선택 후 유지 RHF 캘린더</Field.Label>
            <RHFDatepicker
              name="persistentOpenDate"
              control={calendarControl}
              shouldCloseOnSelect={false}
              calendarButtonTitle="선택 후 유지 RHF 캘린더"
              infoMessage="shouldCloseOnSelect=false로 선택 후에도 캘린더를 유지하는 RHF 예시입니다."
            />
          </Field>
        </div>
      </GuideProp>

      <GuideProp
        isWide
        name="getDefaultMonth | getShouldCloseOnSelect"
        typeLabel='({ selected }) => Date | undefined | ({ shouldCloseOnSelect, nextSelected }) => boolean'
        description="RHF 연결 상태에서도 getDefaultMonth와 getShouldCloseOnSelect를 그대로 사용할 수 있습니다. 선택값이 없을 때 처음 보여줄 월을 계산하거나, 날짜 선택 후 닫힘 조건을 직접 커스터마이징할 때 사용합니다."
      >
        <div className="guideFormStack">
          <Field>
            <Field.Label>기본 월 커스텀</Field.Label>
            <RHFDatepicker
              name="defaultMonthDate"
              control={advancedCalendarControl}
              defaultIsCalendarOpen
              getDefaultMonth={({ selected }) =>
                selected ?? new Date(2026, 6, 1)
              }
              calendarButtonTitle="기본 월 커스텀 RHF 캘린더"
              infoMessage="selected가 없으면 2026년 7월부터 시작하도록 기본 월을 커스터마이징한 RHF 예시입니다."
            />
          </Field>
          <Field>
            <Field.Label>닫힘 조건 커스텀</Field.Label>
            <RHFDatepicker
              name="customCloseDate"
              control={advancedCalendarControl}
              getShouldCloseOnSelect={({ nextSelected }) =>
                Boolean(nextSelected && nextSelected.getDate() >= 15)
              }
              calendarButtonTitle="15일 이후 선택 시 닫힘"
              infoMessage="15일 미만 날짜를 선택하면 캘린더를 유지하고, 15일 이후 날짜를 선택하면 닫히도록 제어한 RHF 예시입니다."
            />
          </Field>
        </div>
      </GuideProp>
    </GuideSection>
  );
}
