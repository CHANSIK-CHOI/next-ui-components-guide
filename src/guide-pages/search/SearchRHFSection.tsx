import { Button, RHFSearch } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { memo } from "react";
import { useForm } from "react-hook-form";

type SearchBasicValues = {
  keyword: string;
};

type SearchValidationValues = {
  query: string;
};

type SearchSubmitValues = {
  submitKeyword: string;
};

type SearchNativeValues = {
  emailKeyword: string;
};

const RHFSearchPropsGuideProp = memo(function RHFSearchPropsGuideProp() {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchBasicValues>({
    mode: "onSubmit",
    defaultValues: {
      keyword: "next ui",
    },
  });

  const handleSubmitBasic = async (values: SearchBasicValues) => {
    console.log(values);
  };

  return (
    <GuideProp
      isWide
      name="RHFTextfield props extension"
      typeLabel='Omit<RHFTextfieldProps<TFieldValues, TName>, "children" | "type"> & { onSearch?: () => void; searchButtonTitle?: string; searchButtonType?: "button" | "submit" | "reset"; }'
      description={
        <>
          - RHFSearch는 RHFTextfield props를 확장합니다.
          <br /> - RHFTextfield는 Textfield UI props를 기반으로 하므로
          isClearable, infoMsg, errorMsg 같은 Textfield props도 함께 사용할 수
          있습니다.
          <br /> - children과 type은 내부에서 검색 버튼과 text 타입으로
          고정합니다.
          <br /> - searchButtonType을 지정하지 않으면 onSearch가 있을 때는
          button, 없을 때는 submit으로 동작합니다.
        </>
      }
    >
      <form onSubmit={handleSubmit(handleSubmitBasic)}>
        <RHFSearch
          name="keyword"
          control={control}
          isClearable
          infoMsg="RHF 연결과 검색 버튼을 동시에 사용할 수 있습니다."
          onSearch={() => console.log(getValues("keyword"))}
        />
        <Button color="primary" type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </form>
    </GuideProp>
  );
});

const RHFSearchRulesGuideProp = memo(function RHFSearchRulesGuideProp() {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchValidationValues>({
    mode: "onSubmit",
    defaultValues: {
      query: "",
    },
  });

  const handleSubmitValidation = async (values: SearchValidationValues) => {
    console.log(values);
  };

  return (
    <GuideProp
      isWide
      name="rules | onSearch"
      typeLabel="UseControllerProps + () => void"
      description="검색 버튼 액션은 onSearch로 분리하고, 실제 필드 검증은 RHF rules로 연결합니다."
    >
      <form onSubmit={handleSubmit(handleSubmitValidation)}>
        <RHFSearch
          name="query"
          control={control}
          placeholder="검색어를 입력한 뒤 버튼을 눌러보세요"
          isClearable
          onSearch={() => console.log(getValues("query"))}
          rules={{
            required: "검색어를 입력해주세요.",
            validate: (value) =>
              value.trim().length > 0 || "공백만 입력할 수 없습니다.",
          }}
        />
        <Button color="primary" type="submit" disabled={isSubmitting}>
          Validate Search
        </Button>
      </form>
    </GuideProp>
  );
});

const RHFSearchButtonTypeGuideProp = memo(function RHFSearchButtonTypeGuideProp() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchSubmitValues>({
    mode: "onSubmit",
    defaultValues: {
      submitKeyword: "",
    },
  });

  const handleSubmitBySearchButton = async (values: SearchSubmitValues) => {
    console.log(values);
  };

  return (
    <GuideProp
      isWide
      name="searchButtonType"
      typeLabel='"button" | "submit" | "reset"'
      description="form 내부에서 검색 버튼을 submit 버튼처럼 쓰고 싶다면 searchButtonType을 지정할 수 있습니다."
    >
      <form onSubmit={handleSubmit(handleSubmitBySearchButton)}>
        <RHFSearch
          name="submitKeyword"
          control={control}
          placeholder="검색 버튼으로 form submit"
          searchButtonType="submit"
          isClearable
        />
        <Button color="primary" type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </form>
    </GuideProp>
  );
});

const RHFSearchNativeGuideProp = memo(function RHFSearchNativeGuideProp() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchNativeValues>({
    mode: "onSubmit",
    defaultValues: {
      emailKeyword: "",
    },
  });

  const handleSubmitNative = async (values: SearchNativeValues) => {
    console.log(values);
  };

  return (
    <GuideProp
      isWide
      name="native input props"
      typeLabel="placeholder | inputMode | maxLength | autoComplete ..."
      description="RHFSearch에서도 RHFTextfield와 Textfield에서 허용하는 native input props를 그대로 전달할 수 있습니다."
    >
      <form onSubmit={handleSubmit(handleSubmitNative)}>
        <RHFSearch
          name="emailKeyword"
          control={control}
          inputMode="email"
          autoComplete="email"
          maxLength={40}
          placeholder="이메일 키워드 검색"
          isClearable
        />
        <Button color="primary" type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </form>
    </GuideProp>
  );
});

export default function SearchRHFSection() {
  return (
    <GuideSection
      label="React Hook Form"
      title="RHFSearch / form binding"
      description="RHFSearch는 RHFTextfield를 기반으로 Search UI를 react-hook-form 필드와 연결하는 래퍼 컴포넌트입니다."
    >
      <RHFSearchPropsGuideProp />
      <RHFSearchRulesGuideProp />
      <RHFSearchButtonTypeGuideProp />
      <RHFSearchNativeGuideProp />
    </GuideSection>
  );
}
