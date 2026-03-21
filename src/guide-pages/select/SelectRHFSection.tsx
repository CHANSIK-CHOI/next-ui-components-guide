import { Button, Field, RHFMultiSelect, RHFSelect } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { useForm } from "react-hook-form";

const CATEGORY_OPTIONS = [
  { value: "product", label: "프로덕트" },
  { value: "design", label: "디자인" },
  { value: "marketing", label: "마케팅" },
  { value: "ops", label: "운영" },
];

const ROLE_OPTIONS = [
  { value: "viewer", label: "뷰어" },
  { value: "editor", label: "에디터" },
  { value: "manager", label: "매니저" },
  { value: "admin", label: "어드민" },
];

const STACK_OPTIONS = [
  { value: "react", label: "React" },
  { value: "nextjs", label: "Next.js" },
  { value: "typescript", label: "TypeScript" },
  { value: "scss", label: "SCSS" },
  { value: "zustand", label: "Zustand" },
];

const ASSIGNEE_OPTIONS = [
  { value: "minji", label: "김민지" },
  { value: "jiyoon", label: "박지윤" },
  { value: "taehyun", label: "이태현" },
  { value: "hyunwoo", label: "정현우" },
];

type RHFBasicDemoValues = {
  category: string | null;
};

type RHFValidationDemoValues = {
  role: string | null;
};

type RHFMultiDemoValues = {
  stacks: string[];
};

type RHFSearchDemoValues = {
  assignee: string | null;
};

export default function SelectRHFSection() {
  const {
    control: basicControl,
    handleSubmit: handleBasicSubmit,
    formState: { isSubmitting: isBasicSubmitting },
  } = useForm<RHFBasicDemoValues>({
    mode: "onSubmit",
    defaultValues: {
      category: "product",
    },
  });

  const {
    control: validationControl,
    handleSubmit: handleValidationSubmit,
    formState: { isSubmitting: isValidationSubmitting },
  } = useForm<RHFValidationDemoValues>({
    mode: "onSubmit",
    defaultValues: {
      role: null,
    },
  });

  const {
    control: multiControl,
    handleSubmit: handleMultiSubmit,
    formState: { isSubmitting: isMultiSubmitting },
  } = useForm<RHFMultiDemoValues>({
    mode: "onSubmit",
    defaultValues: {
      stacks: ["react", "typescript"],
    },
  });

  const {
    control: searchControl,
    handleSubmit: handleSearchSubmit,
    formState: { isSubmitting: isSearchSubmitting },
  } = useForm<RHFSearchDemoValues>({
    mode: "onSubmit",
    defaultValues: {
      assignee: null,
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

  const handleMultiFormSubmit = async (values: RHFMultiDemoValues) => {
    console.log(values);
  };

  const handleSearchFormSubmit = async (values: RHFSearchDemoValues) => {
    console.log(values);
  };

  return (
    <GuideSection
      label="React Hook Form"
      title="RHFSelect / RHFMultiSelect / 폼 연동"
      description="RHFSelect는 단일 선택, RHFMultiSelect는 다중 선택을 React Hook Form 필드와 연결한 래퍼 컴포넌트입니다."
    >
      <GuideProp
        isWide
        name="Select props 확장 + RHFComponentProps"
        typeLabel="RHFComponentProps<TFormValues, TFieldName, SelectProps, RHFValueInputManagedProps>"
        description="RHFSelect는 Select props를 기반으로 하고, name/value/defaultValue/onBlur/onChange는 RHF가 관리합니다. 단일 선택값은 string | number | null 형태로 RHF 상태와 연결되고, defaultValue도 null 또는 단일 value 형태를 사용합니다."
      >
        <form onSubmit={handleBasicSubmit(handleBasicFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>카테고리</Field.Label>
              <RHFSelect
                name="category"
                control={basicControl}
                options={CATEGORY_OPTIONS}
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
        typeLabel="required | validate"
        description="필수 선택처럼 단일 선택값이 반드시 있어야 하는 경우 rules로 검증을 연결할 수 있습니다."
      >
        <form onSubmit={handleValidationSubmit(handleValidationFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>권한</Field.Label>
              <RHFSelect
                name="role"
                control={validationControl}
                options={ROLE_OPTIONS}
                placeholder="권한을 선택해주세요"
                rules={{
                  validate: (value) => value != null || "권한 선택은 필수입니다.",
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
        name="RHFMultiSelect"
        typeLabel="RHFComponentProps<TFormValues, TFieldName, MultiSelectProps, RHFValueInputManagedProps>"
        description="RHFMultiSelect는 다중 선택 전용 래퍼입니다. RHF 필드는 배열 값을 다루고, defaultValue도 [] 같은 배열 형태를 사용하는 것이 자연스럽습니다. closeMenuOnSelect={false} 조합도 자주 함께 사용합니다."
      >
        <form onSubmit={handleMultiSubmit(handleMultiFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>기술 스택</Field.Label>
              <RHFMultiSelect
                name="stacks"
                control={multiControl}
                options={STACK_OPTIONS}
                isSearchable
                isClearable
                closeMenuOnSelect={false}
                infoMessage="배열 값으로 RHF 상태와 연결됩니다."
                rules={{
                  validate: (value) =>
                    Array.isArray(value) && value.length > 0
                      ? true
                      : "최소 한 가지 스택을 선택해주세요.",
                }}
              />
            </Field>
            <Button color="primary" type="submit" disabled={isMultiSubmitting}>
              제출
            </Button>
          </div>
        </form>
      </GuideProp>

      <GuideProp
        isWide
        name="react-select props"
        typeLabel="isSearchable | isClearable | noOptionsMessage | menuPlacement ..."
        description="RHF 연결과 함께 react-select 주요 props를 그대로 함께 전달할 수 있습니다. isSearchable, isClearable, noOptionsMessage, menuPlacement뿐 아니라 styles, components 같은 확장도 동일하게 사용할 수 있습니다."
      >
        <form onSubmit={handleSearchSubmit(handleSearchFormSubmit)}>
          <div className="guideFormStack">
            <Field>
              <Field.Label>담당자</Field.Label>
              <RHFSelect
                name="assignee"
                control={searchControl}
                options={ASSIGNEE_OPTIONS}
                isSearchable
                isClearable
                menuPlacement="top"
                placeholder="담당자를 검색해주세요"
                noOptionsMessage={() => "검색 결과가 없습니다."}
                infoMessage="react-select props와 styles, components 확장도 RHFSelect에서 함께 사용할 수 있습니다."
              />
            </Field>
            <Button
              color="primary"
              type="submit"
              disabled={isSearchSubmitting}
            >
              제출
            </Button>
          </div>
        </form>
      </GuideProp>
    </GuideSection>
  );
}
