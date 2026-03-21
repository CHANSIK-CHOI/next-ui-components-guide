import { Password } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { memo, useState } from "react";

const PasswordPropsGuideProp = memo(function PasswordPropsGuideProp() {
  const [passwordValue, setPasswordValue] = useState("password123");

  return (
    <GuideProp
      isWide
      name="Textfield props 확장"
      typeLabel='Omit<TextfieldProps, "children" | "type"> & { defaultIsPasswordVisible?: boolean; hidePasswordTitle?: string; showPasswordTitle?: string; }'
      description={
        <>
          - Password는 Textfield props를 확장한 래퍼 컴포넌트입니다.
          <br /> - value, onChange, isClearable, infoMessage, errorMessage 같은
          Textfield props를 그대로 사용할 수 있습니다.
          <br /> - controlled usage에서 clear 버튼은 isClearable이 true이고,
          value가 있으며, onClear가 제공되고, disabled/readOnly가 아닐 때만
          노출됩니다.
          <br /> - children과 type은 내부에서 비밀번호 토글 버튼과 password/text
          전환으로 관리합니다.
          <br /> - clear 버튼을 누르면 전달한 onClear가 실행되고, 비밀번호 표시
          상태는 다시 숨김으로 돌아갑니다.
        </>
      }
    >
      <Password
        value={passwordValue}
        isClearable
        infoMessage="Textfield props를 그대로 사용하면서 비밀번호 보기/숨기기 토글을 제공합니다."
        onChange={(event) => setPasswordValue(event.target.value)}
        onClear={() => setPasswordValue("")}
      />
    </GuideProp>
  );
});

const PasswordToggleGuideProp = memo(function PasswordToggleGuideProp() {
  const [visiblePassword, setVisiblePassword] = useState("visible-password");
  const [customTitlePassword, setCustomTitlePassword] = useState("");

  return (
    <GuideProp
      isWide
      name="defaultIsPasswordVisible | hidePasswordTitle | showPasswordTitle"
      typeLabel="boolean | string"
      description="초기 표시 상태와 비밀번호 토글 버튼의 접근성 텍스트를 제어합니다. clear 버튼을 누르면 표시 상태는 다시 숨김으로 돌아갑니다."
    >
      <Password
        value={visiblePassword}
        defaultIsPasswordVisible
        isClearable
        onChange={(event) => setVisiblePassword(event.target.value)}
        onClear={() => setVisiblePassword("")}
      />
      <Password
        value={customTitlePassword}
        placeholder="커스텀 비밀번호 토글 title"
        hidePasswordTitle="비밀번호 감추기"
        showPasswordTitle="비밀번호 보이기"
        onChange={(event) => setCustomTitlePassword(event.target.value)}
        onClear={() => setCustomTitlePassword("")}
      />
    </GuideProp>
  );
});

const PasswordNativeInputGuideProp = memo(
  function PasswordNativeInputGuideProp() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    return (
      <GuideProp
        isWide
        name="native input props"
        typeLabel="name | maxLength | autoComplete | placeholder ..."
        description="Textfield에서 허용하는 text-like native input props도 Password에서 그대로 사용할 수 있습니다."
      >
        <Password
          value={currentPassword}
          name="currentPassword"
          autoComplete="current-password"
          maxLength={20}
          placeholder="현재 비밀번호"
          onChange={(event) => setCurrentPassword(event.target.value)}
          onClear={() => setCurrentPassword("")}
        />
        <Password
          value={newPassword}
          name="newPassword"
          autoComplete="new-password"
          maxLength={20}
          placeholder="새 비밀번호"
          errorMessage={
            newPassword.length > 0 && newPassword.length < 8
              ? "8자 이상 입력해주세요."
              : ""
          }
          onChange={(event) => setNewPassword(event.target.value)}
          onClear={() => setNewPassword("")}
        />
      </GuideProp>
    );
  },
);

const PasswordStateGuideProp = memo(function PasswordStateGuideProp() {
  const [disabledValue] = useState("disabled-password");
  const [readOnlyValue] = useState("readonly-password");

  return (
    <GuideProp
      name="disabled | readOnly"
      typeLabel="boolean"
      defaultValue="false"
      description="disabled는 입력과 토글 버튼을 모두 비활성화하고, readOnly는 직접 입력과 clear 버튼을 막지만 보기/숨기기 토글은 유지합니다."
      isWide
    >
      <Password value={disabledValue} disabled />
      <Password
        value={readOnlyValue}
        readOnly
        isClearable
        infoMessage="readOnly에서도 비밀번호 보기/숨기기 토글은 유지됩니다."
      />
    </GuideProp>
  );
});

export default function PasswordControlledSection() {
  return (
    <GuideSection
      label="Password"
      title="Password / controlled usage"
      description="Password는 value와 onChange를 외부 상태로 관리하는 controlled usage를 기준으로 정리한 비밀번호 입력 컴포넌트입니다. Textfield UI에 보기/숨기기 토글을 더한 형태입니다."
    >
      <PasswordPropsGuideProp />
      <PasswordToggleGuideProp />
      <PasswordNativeInputGuideProp />
      <PasswordStateGuideProp />
    </GuideSection>
  );
}
