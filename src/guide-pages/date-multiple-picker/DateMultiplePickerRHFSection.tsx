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

type RHFDateMultipleStateValues = {
  readOnlyDates: Date[] | undefined;
  disabledDates: Date[] | undefined;
};

type RHFDateMultipleCalendarValues = {
  initiallyOpenDates: Date[] | undefined;
  persistentOpenDates: Date[] | undefined;
};

type RHFDateMultipleAdvancedCalendarValues = {
  defaultMonthDates: Date[] | undefined;
  customCloseDates: Date[] | undefined;
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

  const { control: stateControl } = useForm<RHFDateMultipleStateValues>({
    defaultValues: {
      readOnlyDates: [new Date(2026, 2, 5), new Date(2026, 2, 12)],
      disabledDates: [new Date(2026, 2, 20), new Date(2026, 2, 27)],
    },
  });

  const { control: calendarControl } = useForm<RHFDateMultipleCalendarValues>({
    defaultValues: {
      initiallyOpenDates: [new Date(2026, 2, 4), new Date(2026, 2, 11)],
      persistentOpenDates: [new Date(2026, 2, 17), new Date(2026, 2, 24)],
    },
  });

  const { control: advancedCalendarControl } =
    useForm<RHFDateMultipleAdvancedCalendarValues>({
      defaultValues: {
        defaultMonthDates: undefined,
        customCloseDates: [],
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
        name="DateMultiplePicker props 확장 + RHFComponentProps"
        typeLabel='RHFComponentProps<TFormValues, TFieldName, DateMultiplePickerProps, "selected">'
        description='RHFDateMultiplePicker는 DateMultiplePicker props를 기반으로 하고, "selected" 값은 RHF field.value로 관리합니다. name/control/rules/defaultValue/shouldUnregister/disabled는 RHF가 관리하고, 나머지 DateMultiplePicker UI props와 캘린더 제어 props는 그대로 사용할 수 있습니다. clear 버튼을 사용하면 RHF 값이 먼저 undefined로 정리된 뒤 onClear를 전달했다면 그 다음 호출됩니다.'
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

      <GuideProp
        isWide
        name="readOnly | disabled"
        typeLabel="boolean"
        description="RHFDateMultiplePicker도 DateMultiplePicker 상태 props를 그대로 상속합니다. readOnly는 현재 선택만 표시하면서 캘린더 열기, 날짜 변경, clear를 막고, disabled는 RHF controller와 UI를 함께 비활성화합니다."
      >
        <div className="guideFormStack">
          <Field>
            <Field.Label>readOnly 복수 날짜</Field.Label>
            <RHFDateMultiplePicker
              name="readOnlyDates"
              control={stateControl}
              readOnly
              isClearable
              infoMsg="readOnly 상태에서는 현재 선택만 표시되고 캘린더와 clear 버튼이 비활성화됩니다."
            />
          </Field>
          <Field>
            <Field.Label>disabled 복수 날짜</Field.Label>
            <RHFDateMultiplePicker
              name="disabledDates"
              control={stateControl}
              disabled
              infoMsg="disabled는 RHF field와 UI를 함께 비활성화합니다."
            />
          </Field>
        </div>
      </GuideProp>

      <GuideProp
        isWide
        name="defaultCalendarOpen | closeOnSelect | calendarButtonTitle | dropdownClassName"
        typeLabel="boolean | string"
        description="RHF 연결 상태에서도 캘린더 열림/닫힘 관련 props를 그대로 사용할 수 있습니다. defaultCalendarOpen은 내부 상태의 초기값이고, closeOnSelect=true로 선택 시마다 닫히도록 바꿀 수 있습니다. calendarButtonTitle과 dropdownClassName도 동일하게 전달됩니다."
      >
        <div className="guideFormStack">
          <Field>
            <Field.Label>초기 열림 RHF 복수 선택 캘린더</Field.Label>
            <RHFDateMultiplePicker
              name="initiallyOpenDates"
              control={calendarControl}
              defaultCalendarOpen
              calendarButtonTitle="초기 열림 RHF 복수 선택 캘린더"
              dropdownClassName="datepicker__dropdown--preview"
              infoMsg="defaultCalendarOpen, calendarButtonTitle, dropdownClassName을 함께 사용한 RHF 예시입니다."
            />
          </Field>
          <Field>
            <Field.Label>선택 시 닫히는 RHF 복수 선택 캘린더</Field.Label>
            <RHFDateMultiplePicker
              name="persistentOpenDates"
              control={calendarControl}
              closeOnSelect
              calendarButtonTitle="선택 시 닫히는 RHF 복수 선택 캘린더"
              infoMsg="closeOnSelect=true로 선택할 때마다 닫히는 RHF 예시입니다."
            />
          </Field>
        </div>
      </GuideProp>

      <GuideProp
        isWide
        name="getDefaultMonth | shouldCloseOnSelect"
        typeLabel='({ selected }) => Date | undefined | ({ closeOnSelect, nextSelected }) => boolean'
        description="RHF 연결 상태에서도 getDefaultMonth와 shouldCloseOnSelect를 그대로 사용할 수 있습니다. 선택값이 없을 때 처음 보여줄 월을 계산하거나, 복수 선택 중 닫힘 조건을 직접 커스터마이징할 때 사용합니다."
      >
        <div className="guideFormStack">
          <Field>
            <Field.Label>기본 월 커스텀</Field.Label>
            <RHFDateMultiplePicker
              name="defaultMonthDates"
              control={advancedCalendarControl}
              defaultCalendarOpen
              getDefaultMonth={({ selected }) =>
                selected?.[0] ?? new Date(2026, 6, 1)
              }
              calendarButtonTitle="기본 월 커스텀 RHF 복수 선택 캘린더"
              infoMsg="selected가 없으면 2026년 7월부터 시작하도록 기본 월을 커스터마이징한 RHF 예시입니다."
            />
          </Field>
          <Field>
            <Field.Label>닫힘 조건 커스텀</Field.Label>
            <RHFDateMultiplePicker
              name="customCloseDates"
              control={advancedCalendarControl}
              shouldCloseOnSelect={({ nextSelected }) =>
                Boolean(nextSelected && nextSelected.length >= 3)
              }
              calendarButtonTitle="3개 이상 선택 시 닫힘"
              infoMsg="3개 미만을 선택하면 캘린더를 유지하고, 3개 이상 선택하면 닫히도록 제어한 RHF 예시입니다."
            />
          </Field>
        </div>
      </GuideProp>
    </GuideSection>
  );
}
