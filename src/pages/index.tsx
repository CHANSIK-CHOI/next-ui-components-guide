import {
  Button,
  ButtonGroup,
  Datepicker,
  RHFDatepicker,
  RHFTextfield,
  Textfield,
} from "@/components";
import { GuideLayout, GuideSection } from "@/components/Guide";
import { CalendarIcon } from "@/components/Icon";
import Head from "next/head";
import { type CSSProperties, useState } from "react";
import { useForm } from "react-hook-form";
import {
  siDatefns,
  siFramer,
  siNextdotjs,
  siReact,
  siReacthookform,
  siSass,
  siTypescript,
} from "simple-icons";

type SAMPLE_FORM_TYPE = {
  sampleText: string;
  sampleDate: Date | undefined;
};
const SAMPLE_FORM: SAMPLE_FORM_TYPE = {
  sampleText: "",
  sampleDate: undefined,
};

type LogoIcon = {
  path: string;
  hex: string;
  title: string;
};

type LibraryItem = {
  label: string;
  icon?: LogoIcon;
  monogram?: string;
  isCalendar?: boolean;
};

const PROJECT_LIBRARIES: LibraryItem[] = [
  { label: "Next.js 14", icon: siNextdotjs },
  { label: "React 18", icon: siReact },
  { label: "TypeScript 5", icon: siTypescript },
  { label: "Sass (SCSS)", icon: siSass },
];

const UI_LIBRARIES: LibraryItem[] = [
  { label: "react-hook-form", icon: siReacthookform },
  { label: "react-day-picker", isCalendar: true },
  { label: "date-fns", icon: siDatefns },
  { label: "classnames", monogram: "cn" },
];

const MOTION_LIBRARIES: LibraryItem[] = [
  { label: "framer-motion", icon: siFramer },
];

function LibraryLogo({ item }: { item: LibraryItem }) {
  const style = item.icon
    ? ({ color: `#${item.icon.hex}` } as CSSProperties)
    : undefined;

  return (
    <span className="homeOverview__logo" style={style} aria-hidden="true">
      {item.icon ? (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d={item.icon.path} />
        </svg>
      ) : item.isCalendar ? (
        <CalendarIcon size={18} />
      ) : (
        <span className="homeOverview__logoText">{item.monogram}</span>
      )}
    </span>
  );
}

function LibraryList({ items }: { items: LibraryItem[] }) {
  return (
    <ul className="homeOverview__list">
      {items.map((item) => (
        <li key={item.label} className="homeOverview__listItem">
          <LibraryLogo item={item} />
          <span className="homeOverview__listLabel">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const [sampleTextfieldValue, setSampleTextfieldValue] = useState("");
  const [sampleDatepickerValue, setSampleDatepickerValue] = useState<
    Date | undefined
  >(new Date());
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SAMPLE_FORM_TYPE>({
    mode: "onSubmit",
    defaultValues: SAMPLE_FORM,
  });

  const onSubmit = async (value: SAMPLE_FORM_TYPE) => {
    console.log(value);
  };

  return (
    <>
      <Head>
        <title>Next UI Components Guide</title>
        <meta
          name="description"
          content="컴포넌트 페이지 단위로 정리하는 Next UI Components Guide"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GuideLayout
        currentPath="/"
        title="UI Components Guide"
        description="Next.js 환경에서 제가 처음부터 끝까지 직접 구현한 UI 컴포넌트 가이드입니다."
      >
        <GuideSection
          label="Project Overview"
          title="프로젝트 소개"
          description="Next 기반 환경에서 공용 UI 컴포넌트를 직접 구현하고, 실제 사용 패턴과 함께 문서화하는 가이드 프로젝트입니다."
        >
          <div className="homeOverview">
            <article className="homeOverview__hero">
              <div className="homeOverview__heroBadge">
                <LibraryLogo item={{ label: "Next.js", icon: siNextdotjs }} />
                <span className="homeOverview__heroLabel">
                  Next 기반 UI 컴포넌트 가이드
                </span>
              </div>
              <p className="homeOverview__heroDescription">
                Button, Textfield, Search, Password, Datepicker 계열
                컴포넌트를 직접 설계하고, controlled 사용 방식과 React Hook
                Form 연동 방식을 함께 비교할 수 있도록 구성했습니다.
              </p>
            </article>

            <div className="homeOverview__grid">
              <article className="homeOverview__card">
                <h3 className="homeOverview__cardTitle">프로젝트 구성</h3>
                <LibraryList items={PROJECT_LIBRARIES} />
              </article>

              <article className="homeOverview__card">
                <h3 className="homeOverview__cardTitle">
                  UI 구현 라이브러리
                </h3>
                <LibraryList items={UI_LIBRARIES} />
              </article>

              <article className="homeOverview__card">
                <h3 className="homeOverview__cardTitle">
                  애니메이션 라이브러리
                </h3>
                <LibraryList items={MOTION_LIBRARIES} />
              </article>
            </div>
          </div>
        </GuideSection>

        <GuideSection
          label="Preview"
          title="미리보기"
          description="제작된 컴포넌트들의 구성을 미리 확인해보세요!"
        >
          <ButtonGroup>
            <ButtonGroup.Item isAutoWidth>
              <Button variant="line">취소</Button>
            </ButtonGroup.Item>
            <ButtonGroup.Item>
              <Button color="primary">확인</Button>
            </ButtonGroup.Item>
          </ButtonGroup>

          <Textfield
            isClearable
            onChange={(e) => setSampleTextfieldValue(e.target.value)}
            value={sampleTextfieldValue}
            onClear={() => setSampleTextfieldValue("")}
            unit="원"
          />

          <Datepicker
            selected={sampleDatepickerValue}
            onSelectedChange={(nextSelected) =>
              setSampleDatepickerValue(nextSelected as Date | undefined)
            }
            isClearable
            infoMsg="Textfield 기반 Datepicker preview"
          />

          <form onSubmit={handleSubmit(onSubmit)}>
            <RHFTextfield
              name="sampleText"
              control={control}
              rules={{
                required: "필수 입력 값입니다.",
                validate: (value) =>
                  value.trim().length > 0 || "공백만 입력할 수 없습니다.",
              }}
              isClearable
              infoMsg="Sample 입력란입니다."
            />
            <RHFDatepicker
              name="sampleDate"
              control={control}
              isClearable
              infoMsg="react-hook-form으로 연결된 Datepicker preview"
            />
            <Button color="primary" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        </GuideSection>
      </GuideLayout>
    </>
  );
}
