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
import { useTranslation } from "next-i18next";

const TokenholdersPage = ({
  totalActiveStake,
  totalDelegators,
  totalVolume,
}) => {
  const { t } = useTranslation(["tokenholders"]);

  const headProps: HeadProps = {
    meta: {
      title: t("page-tokenholders-meta-title"),
      description: t("page-tokenholders-meta-description"),
      url: "https://livepeer.org/tokenholders",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@LivepeerOrg",
    },
  };

  return (
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
        title={t("page-tokenholders-title")}
        subtitle={t("page-tokenholders-intro")}
        illustration={
          <IllustratedBackgroundBox pushContentSx={{ overflow: "hidden" }}>
            <TokenholdersDashboardSvg />
          </IllustratedBackgroundBox>
        }
        pushSx={{ mb: "-148px", maxWidth: "900px" }}
      />
      <GetTokenSection
        title={t("page-tokenholders-get-token")}
        card1={{
          label: t("page-tokenholders-get"),
          title: t("page-tokenholders-get-title"),
          listItems: [
            t("page-tokenholders-get-text-one"),
            t("page-tokenholders-get-text-two"),
            t("page-tokenholders-get-text-three"),
          ],
          ctaText: t("page-tokenholders-get-cta"),
        }}
        card2={{
          label: t("page-tokenholders-stake"),
          title: t("page-tokenholders-stake-title"),
          listItems: [
            t("page-tokenholders-stake-text-one"),
            t("page-tokenholders-stake-text-two"),
            t("page-tokenholders-stake-text-three"),
          ],
          ctaText: t("page-tokenholders-stake-cta"),
        }}
      />
      <TokenholderStatsSection
        title={t("page-tokenholders-stats")}
        label1={t("page-tokenholders-stats-staked-text")}
        label2={t("page-tokenholders-stats-fees-text")}
        label3={t("page-tokenholders-stats-delegators-text")}
        totalActiveStake={totalActiveStake}
        totalDelegators={totalDelegators}
        totalVolume={totalVolume}
      />
    </PageLayout>
  );
};

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
