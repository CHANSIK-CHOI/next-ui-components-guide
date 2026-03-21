import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { RHF_PASSWORD_PROPS_CODE } from "@/components/Guide/passwordTypeReferences";

const rhfPasswordPropsRows: GuidePropsTableRow[] = [
  {
    name: "name",
    typeLabel: "FieldPath<TFormValues>",
    required: true,
    description: "React Hook Form 필드 경로입니다.",
  },
  {
    name: "control",
    typeLabel: "Control<TFormValues>",
    required: true,
    description: "useForm에서 받은 control 객체를 전달합니다.",
  },
  {
    name: "rules",
    typeLabel: "RHFTextfieldProps['rules']",
    defaultValue: "undefined",
    description: "비밀번호 검증 규칙을 RHFTextfield와 동일하게 연결합니다.",
  },
  {
    name: "defaultValue",
    typeLabel: "string",
    defaultValue: "undefined",
    description:
      "필요할 때만 사용하며, 일반적으로는 useForm의 defaultValues를 우선 사용합니다.",
  },
  {
    name: "shouldUnregister",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "조건부 렌더링으로 필드가 사라질 때 RHF 상태에서도 값을 제거할지 결정합니다.",
  },
  {
    name: "defaultIsPasswordVisible",
    typeLabel: "boolean",
    defaultValue: "false",
    description: "초기 비밀번호 표시 상태를 제어합니다.",
  },
  {
    name: "hidePasswordTitle / showPasswordTitle",
    typeLabel: "string",
    defaultValue: '"비밀번호 숨기기" | "비밀번호 보기"',
    description: "토글 버튼의 접근성 title을 커스터마이즈합니다.",
  },
  {
    name: "formatValue",
    typeLabel: "(value: string) => string",
    defaultValue: "undefined",
    description:
      "RHFTextfield에서 상속한 값 가공 로직도 그대로 사용할 수 있습니다.",
  },
  {
    name: "isClearable / infoMessage / readOnly / disabled ...",
    typeLabel: "RHFTextfield inherited props",
    defaultValue: "inherited",
    description:
      "RHFTextfield와 Textfield의 UI props를 그대로 전달할 수 있습니다.",
  },
];

export default function RHFPasswordPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="RHFPassword props 한눈에 보기"
      description="RHFPassword에서 사용하는 RHF 제어 props와 비밀번호 토글 관련 추가 props를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={rhfPasswordPropsRows}
        note={
          <>
            <span>
              <code>RHFPasswordProps</code>는 <code>RHFTextfieldProps</code>
              에서 <code>children</code>과 <code>type</code>을 숨기고,
              비밀번호 토글용 prop만 추가한 타입입니다. 내부에서{" "}
              <code>type</code>은 <code>{'"password"'}</code>와{" "}
              <code>{'"text"'}</code> 사이를 토글합니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="RHFPasswordProps 보기"
                title="RHFPasswordProps"
                description="RHFTextfield 기반 비밀번호 입력 래퍼의 타입 정의입니다."
                code={RHF_PASSWORD_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
