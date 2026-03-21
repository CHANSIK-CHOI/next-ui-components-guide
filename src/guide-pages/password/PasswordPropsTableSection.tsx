import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { PASSWORD_PROPS_CODE } from "@/components/Guide/passwordTypeReferences";

const passwordPropsRows: GuidePropsTableRow[] = [
  {
    name: "value",
    typeLabel: 'string | number | readonly string[] | undefined',
    defaultValue: "undefined",
    description: "현재 입력값을 외부 상태로 관리합니다.",
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
    name: "isClearable / onClear",
    typeLabel: "boolean | () => void",
    defaultValue: "false | undefined",
    description:
      "clear 버튼은 Textfield와 같은 조건으로 노출되며, clear 시 표시 상태는 다시 숨김으로 돌아갑니다.",
  },
  {
    name: "placeholder | infoMessage | errorMessage",
    typeLabel: "string",
    defaultValue: "Textfield defaults",
    description:
      "비밀번호 입력에도 Textfield의 보조 메시지와 에러 메시지 규칙을 그대로 적용합니다.",
  },
  {
    name: "disabled",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "입력과 비밀번호 토글 버튼을 모두 비활성화합니다.",
  },
  {
    name: "readOnly",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "직접 입력과 clear 버튼은 막지만 보기/숨기기 토글은 유지합니다.",
  },
  {
    name: "name / maxLength / autoComplete / placeholder ...",
    typeLabel: "Textfield inherited props",
    defaultValue: "inherited",
    description:
      "Textfield에서 허용하는 native input props와 UI props를 함께 전달할 수 있습니다.",
  },
];

export default function PasswordPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Password props 한눈에 보기"
      description="Password에서 자주 사용하는 비밀번호 토글 관련 props와 Textfield 상속 props를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={passwordPropsRows}
        note={
          <>
            <span>
              <code>PasswordProps</code>는 <code>TextfieldProps</code>에서{" "}
              <code>children</code>과 <code>type</code>을 숨기고, 비밀번호
              토글용 prop만 추가한 타입입니다. 내부에서 <code>type</code>은{" "}
              <code>{'"password"'}</code>와 <code>{'"text"'}</code> 사이를
              토글합니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="PasswordProps 보기"
                title="PasswordProps"
                description="Textfield 기반 비밀번호 입력 래퍼의 타입 정의입니다."
                code={PASSWORD_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
