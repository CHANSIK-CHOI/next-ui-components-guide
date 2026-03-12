import { ButtonLink } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { HomeIcon } from "@/components/Icon";

export default function ButtonLinkSection() {
  return (
    <GuideSection
      label="ButtonLink"
      title="ButtonLink / props 위임"
      description="ButtonLink는 Button과 동일한 디자인 props를 공유하면서 Next Link의 native props를 그대로 전달합니다."
    >
      <GuideProp
        name="href"
        typeLabel="string | UrlObject"
        description="ButtonLink에서 필수로 전달해야 하는 이동 경로입니다."
      >
        <ButtonLink href="/" icon={<HomeIcon />}>
          홈으로 이동
        </ButtonLink>
      </GuideProp>

      <GuideProp
        name="native link props"
        typeLabel="target | rel | prefetch | replace ..."
        description="정의하지 않은 링크 관련 props는 Next Link로 위임됩니다."
      >
        <ButtonLink
          href="https://nextjs.org"
          target="_blank"
          rel="noreferrer"
          shape="round"
          color="point"
        >
          Next.js Docs 새창 열기
        </ButtonLink>
      </GuideProp>
    </GuideSection>
  );
}
