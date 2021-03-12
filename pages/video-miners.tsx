import PageLayout from "components/layouts/page";
import HowVideoMiningWorksSection from "components/sections/video-miners/how-video-mining-works";
import LetTheNumbersTalkSection from "components/sections/video-miners/let-the-numbers-talk";
import HowToGetStartedSection from "components/sections/video-miners/how-to-get-started";
import RequirementsSection from "components/sections/video-miners/requirements";
import VideoMinerHero from "components/sections/video-miners/hero";
import { getTotalVolume } from "lib/document-helpers";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const VideoMinerPage = ({ totalVolume }) => {
  const { t } = useTranslation(["video-miners", "developers", "common"]);

  const headProps: HeadProps = {
    meta: {
      title: t("page-video-miners-meta-title"),
      description: t("page-video-miners-meta-desecription"),
      url: "https://livepeer.org/video-miners",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@LivepeerOrg",
    },
  };

  return (
    <PageLayout headProps={headProps} footerProps={{ prefooter: null }}>
      <VideoMinerHero
        title={t("page-video-miners-title")}
        subtitle={t("page-video-miners-intro")}
      />
      <HowVideoMiningWorksSection
        title={t("page-video-miners-how")}
        text1={t("page-video-miners-how-text-one")}
        text2={t("page-video-miners-how-text-two")}
      />
      <LetTheNumbersTalkSection
        title={t("page-video-miners-numbers")}
        subtitle={t("page-video-miners-numbers-text")}
        label1={t("page-video-miners-numbers-nodes-text")}
        label2={t("page-video-miners-numbers-fees-text")}
        label3={t("page-video-miners-numbers-cost-text")}
        totalVolume={totalVolume}
      />
      <RequirementsSection
        title={t("page-video-miners-requirements")}
        subtitle={t("page-video-miners-requirements-intro")}
        cards={[
          {
            title: t("page-video-miners-requirements-title-one"),
            description: t("page-video-miners-requirements-text-one"),
          },
          {
            title: t("page-video-miners-requirements-title-two"),
            description: t("page-video-miners-requirements-text-two"),
          },
          {
            title: t("page-video-miners-requirements-title-three"),
            description: t("page-video-miners-requirements-text-three"),
          },
        ]}
      />
      <HowToGetStartedSection
        title={t("common:nav-get-started")}
        subtitle={t("page-video-miners-intro")}
        ctaText={t("developers:page-developers-public-network-cta")}
      />
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  const totalVolume = await getTotalVolume();

  return {
    props: {
      totalVolume,
      ...(await serverSideTranslations(locale, [
        "common",
        "video-miners",
        "developers",
      ])),
    },
    revalidate: 1,
  };
}

export default VideoMinerPage;
