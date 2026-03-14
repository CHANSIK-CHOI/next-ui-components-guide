import { Button, Field, RHFPassword } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { memo } from "react";
import { useForm } from "react-hook-form";

type PasswordBasicValues = {
  password: string;
};

type PasswordRulesValues = {
  accountPassword: string;
};

type PasswordNativeValues = {
  currentPassword: string;
};

const RHFPasswordPropsGuideProp = memo(function RHFPasswordPropsGuideProp() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<PasswordBasicValues>({
    mode: "onSubmit",
    defaultValues: {
      password: "password123",
    },
  });

  const handleSubmitBasic = async (values: PasswordBasicValues) => {
    console.log(values);
  };

  return (
    <GuideProp
      isWide
      name="RHFTextfield props extension"
      typeLabel='Omit<RHFTextfieldProps<TFieldValues, TName>, "children" | "type"> & { defaultPasswordVisible?: boolean; hidePasswordTitle?: string; showPasswordTitle?: string; }'
      description={
        <>
          - RHFPassword는 RHFTextfield props를 확장합니다.
          <br /> - RHFTextfield는 Textfield UI props를 기반으로 하므로
          isClearable, infoMsg, errorMsg 같은 Textfield props도 함께 사용할 수
          있습니다.
          <br /> - children과 type은 내부에서 비밀번호 토글 버튼과
          password/text 전환으로 관리합니다.
          <br /> - clear 버튼을 누르면 RHF 값이 비워지고 다시 숨김 상태로
          돌아갑니다.
        </>
      }
    >
      <form onSubmit={handleSubmit(handleSubmitBasic)}>
        <div className="guideFormStack">
          <Field>
            <Field.Label>비밀번호</Field.Label>
            <RHFPassword
              name="password"
              control={control}
              isClearable
              infoMsg="RHF 연결과 비밀번호 토글을 동시에 사용할 수 있습니다."
            />
          </Field>
          <Button color="primary" type="submit" disabled={isSubmitting}>
            제출
          </Button>
        </div>
      </form>
    </GuideProp>
  );
});

const RHFPasswordRulesGuideProp = memo(function RHFPasswordRulesGuideProp() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<PasswordRulesValues>({
    mode: "onSubmit",
    defaultValues: {
      accountPassword: "",
    },
  });

  const handleSubmitRules = async (values: PasswordRulesValues) => {
    console.log(values);
  };

  return (
    <GuideProp
      isWide
      name="rules"
      typeLabel="required | minLength | validate ..."
      description="비밀번호 필드 검증은 RHF rules로 연결하고, 토글 상태는 RHFPassword 내부 UI 상태로 처리합니다. clear 시에는 다시 숨김 상태로 돌아갑니다."
    >
      <form onSubmit={handleSubmit(handleSubmitRules)}>
        <div className="guideFormStack">
          <Field>
            <Field.Label>계정 비밀번호</Field.Label>
            <RHFPassword
              name="accountPassword"
              control={control}
              placeholder="8자 이상 비밀번호"
              isClearable
              rules={{
                required: "비밀번호를 입력해주세요.",
                minLength: {
                  value: 8,
                  message: "8자 이상 입력해주세요.",
                },
              }}
            />
          </Field>
          <Button color="primary" type="submit" disabled={isSubmitting}>
            비밀번호 검증
          </Button>
        </div>
      </form>
    </GuideProp>
  );
});

const RHFPasswordNativeGuideProp = memo(function RHFPasswordNativeGuideProp() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<PasswordNativeValues>({
    mode: "onSubmit",
    defaultValues: {
      currentPassword: "",
    },
  });

  const handleSubmitNative = async (values: PasswordNativeValues) => {
    console.log(values);
  };

  return (
    <GuideProp
      isWide
      name="defaultPasswordVisible | native input props"
      typeLabel="boolean | autoComplete | maxLength | placeholder ..."
      description="RHFPassword에서도 초기 표시 상태와 Textfield 기반 native input props를 함께 설정할 수 있습니다."
    >
      <form onSubmit={handleSubmit(handleSubmitNative)}>
        <div className="guideFormStack">
          <Field>
            <Field.Label>현재 비밀번호</Field.Label>
            <RHFPassword
              name="currentPassword"
              control={control}
              defaultPasswordVisible
              autoComplete="current-password"
              maxLength={20}
              placeholder="현재 비밀번호"
              isClearable
              hidePasswordTitle="비밀번호 감추기"
              showPasswordTitle="비밀번호 보이기"
            />
          </Field>
          <Button color="primary" type="submit" disabled={isSubmitting}>
            제출
          </Button>
        </div>
      </form>
    </GuideProp>
  );
});

export default function PasswordRHFSection() {
  return (
    <GuideSection
      label="React Hook Form"
      title="RHFPassword / form binding"
      description="RHFPassword는 RHFTextfield를 기반으로 Password UI를 react-hook-form 필드와 연결하는 래퍼 컴포넌트입니다."
    >
      <RHFPasswordPropsGuideProp />
      <RHFPasswordRulesGuideProp />
      <RHFPasswordNativeGuideProp />
    </GuideSection>
  );
}
