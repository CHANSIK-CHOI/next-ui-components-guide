import {
  Button,
  ButtonGroup,
  Field,
  LayerPopup,
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
import {
  type LayerPopupComponentProps,
  useConfirm,
  useLayerPopup,
} from "@/components/Popup";
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

type SIGNUP_DETAIL_FORM_TYPE = {
  workspaceName: string;
  workspaceType: "solo" | "team" | "agency";
  onboardingGoal: string;
  receiveOnboardingGuide: boolean;
};

type SUBMITTED_SIGNUP_FORM = Omit<SIGNUP_FORM_TYPE, "password">;

type SUBMITTED_SIGNUP_RESULT = {
  signupForm: SUBMITTED_SIGNUP_FORM;
  signupDetailForm: SIGNUP_DETAIL_FORM_TYPE;
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

const SIGNUP_DETAIL_FORM: SIGNUP_DETAIL_FORM_TYPE = {
  workspaceName: "",
  workspaceType: "team",
  onboardingGoal: "",
  receiveOnboardingGuide: true,
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

type NamingRuleItem = {
  label: string;
  title: string;
  description: string;
  example: string;
};

const PROJECT_LIBRARIES: LibraryItem[] = [
  { label: "Next.js 14", icon: siNextdotjs },
  { label: "React 18", icon: siReact },
  { label: "TypeScript 5", icon: siTypescript },
  { label: "Sass (SCSS)", icon: siSass },
];

const UI_LIBRARIES: LibraryItem[] = [
  { label: "React Hook Form", icon: siReacthookform },
  { label: "react-select", monogram: "rs" },
  { label: "react-day-picker", isCalendar: true },
  { label: "date-fns", icon: siDatefns },
  { label: "classnames", monogram: "cn" },
  { label: "zustand", monogram: "zt" },
];

const MOTION_LIBRARIES: LibraryItem[] = [
  { label: "framer-motion", icon: siFramer },
];

const UI_NAMING_RULES: NamingRuleItem[] = [
  {
    label: "Functions",
    title: "동작은 동사, 이벤트는 on, 내부 핸들러는 handle",
    description:
      "일반 함수는 get, set, open, close, create, remove처럼 동사로 시작하고, 이벤트 핸들러 prop은 on..., 내부 구현용 함수는 handle...로 구분합니다.",
    example:
      "예: getValues, setIsCalendarOpen, openAlert, onConfirm, handleReset",
  },
  {
    label: "Booleans",
    title: "boolean은 의미에 따라 is, has, can, should를 나눠서 사용",
    description:
      "상태는 is..., 보유 여부는 has..., 가능 여부는 can..., 정책이나 의도는 should...를 사용합니다. 단, disabled, checked, open 같은 표준 HTML/React prop은 그대로 둡니다.",
    example:
      "예: isClearable, hasCloseButton, canClear, shouldCloseOnEscape",
  },
  {
    label: "Values",
    title: "값은 명사형으로 두고, 같은 의미는 같은 이름을 유지",
    description:
      "데이터와 표시값은 title, description, icon처럼 명사로 두고, Base와 wrapper에서 같은 의미의 prop은 같은 이름으로 그대로 넘깁니다.",
    example:
      "예: Textfield와 Search의 isClearable, PopupBase와 Alert의 description",
  },
  {
    label: "Library",
    title: "라이브러리 pass-through props는 원래 이름을 유지",
    description:
      "react-day-picker나 native input처럼 외부 라이브러리에서 제공하는 옵션은 wrapper에서도 이름을 바꾸지 않습니다. 공식 문서와 바로 연결되고 확장 시 혼동이 적습니다.",
    example:
      "예: dayPickerProps.required, dayPickerProps.resetOnSelect, captionLayout, menuPlacement, components",
  },
];

const NOTIFICATION_CYCLE_LABEL: Record<string, string> = {
  daily: "매일 받기",
  weekly: "주 1회 받기",
  monthly: "월 1회 받기",
};

const WORKSPACE_TYPE_LABEL: Record<
  SIGNUP_DETAIL_FORM_TYPE["workspaceType"],
  string
> = {
  solo: "개인 작업",
  team: "사내 협업",
  agency: "대행 / 외주 운영",
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

type CreateSignupDetailLayerPopupParams = {
  signupValue: SIGNUP_FORM_TYPE;
  onComplete: (detailValue: SIGNUP_DETAIL_FORM_TYPE) => void;
};

function createSignupDetailLayerPopup({
  signupValue,
  onComplete,
}: CreateSignupDetailLayerPopupParams): React.ComponentType<LayerPopupComponentProps> {
  const defaultDetailForm: SIGNUP_DETAIL_FORM_TYPE = {
    ...SIGNUP_DETAIL_FORM,
    workspaceName: signupValue.fullName
      ? `${signupValue.fullName}님의 워크스페이스`
      : "",
    onboardingGoal:
      signupValue.profileKeyword || "첫 팀 온보딩을 빠르게 완료하기",
  };

  function SignupDetailLayerPopup(runtimeProps: LayerPopupComponentProps) {
    const {
      control: popupControl,
      handleSubmit: handlePopupSubmit,
      formState: {
        errors: popupErrors,
        isSubmitting: isPopupSubmitting,
      },
    } = useForm<SIGNUP_DETAIL_FORM_TYPE>({
      mode: "onSubmit",
      defaultValues: defaultDetailForm,
    });

    const handleConfirm = handlePopupSubmit((detailValue) => {
      onComplete(detailValue);
      runtimeProps.onRequestClose?.();
    });

    return (
      <LayerPopup
        {...runtimeProps}
        title="가입 상세 설정"
        description="메인 회원가입 폼이 통과되면 LayerPopup 안에서 워크스페이스 정보를 한 번 더 입력하는 흐름입니다."
        size="large"
        shouldCloseOnBackdrop={false}
        footer={
          <ButtonGroup>
            <ButtonGroup.Item>
              <Button
                type="button"
                variant="line"
                onClick={runtimeProps.onRequestClose}
              >
                취소
              </Button>
            </ButtonGroup.Item>
            <ButtonGroup.Item>
              <Button
                type="button"
                color="primary"
                disabled={isPopupSubmitting}
                onClick={handleConfirm}
              >
                가입 완료
              </Button>
            </ButtonGroup.Item>
          </ButtonGroup>
        }
      >
        <div className="homeSignupPopup">
          <div className="homeSignupPopup__summary">
            <div className="homeSignupPopup__summaryCard">
              <span className="homeSignupPopup__summaryLabel">기본 이름</span>
              <strong className="homeSignupPopup__summaryValue">
                {signupValue.fullName}
              </strong>
            </div>
            <div className="homeSignupPopup__summaryCard">
              <span className="homeSignupPopup__summaryLabel">이메일</span>
              <strong className="homeSignupPopup__summaryValue">
                {signupValue.email}
              </strong>
            </div>
            <div className="homeSignupPopup__summaryCard">
              <span className="homeSignupPopup__summaryLabel">알림 주기</span>
              <strong className="homeSignupPopup__summaryValue">
                {NOTIFICATION_CYCLE_LABEL[signupValue.notificationCycle]}
              </strong>
            </div>
          </div>

          <form
            className="guideFormStack"
            onSubmit={(event) => {
              event.preventDefault();
              void handleConfirm();
            }}
          >
            <Field>
              <Field.Label>워크스페이스 이름</Field.Label>
              <RHFTextfield
                name="workspaceName"
                control={popupControl}
                placeholder="워크스페이스 이름을 입력해주세요"
                isClearable
                rules={{
                  required: "워크스페이스 이름을 입력해주세요.",
                  validate: (fieldValue) =>
                    fieldValue.trim().length > 0 ||
                    "공백만 입력할 수 없습니다.",
                }}
              />
            </Field>

            <Field errorMessage={popupErrors.workspaceType?.message}>
              <Field.Label as="span" className="homeForm__groupLabel">
                운영 형태
              </Field.Label>
              <RadioGroup
                name="workspaceType"
                isError={Boolean(popupErrors.workspaceType)}
              >
                <Field.Item>
                  <RHFRadio
                    name="workspaceType"
                    control={popupControl}
                    value="solo"
                    rules={{ required: "운영 형태를 선택해주세요." }}
                  />
                  <Field.Label>개인 작업</Field.Label>
                </Field.Item>
                <Field.Item>
                  <RHFRadio
                    name="workspaceType"
                    control={popupControl}
                    value="team"
                    rules={{ required: "운영 형태를 선택해주세요." }}
                  />
                  <Field.Label>사내 협업</Field.Label>
                </Field.Item>
                <Field.Item>
                  <RHFRadio
                    name="workspaceType"
                    control={popupControl}
                    value="agency"
                    rules={{ required: "운영 형태를 선택해주세요." }}
                  />
                  <Field.Label>대행 / 외주 운영</Field.Label>
                </Field.Item>
              </RadioGroup>
            </Field>

            <Field>
              <Field.Label>도입 목적</Field.Label>
              <RHFTextfield
                name="onboardingGoal"
                control={popupControl}
                placeholder="도입 목적을 입력해주세요"
                isClearable
                rules={{
                  required: "도입 목적을 입력해주세요.",
                  validate: (fieldValue) =>
                    fieldValue.trim().length >= 4 ||
                    "도입 목적은 4자 이상 입력해주세요.",
                }}
              />
            </Field>

            <Field>
              <Field.Item align="start">
                <RHFCheckbox
                  name="receiveOnboardingGuide"
                  control={popupControl}
                />
                <Field.Label>
                  시작 가이드와 샘플 템플릿 메일을 함께 받겠습니다.
                </Field.Label>
              </Field.Item>
            </Field>
          </form>
        </div>
      </LayerPopup>
    );
  }

  SignupDetailLayerPopup.displayName = "SignupDetailLayerPopup";

  return SignupDetailLayerPopup;
}

export default function Home() {
  const [lastSearchKeyword, setLastSearchKeyword] = useState("");
  const [submittedSignupResult, setSubmittedSignupResult] =
    useState<SUBMITTED_SIGNUP_RESULT | null>(null);
  const confirm = useConfirm();
  const layerPopup = useLayerPopup();
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
    setSubmittedSignupResult(null);
  };

  const handleResetWithConfirm = async () => {
    const isConfirmed = await confirm.openAsync({
      title: "입력값 초기화",
      description:
        "회원가입 폼 입력값과 제출 결과를 모두 초기화합니다. 계속 진행할까요?",
      confirmText: "초기화",
      cancelText: "취소",
    });

    if (!isConfirmed) {
      return;
    }

    handleReset();
  };

  const onSubmit = (value: SIGNUP_FORM_TYPE) => {
    layerPopup.open({
      component: createSignupDetailLayerPopup({
        signupValue: value,
        onComplete: (detailValue) => {
          const signupForm: SUBMITTED_SIGNUP_FORM = {
            fullName: value.fullName,
            email: value.email,
            profileKeyword: value.profileKeyword,
            birthDate: value.birthDate,
            notificationCycle: value.notificationCycle,
            receiveEvent: value.receiveEvent,
            agreeTerms: value.agreeTerms,
          };

          setSubmittedSignupResult({
            signupForm,
            signupDetailForm: detailValue,
          });
        },
      }),
    });
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
                연동 방식, 디자인 토큰 정리, 접근성 보완, motion 기준까지 함께
                다룹니다.
              </p>
            </article>

            <div className="homeOverview__grid">
              <article className="homeOverview__card">
                <h3 className="homeOverview__cardTitle">프로젝트 스택</h3>
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
          label="Naming Rules"
          title="UI Prop Naming Rules"
          description="UI 컴포넌트 네이밍을 통일하기 위한 규칙 메모입니다. 이후 컴포넌트 정리는 이 기준으로 맞춥니다."
        >
          <div className="homeNaming">
            <div className="homeNaming__grid">
              {UI_NAMING_RULES.map((rule) => (
                <article key={rule.label} className="homeNaming__card">
                  <span className="homeNaming__label">{rule.label}</span>
                  <strong className="homeNaming__title">{rule.title}</strong>
                  <p className="homeNaming__description">{rule.description}</p>
                  <p className="homeNaming__example">{rule.example}</p>
                </article>
              ))}
            </div>
          </div>
        </GuideSection>

        <GuideSection
          label="Sample Form"
          title="회원가입 폼 예시"
          description="지금까지 만든 폼 계열 컴포넌트를 실제 가입 흐름처럼 조합한 예시입니다. 기본 폼 검증 후 LayerPopup에서 추가 정보를 입력하면 결과 패널에 함께 반영됩니다."
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
                    infoMessage={lastSearchKeyword ? `"${lastSearchKeyword}"` : ""}
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

                <Field errorMessage={errors.notificationCycle?.message}>
                  <Field.Label as="span" className="homeForm__groupLabel">
                    알림 주기
                  </Field.Label>
                  <RadioGroup
                    name="notificationCycle"
                    isError={Boolean(errors.notificationCycle)}
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
                </Field>

                <Field errorMessage={errors.agreeTerms?.message}>
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
                </Field>

                <ButtonGroup>
                  <ButtonGroup.Item shouldAutoWidth>
                    <Button
                      variant="line"
                      type="button"
                      onClick={() => {
                        void handleResetWithConfirm();
                      }}
                    >
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
              {submittedSignupResult ? (
                <>
                  <div className="homeForm__summarySection">
                    <strong className="homeForm__summarySectionTitle">
                      기본 회원가입 정보
                    </strong>
                    <ul className="homeForm__summaryList">
                      <li>
                        <span>이름</span>
                        <strong>{submittedSignupResult.signupForm.fullName}</strong>
                      </li>
                      <li>
                        <span>이메일</span>
                        <strong>{submittedSignupResult.signupForm.email}</strong>
                      </li>
                      <li>
                        <span>관심 키워드</span>
                        <strong>
                          {submittedSignupResult.signupForm.profileKeyword ||
                            "입력 안 함"}
                        </strong>
                      </li>
                      <li>
                        <span>생년월일</span>
                        <strong>
                          {submittedSignupResult.signupForm.birthDate
                            ? format(
                                submittedSignupResult.signupForm.birthDate,
                                "yyyy.MM.dd",
                              )
                            : "선택 안 함"}
                        </strong>
                      </li>
                      <li>
                        <span>알림 주기</span>
                        <strong>
                          {
                            NOTIFICATION_CYCLE_LABEL[
                              submittedSignupResult.signupForm.notificationCycle
                            ]
                          }
                        </strong>
                      </li>
                      <li>
                        <span>이벤트 수신</span>
                        <strong>
                          {submittedSignupResult.signupForm.receiveEvent
                            ? "동의"
                            : "미동의"}
                        </strong>
                      </li>
                    </ul>
                  </div>

                  <div className="homeForm__summarySection">
                    <strong className="homeForm__summarySectionTitle">
                      LayerPopup 추가 정보
                    </strong>
                    <ul className="homeForm__summaryList">
                      <li>
                        <span>워크스페이스 이름</span>
                        <strong>
                          {submittedSignupResult.signupDetailForm.workspaceName}
                        </strong>
                      </li>
                      <li>
                        <span>운영 형태</span>
                        <strong>
                          {
                            WORKSPACE_TYPE_LABEL[
                              submittedSignupResult.signupDetailForm
                                .workspaceType
                            ]
                          }
                        </strong>
                      </li>
                      <li>
                        <span>도입 목적</span>
                        <strong>
                          {submittedSignupResult.signupDetailForm.onboardingGoal}
                        </strong>
                      </li>
                      <li>
                        <span>시작 가이드 메일</span>
                        <strong>
                          {submittedSignupResult.signupDetailForm
                            .receiveOnboardingGuide
                            ? "수신"
                            : "미수신"}
                        </strong>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <p className="homeForm__summaryDescription">
                  메인 폼을 통과한 뒤 LayerPopup 확인까지 완료하면 입력한 값이 이
                  영역에 정리됩니다.
                </p>
              )}
            </div>
          </div>
        </GuideSection>
      </GuideLayout>
    </>
  );
}
