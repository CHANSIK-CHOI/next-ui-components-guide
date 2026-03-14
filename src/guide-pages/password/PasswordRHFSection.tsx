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

type PasswordStateValues = {
  disabledPassword: string;
  readOnlyPassword: string;
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
      name="RHFTextfield props 확장"
      typeLabel='Omit<RHFTextfieldProps<TFieldValues, TName>, "children" | "type"> & { defaultPasswordVisible?: boolean; hidePasswordTitle?: string; showPasswordTitle?: string; }'
      description={
        <>
          - RHFPassword는 RHFTextfield props를 확장합니다.
          <br /> - RHFTextfield는 Textfield UI props를 기반으로 하므로
          isClearable, infoMsg, errorMsg 같은 Textfield props도 함께 사용할 수
          있습니다.
          <br /> - clear 버튼은 isClearable이 true이고 값이 있을 때 보이며,
          클릭하면 RHF 값이 먼저 빈 문자열로 정리된 뒤 표시 상태가 다시 숨김으로
          돌아갑니다.
          <br /> - children과 type은 내부에서 비밀번호 토글 버튼과
          password/text 전환으로 관리합니다.
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

const RHFPasswordStateGuideProp = memo(function RHFPasswordStateGuideProp() {
  const { control } = useForm<PasswordStateValues>({
    mode: "onSubmit",
    defaultValues: {
      disabledPassword: "disabled-password",
      readOnlyPassword: "readonly-password",
    },
  });

  return (
    <GuideProp
      isWide
      name="disabled | readOnly"
      typeLabel="boolean"
      defaultValue="false"
      description="RHFPassword도 Textfield 상태 props를 그대로 상속합니다. disabled는 입력과 토글 버튼을 모두 막고, readOnly는 직접 입력과 clear 버튼을 막지만 보기/숨기기 토글은 유지합니다."
    >
      <Field>
        <Field.Label>비활성화 비밀번호</Field.Label>
        <RHFPassword
          name="disabledPassword"
          control={control}
          disabled
        />
      </Field>
      <Field>
        <Field.Label>읽기 전용 비밀번호</Field.Label>
        <RHFPassword
          name="readOnlyPassword"
          control={control}
          readOnly
          isClearable
          infoMsg="readOnly에서도 비밀번호 보기/숨기기 토글은 유지됩니다."
        />
      </Field>
    </GuideProp>
  );
});

export default function PasswordRHFSection() {
  return (
    <GuideSection
      label="React Hook Form"
      title="RHFPassword / 폼 연동"
      description="RHFPassword는 RHFTextfield를 기반으로 Password UI를 React Hook Form 필드와 연결하는 래퍼 컴포넌트입니다."
    >
      <RHFPasswordPropsGuideProp />
      <RHFPasswordRulesGuideProp />
      <RHFPasswordStateGuideProp />
      <RHFPasswordNativeGuideProp />
    </GuideSection>
  );
}
