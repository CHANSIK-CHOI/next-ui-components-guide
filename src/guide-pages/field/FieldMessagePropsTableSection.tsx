import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { FIELD_MESSAGE_PROPS_CODE } from "@/components/Guide/fieldTypeReferences";

const fieldMessagePropsRows: GuidePropsTableRow[] = [
  {
    name: "infoMessage",
    typeLabel: "string",
    defaultValue: '""',
    description: "보조 안내 메시지를 출력합니다.",
  },
  {
    name: "errorMessage",
    typeLabel: "string",
    defaultValue: '""',
    description:
      "에러 메시지를 출력합니다. 내부 Message 컴포넌트 규칙에 따라 infoMessage보다 우선적으로 보일 수 있습니다.",
  },
  {
    name: "id",
    typeLabel: "string",
    defaultValue: "auto generated message id",
    description:
      "생략하면 자동 id를 만들고, 실제 메시지 내용이 있을 때만 현재 Field scope에 등록합니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "Field.Message wrapper에 커스텀 클래스를 추가합니다.",
  },
];

export default function FieldMessagePropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Field.Message props 한눈에 보기"
      description="Field.Message는 현재 스코프 아래에 메시지 슬롯을 직접 배치하고 싶을 때 사용합니다."
    >
      <GuidePropsTable
        rows={fieldMessagePropsRows}
        note={
          <>
            <span>
              <code>Field.Message</code>는 내용이 있을 때만 현재 Field scope에
              자신의 id를 등록합니다. 따라서 빈 상태에서는 불필요한{" "}
              <code>aria-describedby</code> 연결을 만들지 않습니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="FieldMessageProps 보기"
                title="FieldMessageProps"
                description="Field.Message가 받는 메시지 slot 전용 props 타입입니다."
                code={FIELD_MESSAGE_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
