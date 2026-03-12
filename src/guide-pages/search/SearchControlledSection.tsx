import { Search } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { memo, useState } from "react";

const SearchPropsGuideProp = memo(function SearchPropsGuideProp() {
  const [keyword, setKeyword] = useState("검색어 예시");

  return (
    <GuideProp
      isWide
      name="Textfield props extension"
      typeLabel='Omit<TextfieldProps, "children" | "type"> & { onSearch?: () => void; searchButtonTitle?: string; searchButtonType?: "button" | "submit" | "reset"; }'
      description={
        <>
          - Search는 Textfield props를 확장한 래퍼 컴포넌트입니다.
          <br /> - value, onChange, isClearable, infoMsg, errorMsg 같은
          Textfield props를 그대로 사용할 수 있습니다.
          <br /> - children과 type은 내부에서 검색 버튼과 text 타입으로
          고정합니다.
          <br /> - searchButtonType을 지정하지 않으면 onSearch가 있을 때는
          button, 없을 때는 submit으로 동작합니다.
        </>
      }
    >
      <Search
        value={keyword}
        placeholder="검색어를 입력해주세요"
        isClearable
        infoMsg="Textfield props를 그대로 사용하면서 검색 버튼을 함께 노출합니다."
        onChange={(event) => setKeyword(event.target.value)}
        onClear={() => setKeyword("")}
      />
    </GuideProp>
  );
});

const SearchActionGuideProp = memo(function SearchActionGuideProp() {
  const [keyword, setKeyword] = useState("react components");
  const [customTitleKeyword, setCustomTitleKeyword] = useState("");
  const [submitKeyword, setSubmitKeyword] = useState("");

  return (
    <GuideProp
      isWide
      name="onSearch | searchButtonTitle | searchButtonType"
      typeLabel='() => void | string | "button" | "submit" | "reset"'
      description="검색 버튼 클릭 동작, 접근성 텍스트, 버튼 type을 설정합니다. form 내부에서는 submit 버튼처럼 사용할 수도 있습니다."
    >
      <Search
        value={keyword}
        isClearable
        onChange={(event) => setKeyword(event.target.value)}
        onClear={() => setKeyword("")}
        onSearch={() => console.log(keyword)}
      />
      <Search
        value={customTitleKeyword}
        placeholder="커스텀 검색 버튼 title"
        searchButtonTitle="가이드 검색"
        onChange={(event) => setCustomTitleKeyword(event.target.value)}
        onClear={() => setCustomTitleKeyword("")}
        onSearch={() => console.log(customTitleKeyword)}
      />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(submitKeyword);
        }}
      >
        <Search
          value={submitKeyword}
          placeholder="submit 버튼처럼 동작하는 Search"
          searchButtonType="submit"
          onChange={(event) => setSubmitKeyword(event.target.value)}
          onClear={() => setSubmitKeyword("")}
        />
      </form>
    </GuideProp>
  );
});

const SearchNativeInputGuideProp = memo(function SearchNativeInputGuideProp() {
  const [emailKeyword, setEmailKeyword] = useState("");
  const [siteKeyword, setSiteKeyword] = useState("");

  return (
    <GuideProp
      isWide
      name="native input props"
      typeLabel="name | maxLength | inputMode | autoComplete ..."
      description="Textfield에서 허용하는 text-like native input props도 Search에서 그대로 사용할 수 있습니다."
    >
      <Search
        value={emailKeyword}
        name="searchEmail"
        inputMode="email"
        autoComplete="email"
        maxLength={40}
        placeholder="이메일로 검색"
        onChange={(event) => setEmailKeyword(event.target.value)}
        onClear={() => setEmailKeyword("")}
      />
      <Search
        value={siteKeyword}
        name="searchSite"
        inputMode="url"
        autoComplete="url"
        placeholder="URL 키워드 검색"
        onChange={(event) => setSiteKeyword(event.target.value)}
        onClear={() => setSiteKeyword("")}
      />
    </GuideProp>
  );
});

const SearchStateGuideProp = memo(function SearchStateGuideProp() {
  const [disabledValue] = useState("비활성화 상태");
  const [readOnlyValue] = useState("읽기 전용 상태");

  return (
    <GuideProp
      name="disabled | readOnly"
      typeLabel="boolean"
      defaultValue="false"
    >
      <Search value={disabledValue} disabled />
      <Search value={readOnlyValue} readOnly isClearable />
    </GuideProp>
  );
});

export default function SearchControlledSection() {
  return (
    <GuideSection
      label="Search"
      title="Search / controlled usage"
      description="Search는 Textfield 디자인과 동작을 공유하면서 검색 아이콘 버튼을 추가한 controlled input 컴포넌트입니다."
    >
      <SearchPropsGuideProp />
      <SearchActionGuideProp />
      <SearchNativeInputGuideProp />
      <SearchStateGuideProp />
    </GuideSection>
  );
}
