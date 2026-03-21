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
      description="Field는 label, description, message와 입력 요소를 한 흐름으로 묶고, Field.Item과 Field.Grid로 행/열 레이아웃을 조합하는 폼 레이아웃 컴포넌트입니다."
    >
      <GuideProp
        isWide
        name="inputId | direction | align | infoMessage | errorMessage | Field.Label | Field.Description | Field.Message"
        typeLabel='string | "row" | "column" | "start" | "center"'
        description="Field root는 하나의 폼 블록 스코프입니다. inputId로 label 연결을 고정하고, infoMessage/errorMessage 또는 Field.Message로 안내 문구를 배치할 수 있습니다. error 상태는 내부 입력 컴포넌트와 자동으로 공유됩니다."
      >
        <Field
          inputId="field-preview-textfield"
          errorMessage="Field 레벨 에러 메시지입니다."
        >
          <Field.Label>라벨 영역</Field.Label>
          <Textfield isClearable placeholder="텍스트를 입력해주세요" />
          <Field.Description>
            Label은 htmlFor를 자동 연결하고, Field에 errorMessage가 있으면
            Textfield도 같은 에러 스타일을 받습니다.
          </Field.Description>
        </Field>

        <Field inputId="field-preview-switch" direction="row" align="center">
          <Field.Label>라벨 영역</Field.Label>
          <Switch />
          <Field.Message infoMessage="Field.Message를 직접 두면 현재 스코프 아래에 안내 문구를 별도로 배치할 수 있습니다." />
        </Field>
      </GuideProp>

      <GuideProp
        isWide
        name="Field.Item"
        typeLabel={[
          `direction?: "row" | "column"`,
          `align?: "start" | "center"`,
          `infoMessage?: string`,
          `errorMessage?: string`,
        ]}
        description="Field.Item은 하나의 행 스코프입니다. 독립적으로 써도 되고 Field 안에 넣어도 되며, 자신의 infoMessage/errorMessage만으로도 내부 input이 동일한 상태를 받습니다."
      >
        <Field.Item
          align="start"
          inputId="alignStartEx"
          infoMessage="Field.Item 레벨 안내 메시지입니다."
          errorMessage="Field.Item 레벨 에러 메시지입니다."
        >
          <Checkbox />
          <Field.Label>
            label의 텍스트가 길 때 예시입니다. 약관 제목이나 긴 안내 문구처럼
            두 줄 이상으로 내려가더라도 체크박스와 label, description이 같은
            행 스코프 안에서 자연스럽게 정렬되는지 확인하기 위한 샘플
            문구입니다.
          </Field.Label>
          <Field.Description>
            align=start는 label의 텍스트와 input의 레이아웃을 상단으로
            수정합니다.
          </Field.Description>
        </Field.Item>

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
            as=span은 input과 label의 id, htmlFor 연결이 불필요한 그룹
            제목이나 보조 라벨에 사용합니다.
          </Field.Description>
        </Field>
      </GuideProp>

      <GuideProp
        isWide
        name="Field.Grid"
        typeLabel="columns?: 1 | 2 | 3 | 4"
        description="좌우 배치는 별도 div 대신 Field.Grid으로 처리합니다. Field.Grid은 레이아웃만 담당하고, 각 자식 Field/Field.Item의 inputId 스코프는 건드리지 않습니다."
      >
        <Field.Grid>
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
        </Field.Grid>
      </GuideProp>

      <GuideProp
        isWide
        name="form composition"
        typeLabel="layout example"
        description="지금까지 만든 입력 컴포넌트를 Field로 묶어 실제 폼 흐름으로 배치한 예시입니다. label, description, message를 함께 보면서도 레이아웃은 Field, Field.Item, Field.Grid만으로 구성합니다."
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

        <Field.Grid>
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
        </Field.Grid>

        <Field>
          <Field.Label as="span" className="guideFieldForm__groupLabel">
            공개 범위
          </Field.Label>
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
