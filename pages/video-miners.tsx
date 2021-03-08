import PageLayout from "components/layouts/page";
import HowVideoMiningWorksSection from "components/sections/video-miners/how-video-mining-works";
import LetTheNumbersTalkSection from "components/sections/video-miners/let-the-numbers-talk";
import HowToGetStartedSection from "components/sections/video-miners/how-to-get-started";
import RequirementsSection from "components/sections/video-miners/requirements";
import VideoMinerHero from "components/sections/video-miners/hero";
import { getTotalVolume } from "lib/document-helpers";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const headProps: HeadProps = {
  meta: {
    title: "Video miners",
    description:
      "Livepeer.org is a primary online resource for participants and users of the Livepeer network.",
    url: "https://livepeer.org/video-miners",
    siteName: "Livepeer.org",
    image: "https://livepeer.org/OG.png",
    twitterUsername: "@LivepeerOrg",
  },
};

const VideoMinerPage = ({ totalVolume }) => (
  <PageLayout headProps={headProps}>
    <VideoMinerHero />
    <HowVideoMiningWorksSection />
    <LetTheNumbersTalkSection totalVolume={totalVolume} />
    <RequirementsSection />
    <HowToGetStartedSection />
  </PageLayout>
);

export async function getStaticProps({ locale }) {
  const totalVolume = await getTotalVolume();

  return {
    props: {
      totalVolume,
      ...(await serverSideTranslations(locale, ["common", "video-miners"])),
    },
    revalidate: 1,
  };
}

export default VideoMinerPage;
