import { Button, ButtonGroup, RHFTextfield, Textfield } from "@/components";
import { GuideCardLink, GuideLayout, GuideSection } from "@/components/Guide";
import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";

type SAMPLE_FORM_TYPE = {
  sampleText: string;
};
const SAMPLE_FORM: SAMPLE_FORM_TYPE = {
  sampleText: "",
};
export default function Home() {
  const [sampleTextfieldValue, setSampleTextfieldValue] = useState("");
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
          label="View Guide Page"
          title="컴포넌트 가이드 페이지로 이동"
          description="제작 된 컴포넌트들을 가이드 페이지로 이동하여 확인해보세요."
        >
          <GuideCardLink
            href="/button"
            title="Button"
            description="Button, ButtonLink, IconButton, ButtonGroup 컴포넌트의 props와 예시를 정리한 가이드 페이지입니다."
          />
          <GuideCardLink
            href="/textfield"
            title="Textfield"
            description="controlled Textfield와 RHFTextfield 컴포넌트의 props와 예시를 정리한 가이드 페이지입니다."
          />
          <GuideCardLink
            href="/search"
            title="Search"
            description="Textfield props를 확장한 Search와 RHFSearch 컴포넌트의 props와 예시를 정리한 가이드 페이지입니다."
          />
          <GuideCardLink
            href="/password"
            title="Password"
            description="Textfield props를 확장한 Password와 RHFPassword 컴포넌트의 props와 예시를 정리한 가이드 페이지입니다."
          />
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
            <Button color="primary" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        </GuideSection>
      </GuideLayout>
    </>
  );
}
