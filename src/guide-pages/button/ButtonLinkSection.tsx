import { ButtonLink } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { HomeIcon } from "@/components/Icon";

export default function ButtonLinkSection() {
  return (
    <GuideSection
      label="ButtonLink"
      title="ButtonLink / props 위임"
      description="ButtonLink는 Button과 동일한 디자인 props를 공유하고, 링크 이동에 필요한 Next Link props를 그대로 전달하는 컴포넌트입니다."
    >
      <GuideProp
        name="Button 디자인 props"
        typeLabel='icon | size | color | variant | shape'
        description="ButtonLink도 Button과 같은 icon, size, color, variant, shape props를 사용합니다. text variant는 color만 조합할 수 있고 size와 shape는 받지 않습니다."
      >
        <ButtonLink href="/" icon={<HomeIcon />}>
          홈으로 이동
        </ButtonLink>
        <ButtonLink href="/" color="primary" shape="round">
          주요 링크
        </ButtonLink>
        <ButtonLink href="/" variant="line" color="secondary">
          보조 링크
        </ButtonLink>
      </GuideProp>

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
        description="정의하지 않은 링크 관련 props는 Next Link로 위임됩니다. 외부 링크에서는 target, rel 같은 속성을 함께 지정할 수 있습니다."
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
