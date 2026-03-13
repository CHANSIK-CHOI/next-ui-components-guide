import { Password } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { memo, useState } from "react";

const PasswordPropsGuideProp = memo(function PasswordPropsGuideProp() {
  const [passwordValue, setPasswordValue] = useState("password123");

  return (
    <GuideProp
      isWide
      name="Textfield props extension"
      typeLabel='Omit<TextfieldProps, "children" | "type"> & { defaultPasswordVisible?: boolean; hidePasswordTitle?: string; showPasswordTitle?: string; }'
      description={
        <>
          - Password는 Textfield props를 확장한 래퍼 컴포넌트입니다.
          <br /> - value, onChange, isClearable, infoMsg, errorMsg 같은
          Textfield props를 그대로 사용할 수 있습니다.
          <br /> - controlled usage에서 clear 버튼은 onClear를 함께 전달했을 때
          노출됩니다.
          <br /> - children과 type은 내부에서 비밀번호 토글 버튼과
          password/text 전환으로 관리합니다.
          <br /> - clear 버튼을 누르면 입력값을 비우고 다시 숨김 상태로
          돌아갑니다.
        </>
      }
    >
      <Password
        value={passwordValue}
        isClearable
        infoMsg="Textfield props를 그대로 사용하면서 비밀번호 보기/숨기기 토글을 제공합니다."
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
      name="defaultPasswordVisible | hidePasswordTitle | showPasswordTitle"
      typeLabel="boolean | string"
      description="초기 표시 상태와 비밀번호 토글 버튼의 접근성 텍스트를 제어합니다. clear 버튼을 누르면 다시 숨김 상태로 돌아갑니다."
    >
      <Password
        value={visiblePassword}
        defaultPasswordVisible
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

const PasswordNativeInputGuideProp = memo(function PasswordNativeInputGuideProp() {
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
        errorMsg={
          newPassword.length > 0 && newPassword.length < 8
            ? "8자 이상 입력해주세요."
            : ""
        }
        onChange={(event) => setNewPassword(event.target.value)}
        onClear={() => setNewPassword("")}
      />
    </GuideProp>
  );
});

const PasswordStateGuideProp = memo(function PasswordStateGuideProp() {
  const [disabledValue] = useState("disabled-password");
  const [readOnlyValue] = useState("readonly-password");

  return (
    <GuideProp
      name="disabled | readOnly"
      typeLabel="boolean"
      defaultValue="false"
    >
      <Password value={disabledValue} disabled />
      <Password value={readOnlyValue} readOnly isClearable />
    </GuideProp>
  );
});

export default function PasswordControlledSection() {
  return (
    <GuideSection
      label="Password"
      title="Password / controlled usage"
      description="Password는 Textfield 디자인과 동작을 공유하면서 비밀번호 보기/숨기기 토글을 제공하는 controlled input 컴포넌트입니다."
    >
      <PasswordPropsGuideProp />
      <PasswordToggleGuideProp />
      <PasswordNativeInputGuideProp />
      <PasswordStateGuideProp />
    </GuideSection>
  );
}
