import PageLayout from "components/layouts/page";
import CroppedIllustrationHero from "components/layouts/cropped-illustration-hero";
import IllustratedBackgroundBox from "components/layouts/illustrated-background-box";
import TokenholdersDashboardSvg from "components/svgs/tokenholders-dashboard";
import GetTokenSection from "components/sections/tokenholders/get-token";
import TokenholderStatsSection from "components/sections/tokenholders/tokenholder-stats";
import {
  getTotalActiveStake,
  getTotalDelegators,
  getTotalVolume,
} from "lib/document-helpers";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const headProps: HeadProps = {
  meta: {
    title: "Tokenholders",
    description:
      "Livepeer.org is a primary online resource for participants and users of the Livepeer network.",
    url: "https://livepeer.org/tokenholders",
    siteName: "Livepeer.org",
    image: "https://livepeer.org/OG.png",
    twitterUsername: "@LivepeerOrg",
  },
};

const TokenholdersPage = ({
  totalActiveStake,
  totalDelegators,
  totalVolume,
}) => (
  <PageLayout
    headProps={headProps}
    footerProps={{
      prefooter: {
        type: "faqs",
        cta: { label: "Tokenholder FAQ", href: "/faq?filter=tokenholders" },
      },
    }}>
    <CroppedIllustrationHero
      withAnimation
      title="Tokenholders"
      subtitle="Every day thousands of tokenholders participate in Livepeer, the world’s first open source, peer-to-peer video streaming network."
      illustration={
        <IllustratedBackgroundBox pushContentSx={{ overflow: "hidden" }}>
          <TokenholdersDashboardSvg />
        </IllustratedBackgroundBox>
      }
      pushSx={{ mb: "-148px", maxWidth: "900px" }}
    />
    <GetTokenSection />
    <TokenholderStatsSection
      totalActiveStake={totalActiveStake}
      totalDelegators={totalDelegators}
      totalVolume={totalVolume}
    />
  </PageLayout>
);

export async function getStaticProps({ locale }) {
  const totalActiveStake = await getTotalActiveStake();
  const totalDelegators = await getTotalDelegators();
  const totalVolume = await getTotalVolume();

  return {
    props: {
      totalActiveStake,
      totalDelegators,
      totalVolume,
      ...(await serverSideTranslations(locale, ["common", "tokenholders"])),
    },
    revalidate: 1,
  };
}

export default TokenholdersPage;
