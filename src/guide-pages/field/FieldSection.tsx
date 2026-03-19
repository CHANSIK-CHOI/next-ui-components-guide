import {
  Button,
  ButtonGroup,
  Checkbox,
  Datepicker,
  Field,
  Password,
  Radio,
  RadioGroup,
  Search,
  Select,
  Switch,
  Textarea,
  Textfield,
} from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";

const CATEGORY_OPTIONS = [
  { value: "input", label: "Input" },
  { value: "popup", label: "Popup" },
  { value: "layout", label: "Layout" },
];

export default function FieldSection() {
  return (
    <GuideSection
      label="Field"
      title="Field / form layout"
      description="Field는 label, description, message, input을 한 흐름으로 묶는 폼 레이아웃 컴포넌트입니다."
    >
      <GuideProp
        isWide
        name="inputId | direction | align | Field.Label | Field.Description | Field.Message"
        typeLabel='string | "row" | "column" | "start" | "center"'
        description="Field root는 inputId로 label 연결을 고정하고, direction과 align으로 기본 배치를 제어합니다. Label, Description, Message는 같은 맥락의 보조 정보로 묶어 두는 용도입니다."
      >
        <Field inputId="field-preview-textfield">
          <Field.Label>라벨 영역</Field.Label>
          <Textfield
            isClearable
            placeholder="텍스트를 입력해주세요"
            errorMessage="필수 입력란입니다."
          />
          <Field.Description>
            Field.Label은 htmlFor를 자동 연결하고, Description은 같은 블록의
            보조 설명을 붙입니다.
          </Field.Description>
        </Field>

        <Field inputId="field-preview-switch" direction="row" align="center">
          <Field.Label>라벨 영역</Field.Label>
          <Switch />
        </Field>
      </GuideProp>

      <GuideProp
        isWide
        name="Field.Item"
        typeLabel={[`align?: "start" | "center"`, `as?: "label" | "span"`]}
        description="Checkbox, Switch, Radio처럼 input과 label이 한 줄에 붙는 컴포넌트는
            Field.Item으로 항목 단위 정렬을 맞추는 편이 레이아웃 구성에
            편리합니다."
      >
        <Field>
          <Field.Item align="start" inputId="alignStartEx">
            <Checkbox />
            <Field.Label>
              label의 텍스트가 길 때 예시입니다. 안녕하세요 최찬식입니다.
              퍼블리싱 경험을 바탕으로 Next.js 환경에서 구현한 UI 컴포넌트들을
              정리한 가이드 페이지입니다. 저는 애니메이션 라이브러리 중 GSAP와
              Framer Motion을 사용이 가능합니다. 이번 프로젝트에서는 Framer
              Motion을 선택했는데 그 이유는 애니메이션 구현이 컴포넌트로 구성이
              되어있어 리엑트와 상성이 잘 맞는다고 생각했기 때문입니다.
            </Field.Label>
          </Field.Item>
          <Field.Description>
            align=start는 label의 텍스트와 input의 레이아웃을 상단으로
            수정합니다.
          </Field.Description>
        </Field>

        <Field>
          <Field.Label as="span">span label</Field.Label>
          <RadioGroup name="fieldAlertChannel" direction="row">
            <Field.Item>
              <Radio value="radio1" />
              <Field.Label>Radio 1</Field.Label>
            </Field.Item>
            <Field.Item>
              <Radio value="radio2" />
              <Field.Label>Radio 2</Field.Label>
            </Field.Item>
            <Field.Item>
              <Radio value="radio3" />
              <Field.Label>Radio 3</Field.Label>
            </Field.Item>
          </RadioGroup>
          <Field.Description>
            as=span은 input과 label의 id & htmlFor 연결이 불필요하여 label
            태그가 아닌 span 태그로 출력할 때 사용합니다.
          </Field.Description>
        </Field>
      </GuideProp>

      <GuideProp
        isWide
        name="form composition"
        typeLabel="layout example"
        description="지금까지 만든 입력 컴포넌트를 Field로 묶어 실제 폼 흐름으로 배치한 예시입니다. label, description, message을 한 눈에 볼 수 있도록 구성했습니다."
      >
        <Field>
          <Field.Label>담당자 검색</Field.Label>
          <Search
            value="최찬식"
            placeholder="작업자를 검색해주세요"
            infoMessage="최근 검색 키워드: 최찬식"
          />
        </Field>

        <Field>
          <Field.Label>프로젝트 제목</Field.Label>
          <Textfield
            value="Next UI Components Guide"
            placeholder="프로젝트 제목을 입력해주세요"
          />
        </Field>

        <Field>
          <Field.Label>비밀번호</Field.Label>
          <Password
            value="guide-project"
            placeholder="비밀번호를 입력해주세요."
          />
        </Field>

        <div className="guideFieldForm__grid">
          <Field>
            <Field.Label>카테고리</Field.Label>
            <Select
              options={CATEGORY_OPTIONS}
              placeholder="카테고리를 선택해주세요"
            />
          </Field>

          <Field>
            <Field.Label>작업 날짜</Field.Label>
            <Datepicker placeholder="날짜를 선택해주세요" isClearable />
          </Field>
        </div>

        <Field>
          <p className="guideFieldForm__groupLabel">공개 범위</p>
          <RadioGroup name="fieldVisibility" direction="row">
            <Field.Item>
              <Radio />
              <Field.Label>전체 공개</Field.Label>
            </Field.Item>
            <Field.Item>
              <Radio />
              <Field.Label>링크 공개</Field.Label>
            </Field.Item>
            <Field.Item>
              <Radio />
              <Field.Label>비공개</Field.Label>
            </Field.Item>
          </RadioGroup>
        </Field>

        <Field>
          <Field.Item>
            <Switch />
            <Field.Label>링크 공유기능 켜기</Field.Label>
          </Field.Item>
        </Field>

        <Field>
          <Field.Item align="start">
            <Checkbox />
            <Field.Label>
              해당 프로젝트는 포트폴리오 용도로만 사용됨을 확인하였습니다.
            </Field.Label>
          </Field.Item>
        </Field>

        <Field>
          <Field.Label>요약 메모</Field.Label>
          <Textarea
            rows={5}
            placeholder="프로젝트 요약을 입력해주세요"
            errorMessage="필수 입력란입니다."
          />
        </Field>

        <ButtonGroup className="guideFieldForm__actions">
          <ButtonGroup.Item>
            <Button type="submit" color="primary">
              임시 저장
            </Button>
          </ButtonGroup.Item>
          <ButtonGroup.Item>
            <Button type="button" variant="line">
              초기화
            </Button>
          </ButtonGroup.Item>
        </ButtonGroup>
      </GuideProp>
    </GuideSection>
  );
}
