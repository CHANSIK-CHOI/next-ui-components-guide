import { Button, Field, RHFSearch } from "@/components";
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

type SearchStateValues = {
  disabledKeyword: string;
  readOnlyKeyword: string;
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
      name="RHFTextfield props 확장"
      typeLabel='Omit<RHFTextfieldProps<TFieldValues, TName>, "children" | "type"> & { onSearch?: () => void; searchButtonTitle?: string; searchButtonType?: "button" | "submit" | "reset"; }'
      description={
        <>
          - RHFSearch는 RHFTextfield props를 확장합니다.
          <br /> - RHFTextfield는 Textfield UI props를 기반으로 하므로
          isClearable, infoMessage, errorMessage 같은 Textfield props도 함께 사용할 수
          있습니다.
          <br /> - clear 버튼은 isClearable이 true이고 값이 있을 때 보이며,
          클릭하면 RHF 값이 먼저 빈 문자열로 정리된 뒤 onClear가 호출됩니다.
          <br /> - children과 type은 내부에서 검색 버튼과 text 타입으로
          고정합니다.
          <br /> - searchButtonType을 지정하지 않으면 onSearch가 있을 때는
          button, 없을 때는 submit으로 동작합니다.
        </>
      }
    >
      <form onSubmit={handleSubmit(handleSubmitBasic)}>
        <div className="guideFormStack">
          <Field>
            <Field.Label>검색어</Field.Label>
            <RHFSearch
              name="keyword"
              control={control}
              isClearable
              infoMessage="RHF 연결과 검색 버튼을 동시에 사용할 수 있습니다."
              onSearch={() => console.log(getValues("keyword"))}
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
      typeLabel='RHFSearchProps<TFormValues, TFieldName>["rules"] | (() => void)'
      description="검색 버튼 액션은 onSearch로 분리하고, 실제 필드 검증은 RHFSearch가 상속한 RHFTextfield rules로 연결합니다."
    >
      <form onSubmit={handleSubmit(handleSubmitValidation)}>
        <div className="guideFormStack">
          <Field>
            <Field.Label>검증용 검색어</Field.Label>
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
          </Field>
          <Button color="primary" type="submit" disabled={isSubmitting}>
            검색 검증
          </Button>
        </div>
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
        <div className="guideFormStack">
          <Field>
            <Field.Label>검색 버튼 제출</Field.Label>
            <RHFSearch
              name="submitKeyword"
              control={control}
              placeholder="검색 버튼으로 form submit"
              searchButtonType="submit"
              isClearable
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
        <div className="guideFormStack">
          <Field>
            <Field.Label>이메일 키워드 검색</Field.Label>
            <RHFSearch
              name="emailKeyword"
              control={control}
              inputMode="email"
              autoComplete="email"
              maxLength={40}
              placeholder="이메일 키워드 검색"
              isClearable
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

const RHFSearchStateGuideProp = memo(function RHFSearchStateGuideProp() {
  const { control, getValues } = useForm<SearchStateValues>({
    mode: "onSubmit",
    defaultValues: {
      disabledKeyword: "비활성화 상태",
      readOnlyKeyword: "읽기 전용 상태",
    },
  });

  return (
    <GuideProp
      isWide
      name="disabled | readOnly"
      typeLabel="boolean"
      defaultValue="false"
      description="RHFSearch도 Textfield 상태 props를 그대로 상속합니다. disabled는 입력과 검색 버튼을 모두 막고, readOnly는 직접 입력과 clear 버튼을 막지만 검색 버튼 액션은 유지합니다."
    >
      <Field>
        <Field.Label>비활성화 검색</Field.Label>
        <RHFSearch
          name="disabledKeyword"
          control={control}
          disabled
        />
      </Field>
      <Field>
        <Field.Label>읽기 전용 검색</Field.Label>
        <RHFSearch
          name="readOnlyKeyword"
          control={control}
          readOnly
          isClearable
          onSearch={() => console.log(getValues("readOnlyKeyword"))}
          infoMessage="readOnly에서도 검색 버튼 클릭 동작은 유지됩니다."
        />
      </Field>
    </GuideProp>
  );
});

export default function SearchRHFSection() {
  return (
    <GuideSection
      label="React Hook Form"
      title="RHFSearch / 폼 연동"
      description="RHFSearch는 RHFTextfield를 기반으로 Search UI를 React Hook Form 필드와 연결하는 래퍼 컴포넌트입니다."
    >
      <RHFSearchPropsGuideProp />
      <RHFSearchRulesGuideProp />
      <RHFSearchButtonTypeGuideProp />
      <RHFSearchStateGuideProp />
      <RHFSearchNativeGuideProp />
    </GuideSection>
  );
}
