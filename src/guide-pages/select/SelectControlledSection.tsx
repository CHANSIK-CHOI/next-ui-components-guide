import { Field, MultiSelect, Select } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import type { GroupBase } from "react-select";
import { useState } from "react";

const CATEGORY_OPTIONS = [
  { value: "product", label: "프로덕트" },
  { value: "design", label: "디자인" },
  { value: "marketing", label: "마케팅" },
  { value: "ops", label: "운영" },
];

const ASSIGNEE_OPTIONS = [
  { value: "minji", label: "김민지" },
  { value: "jiyoon", label: "박지윤" },
  { value: "taehyun", label: "이태현" },
  { value: "hyunwoo", label: "정현우" },
];

const STACK_OPTIONS = [
  { value: "react", label: "React" },
  { value: "nextjs", label: "Next.js" },
  { value: "typescript", label: "TypeScript" },
  { value: "scss", label: "SCSS" },
  { value: "zustand", label: "Zustand" },
];

const ROLE_OPTIONS: readonly GroupBase<{
  value: string;
  label: string;
}>[] = [
  {
    label: "기본 권한",
    options: [
      { value: "viewer", label: "뷰어" },
      { value: "editor", label: "에디터" },
    ],
  },
  {
    label: "관리 권한",
    options: [
      { value: "manager", label: "매니저" },
      { value: "admin", label: "어드민" },
    ],
  },
];

export default function SelectControlledSection() {
  const [category, setCategory] = useState<string | number | null>("design");
  const [assignee, setAssignee] = useState<string | number | null>(null);
  const [stacks, setStacks] = useState<(string | number)[]>([
    "react",
    "typescript",
  ]);
  const [disabledCategory] = useState<string | number | null>("ops");
  const [readOnlyRole] = useState<string | number | null>("editor");

  return (
    <GuideSection
      label="Select"
      title="Select / controlled usage"
      description="Select는 react-select를 기반으로 value와 onChange를 외부 상태로 관리하는 controlled usage를 기준으로 정리한 선택 컴포넌트입니다."
    >
      <GuideProp
        isWide
        name="value | onChange | options"
        typeLabel={[
          "value: string | number | null",
          "options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>",
        ]}
        description="Select는 단일 선택 전용 래퍼입니다. react-select의 option 객체는 내부에서만 쓰고, 외부에서는 선택된 value 하나만 주고받습니다. options는 일반 목록과 grouped options를 모두 그대로 전달할 수 있습니다."
      >
        <Field>
          <Field.Label>카테고리</Field.Label>
          <Select
            options={CATEGORY_OPTIONS}
            value={category}
            onChange={(nextValue) => setCategory(nextValue as string | null)}
          />
        </Field>
      </GuideProp>

      <GuideProp
        isWide
        name="isSearchable | isClearable | placeholder"
        typeLabel="boolean | string"
        description="react-select의 검색과 clear 기능을 그대로 열어두되, 기본 스타일은 Textfield와 유사한 형태로 맞췄습니다."
      >
        <Field>
          <Field.Label>담당자</Field.Label>
          <Select
            options={ASSIGNEE_OPTIONS}
            value={assignee}
            onChange={(nextValue) => setAssignee(nextValue as string | null)}
            isSearchable
            isClearable
            placeholder="담당자를 선택해주세요"
            noOptionsMessage={() => "검색 결과가 없습니다."}
          />
        </Field>
      </GuideProp>

      <GuideProp
        isWide
        name="MultiSelect"
        typeLabel="value: (string | number)[]"
        description="MultiSelect는 다중 선택 전용 래퍼입니다. value는 항상 배열로 관리되고, 여러 option을 chip 형태로 선택할 수 있습니다."
      >
        <Field>
          <Field.Label>기술 스택</Field.Label>
          <MultiSelect
            options={STACK_OPTIONS}
            value={stacks}
            onChange={(nextValue) => setStacks(nextValue)}
            isSearchable
            isClearable
            closeMenuOnSelect={false}
            placeholder="기술 스택을 선택해주세요"
          />
        </Field>
      </GuideProp>

      <GuideProp
        isWide
        name="disabled | readOnly | isError | grouped options"
        typeLabel="boolean | OptionsOrGroups<SelectOption, GroupBase<SelectOption>>"
        description="disabled는 상호작용 전체를 막고, readOnly는 현재 값을 유지한 채 메뉴 열기, 검색, clear, 값 변경만 막습니다. grouped options는 Select와 MultiSelect 모두 그대로 전달할 수 있습니다."
      >
        <Field>
          <Field.Label>disabled 상태</Field.Label>
          <Select
            options={CATEGORY_OPTIONS}
            value={disabledCategory}
            disabled
          />
        </Field>
        <Field>
          <Field.Label>readOnly 상태</Field.Label>
          <Select options={ROLE_OPTIONS} value={readOnlyRole} readOnly />
        </Field>
        <Field>
          <Field.Label>isError 상태</Field.Label>
          <Select
            options={CATEGORY_OPTIONS}
            value={null}
            isError
            errorMessage="항목을 선택해주세요."
          />
        </Field>
      </GuideProp>
    </GuideSection>
  );
}
