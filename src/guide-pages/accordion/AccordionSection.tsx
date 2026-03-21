import {
  Accordion,
  Button,
  ButtonGroup,
  Checkbox,
  Field,
  Search,
  Select,
  Switch,
  Textarea,
  Textfield,
} from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { useState } from "react";

const CATEGORY_OPTIONS = [
  { value: "release", label: "배포 점검" },
  { value: "content", label: "콘텐츠 수정" },
  { value: "qa", label: "QA 확인" },
];

export default function AccordionSection() {
  const [activeIndices, setActiveIndices] = useState<number[]>([0]);
  const [ownerKeyword, setOwnerKeyword] = useState("김민지");
  const [taskCategory, setTaskCategory] = useState<string | number | null>(
    "release",
  );
  const [taskTitle, setTaskTitle] = useState("3월 UI 점검 배포");
  const [reviewMemo, setReviewMemo] = useState(
    "아코디언 패널 안에 입력 요소를 넣었을 때 열림 전환과 상태 유지가 자연스러운지 같이 확인합니다.",
  );
  const [shouldNotifySlack, setShouldNotifySlack] = useState(true);
  const [agreeRequiredTerms, setAgreeRequiredTerms] = useState(false);
  const [agreeMarketingTerms, setAgreeMarketingTerms] = useState(true);

  return (
    <GuideSection
      label="Accordion"
      title="Accordion / usage"
      description="Accordion은 필요한 정보만 접고 펼치는 compound UI입니다. 이 페이지에서는 box/line variant, activeIndices 제어, shouldKeepMounted, buttonIndex 패턴을 기준으로 정리합니다."
    >
      <GuideProp
        name="children | type | variant | defaultActiveIndices"
        typeLabel={["ReactNode", '"single" | "multiple"', '"box" | "line"']}
        defaultValue='type="multiple", variant="box", defaultActiveIndices=[]'
        description="기본 구조는 Accordion 안에 Item, Button, Head, Panel을 조합하는 형태입니다. 아래 예시는 단일 패널만 열리는 box variant의 기본 패턴입니다."
        isWide
      >
        <Accordion variant="box" type="single" defaultActiveIndices={[1]}>
          <Accordion.Item index={0}>
            <Accordion.Button index={0}>
              <Accordion.Head>[ Step 1 ] 실이용자 정보 업로드</Accordion.Head>
            </Accordion.Button>
            <Accordion.Panel index={0}>
              <div className="guideAccordionNote">
                업로드 대상 파일 형식과 개인정보 마스킹 여부를 먼저 확인한 뒤
                다음 단계로 진행합니다.
              </div>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item index={1}>
            <Accordion.Button index={1}>
              <Accordion.Head>[ Step 2 ] 검수 결과 확인</Accordion.Head>
            </Accordion.Button>
            <Accordion.Panel index={1}>
              <div className="guideAccordionNote">
                승인 이력과 첨부 메모를 같이 검토하면 이후 단계에서 수정 범위를
                빠르게 좁힐 수 있습니다.
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </GuideProp>

      <GuideProp
        name="activeIndices | onChange | shouldKeepMounted"
        typeLabel={[
          "number[]",
          "(nextActiveIndices: number[]) => void",
          "boolean",
        ]}
        defaultValue="shouldKeepMounted=false"
        description="activeIndices를 연결하면 외부 상태로 열린 패널을 제어할 수 있습니다. shouldKeepMounted를 true로 두면 패널을 닫아도 내부 form 상태가 유지돼서 실제 입력 요소 테스트에 더 적합합니다."
        isWide
      >
        <ButtonGroup>
          <ButtonGroup.Item>
            <Button
              size="small"
              variant="line"
              onClick={() => setActiveIndices([0])}
            >
              첫 패널만 열기
            </Button>
          </ButtonGroup.Item>
          <ButtonGroup.Item>
            <Button
              size="small"
              variant="line"
              onClick={() => setActiveIndices([0, 1])}
            >
              전체 열기
            </Button>
          </ButtonGroup.Item>
          <ButtonGroup.Item>
            <Button
              size="small"
              color="primary"
              variant="line"
              onClick={() => setActiveIndices([])}
            >
              전체 닫기
            </Button>
          </ButtonGroup.Item>
        </ButtonGroup>

        <Accordion
          variant="line"
          type="multiple"
          activeIndices={activeIndices}
          onChange={setActiveIndices}
          shouldKeepMounted
        >
          <Accordion.Item index={0}>
            <Accordion.Button index={0}>
              <Accordion.Head>담당자와 작업 분류 확인</Accordion.Head>
            </Accordion.Button>
            <Accordion.Panel index={0}>
              <Field>
                <Field.Label>담당자 검색</Field.Label>
                <Search
                  value={ownerKeyword}
                  isClearable
                  onChange={(event) => setOwnerKeyword(event.target.value)}
                  onClear={() => setOwnerKeyword("")}
                  onSearch={() => undefined}
                  placeholder="담당자를 검색해주세요"
                />
              </Field>

              <Field>
                <Field.Label>작업 카테고리</Field.Label>
                <Select
                  options={CATEGORY_OPTIONS}
                  value={taskCategory}
                  onChange={(nextValue) => setTaskCategory(nextValue)}
                  placeholder="작업 카테고리를 선택해주세요"
                />
              </Field>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item index={1}>
            <Accordion.Button index={1}>
              <Accordion.Head>검수 메모와 공유 설정</Accordion.Head>
            </Accordion.Button>
            <Accordion.Panel index={1}>
              <Field>
                <Field.Label>작업 제목</Field.Label>
                <Textfield
                  value={taskTitle}
                  isClearable
                  onChange={(event) => setTaskTitle(event.target.value)}
                  onClear={() => setTaskTitle("")}
                  placeholder="작업 제목을 입력해주세요"
                />
              </Field>

              <Field>
                <Field.Item>
                  <Switch
                    checked={shouldNotifySlack}
                    onChange={(event) =>
                      setShouldNotifySlack(event.target.checked)
                    }
                  />
                  <Field.Label>Slack 채널에 변경 내용을 함께 공유</Field.Label>
                </Field.Item>
                <Field.Description>
                  패널을 닫았다 다시 열어도 shouldKeepMounted가 true면 이 값은
                  그대로 유지됩니다.
                </Field.Description>
              </Field>

              <Field>
                <Field.Label>검수 메모</Field.Label>
                <Textarea
                  value={reviewMemo}
                  rows={4}
                  isClearable
                  onChange={(event) => setReviewMemo(event.target.value)}
                  onClear={() => setReviewMemo("")}
                  placeholder="검수 메모를 입력해주세요"
                />
              </Field>

              <ButtonGroup>
                <ButtonGroup.Item>
                  <Button type="button" color="primary">
                    저장
                  </Button>
                </ButtonGroup.Item>
                <ButtonGroup.Item>
                  <Button type="button" variant="line">
                    미리보기
                  </Button>
                </ButtonGroup.Item>
              </ButtonGroup>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </GuideProp>

      <GuideProp
        isWide
        name="buttonIndex"
        typeLabel="number"
        description="Accordion.Head에 buttonIndex를 주면 헤더 전체를 버튼으로 감싸지 않고, 오른쪽 화살표만 토글 버튼으로 쓸 수 있습니다. 헤더 텍스트는 토글 버튼과 panel의 접근성 이름으로 함께 연결되며, 약관 동의처럼 헤더 안에 체크박스나 다른 인터랙션을 넣을 때 이 패턴이 더 안전합니다."
      >
        <Accordion variant="box" type="multiple" defaultActiveIndices={[0]}>
          <Accordion.Item index={0}>
            <Accordion.Head buttonIndex={0}>
              <Field.Item align="start" inputId="required-terms">
                <Checkbox
                  checked={agreeRequiredTerms}
                  onChange={(event) =>
                    setAgreeRequiredTerms(event.target.checked)
                  }
                />
                <Field.Label>
                  [필수] 개인정보 수집 및 이용 약관에 동의합니다.
                </Field.Label>
              </Field.Item>
            </Accordion.Head>
            <Accordion.Panel index={0}>
              <div className="guideAccordionTerms">
                <div className="guideAccordionBadgeRow">
                  <span className="guideAccordionBadge">필수 항목</span>
                  <span className="guideAccordionBadge">
                    현재 상태: {agreeRequiredTerms ? "동의 완료" : "미동의"}
                  </span>
                </div>

                <ul className="guideAccordionTerms__list">
                  <li className="guideAccordionTerms__item">
                    서비스 제공을 위한 기본 계정 정보와 접속 로그를 수집합니다.
                  </li>
                  <li className="guideAccordionTerms__item">
                    관련 법령 보관 기간이 끝나면 지체 없이 파기한다는
                    조건입니다.
                  </li>
                  <li className="guideAccordionTerms__item">
                    헤더의 체크박스는 독립적으로 동작하고, 오른쪽 화살표만
                    패널을 엽니다.
                  </li>
                </ul>
              </div>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item index={1}>
            <Accordion.Head buttonIndex={1}>
              <Field.Item align="start" inputId="marketing-terms">
                <Checkbox
                  checked={agreeMarketingTerms}
                  onChange={(event) =>
                    setAgreeMarketingTerms(event.target.checked)
                  }
                />
                <Field.Label>
                  [선택] 이벤트 및 업데이트 알림 수신에 동의합니다.
                </Field.Label>
              </Field.Item>
            </Accordion.Head>
            <Accordion.Panel index={1}>
              <div className="guideAccordionTerms">
                <ul className="guideAccordionTerms__list">
                  <li className="guideAccordionTerms__item">
                    이메일, 문자, 앱 푸시 중 일부 채널로 안내가 발송될 수
                    있습니다.
                  </li>
                  <li className="guideAccordionTerms__item">
                    마케팅 수신 동의는 언제든지 설정 화면에서 해제할 수
                    있습니다.
                  </li>
                </ul>
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </GuideProp>
    </GuideSection>
  );
}
