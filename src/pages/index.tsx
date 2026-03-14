import {
  Button,
  ButtonGroup,
  Field,
  RHFCheckbox,
  RHFDatepicker,
  RHFPassword,
  RHFRadio,
  RHFSearch,
  RHFTextfield,
  RadioGroup,
} from "@/components";
import { GuideLayout, GuideSection } from "@/components/Guide";
import { CalendarIcon } from "@/components/Icon";
import { format } from "date-fns";
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

type SIGNUP_FORM_TYPE = {
  fullName: string;
  email: string;
  password: string;
  profileKeyword: string;
  birthDate: Date | undefined;
  notificationCycle: string;
  receiveEvent: boolean;
  agreeTerms: boolean;
};

const SIGNUP_FORM: SIGNUP_FORM_TYPE = {
  fullName: "",
  email: "",
  password: "",
  profileKeyword: "",
  birthDate: undefined,
  notificationCycle: "weekly",
  receiveEvent: true,
  agreeTerms: false,
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

const NOTIFICATION_CYCLE_LABEL: Record<string, string> = {
  daily: "매일 받기",
  weekly: "주 1회 받기",
  monthly: "월 1회 받기",
};

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
  const [lastSearchKeyword, setLastSearchKeyword] = useState("");
  const [submittedSignupForm, setSubmittedSignupForm] =
    useState<SIGNUP_FORM_TYPE | null>(null);
  const {
    control,
    getValues,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SIGNUP_FORM_TYPE>({
    mode: "onSubmit",
    defaultValues: SIGNUP_FORM,
  });

  const handleSearchKeyword = () => {
    setLastSearchKeyword(getValues("profileKeyword").trim());
  };

  const handleReset = () => {
    reset(SIGNUP_FORM);
    setLastSearchKeyword("");
    setSubmittedSignupForm(null);
  };

  const onSubmit = async (value: SIGNUP_FORM_TYPE) => {
    console.log(value);
    setSubmittedSignupForm(value);
  };

  return (
    <>
      <Head>
        <title>Next UI Components Guide</title>
        <meta
          name="description"
          content="Next 기반 UI 컴포넌트와 사용 예시를 정리한 가이드 프로젝트"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GuideLayout
        currentPath="/"
        title="프로젝트 개요"
        description="Next 환경에서 사용 가능한 공용 UI를 한눈에 확인할 수 있도록 가이드 형태로 제작한 프로젝트입니다."
      >
        <GuideSection
          label="Project Overview"
          title="프로젝트 소개"
          description="프로젝트 목적과 사용 라이브러리를 간단히 정리했습니다."
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
                공용 UI 컴포넌트를 설계하고 확장해가는 과정을 정리한
                포트폴리오로, 기본 인터랙션 컴포넌트부터 폼 입력, 오버레이, 복합
                컴포넌트까지 범위를 넓혀가며 controlled 패턴과 React Hook Form
                연동 방식도 함께 다룹니다.
              </p>
            </article>

            <div className="homeOverview__grid">
              <article className="homeOverview__card">
                <h3 className="homeOverview__cardTitle">프로젝트 구성</h3>
                <LibraryList items={PROJECT_LIBRARIES} />
              </article>

              <article className="homeOverview__card">
                <h3 className="homeOverview__cardTitle">UI 구현 라이브러리</h3>
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
          label="Sample Form"
          title="회원가입 폼 예시"
          description="지금까지 만든 폼 계열 컴포넌트를 실제 가입 흐름처럼 조합한 예시입니다."
        >
          <div className="homeForm">
            <form onSubmit={handleSubmit(onSubmit)} className="homeForm__form">
              <div className="guideFormStack">
                <Field>
                  <Field.Label>이름</Field.Label>
                  <RHFTextfield
                    name="fullName"
                    control={control}
                    placeholder="이름을 입력해주세요"
                    isClearable
                    rules={{
                      required: "이름을 입력해주세요.",
                      validate: (value) =>
                        value.trim().length > 0 || "공백만 입력할 수 없습니다.",
                    }}
                  />
                </Field>

                <Field>
                  <Field.Label>이메일</Field.Label>
                  <RHFTextfield
                    name="email"
                    control={control}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="example@domain.com"
                    isClearable
                    rules={{
                      required: "이메일을 입력해주세요.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "올바른 이메일 형식이 아닙니다.",
                      },
                    }}
                  />
                </Field>

                <Field>
                  <Field.Label>비밀번호</Field.Label>
                  <RHFPassword
                    name="password"
                    control={control}
                    autoComplete="new-password"
                    placeholder="8자 이상 입력해주세요"
                    isClearable
                    rules={{
                      required: "비밀번호를 입력해주세요.",
                      validate: (value) =>
                        value.length >= 8 ||
                        "비밀번호는 8자 이상이어야 합니다.",
                    }}
                  />
                </Field>

                <Field>
                  <Field.Label>관심 키워드</Field.Label>
                  <RHFSearch
                    name="profileKeyword"
                    control={control}
                    placeholder="관심 있는 키워드를 검색해보세요"
                    isClearable
                    onSearch={handleSearchKeyword}
                    infoMsg={lastSearchKeyword ? `"${lastSearchKeyword}"` : ""}
                  />
                </Field>

                <Field>
                  <Field.Label>생년월일</Field.Label>
                  <RHFDatepicker
                    name="birthDate"
                    control={control}
                    isClearable
                    placeholder="날짜를 선택해주세요"
                    rules={{
                      validate: (value) =>
                        Boolean(value) || "생년월일을 선택해주세요.",
                    }}
                    dayPickerProps={{
                      endMonth: new Date(),
                      disabled: { after: new Date() },
                    }}
                  />
                </Field>

                <Field>
                  <p className="homeForm__groupLabel">알림 주기</p>
                  <RadioGroup
                    name="notificationCycle"
                    error={Boolean(errors.notificationCycle)}
                  >
                    <Field.Item>
                      <RHFRadio
                        name="notificationCycle"
                        control={control}
                        value="daily"
                        rules={{ required: "알림 주기를 선택해주세요." }}
                      />
                      <Field.Label>매일 받기</Field.Label>
                    </Field.Item>
                    <Field.Item>
                      <RHFRadio
                        name="notificationCycle"
                        control={control}
                        value="weekly"
                        rules={{ required: "알림 주기를 선택해주세요." }}
                      />
                      <Field.Label>주 1회 받기</Field.Label>
                    </Field.Item>
                    <Field.Item>
                      <RHFRadio
                        name="notificationCycle"
                        control={control}
                        value="monthly"
                        rules={{ required: "알림 주기를 선택해주세요." }}
                      />
                      <Field.Label>월 1회 받기</Field.Label>
                    </Field.Item>
                  </RadioGroup>
                  <Field.Message errorMsg={errors.notificationCycle?.message} />
                </Field>

                <Field>
                  <Field.Item align="start">
                    <RHFCheckbox name="receiveEvent" control={control} />
                    <Field.Label>
                      이벤트 및 업데이트 알림을 받겠습니다.
                    </Field.Label>
                  </Field.Item>
                  <Field.Item align="start">
                    <RHFCheckbox
                      name="agreeTerms"
                      control={control}
                      rules={{
                        validate: (value) =>
                          value || "서비스 이용약관 동의는 필수입니다.",
                      }}
                    />
                    <Field.Label>
                      서비스 이용약관 및 개인정보 처리방침에 동의합니다.
                    </Field.Label>
                  </Field.Item>
                  <Field.Message errorMsg={errors.agreeTerms?.message} />
                </Field>

                <ButtonGroup>
                  <ButtonGroup.Item isAutoWidth>
                    <Button variant="line" type="button" onClick={handleReset}>
                      초기화
                    </Button>
                  </ButtonGroup.Item>
                  <ButtonGroup.Item>
                    <Button
                      color="primary"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      가입하기
                    </Button>
                  </ButtonGroup.Item>
                </ButtonGroup>
              </div>
            </form>

            <div className="homeForm__summary">
              <strong className="homeForm__summaryTitle">제출 결과</strong>
              {submittedSignupForm ? (
                <ul className="homeForm__summaryList">
                  <li>
                    <span>이름</span>
                    <strong>{submittedSignupForm.fullName}</strong>
                  </li>
                  <li>
                    <span>이메일</span>
                    <strong>{submittedSignupForm.email}</strong>
                  </li>
                  <li>
                    <span>관심 키워드</span>
                    <strong>
                      {submittedSignupForm.profileKeyword || "입력 안 함"}
                    </strong>
                  </li>
                  <li>
                    <span>생년월일</span>
                    <strong>
                      {submittedSignupForm.birthDate
                        ? format(submittedSignupForm.birthDate, "yyyy.MM.dd")
                        : "선택 안 함"}
                    </strong>
                  </li>
                  <li>
                    <span>알림 주기</span>
                    <strong>
                      {
                        NOTIFICATION_CYCLE_LABEL[
                          submittedSignupForm.notificationCycle
                        ]
                      }
                    </strong>
                  </li>
                  <li>
                    <span>이벤트 수신</span>
                    <strong>
                      {submittedSignupForm.receiveEvent ? "동의" : "미동의"}
                    </strong>
                  </li>
                </ul>
              ) : (
                <p className="homeForm__summaryDescription">
                  폼을 제출하면 입력한 값이 이 영역에 정리됩니다.
                </p>
              )}
            </div>
          </div>
        </GuideSection>
      </GuideLayout>
    </>
  );
}
