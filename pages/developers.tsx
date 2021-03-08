import IsOpenSourceSection from "components/sections/developers/is-open-source";
import PageLayout from "components/layouts/page";
import DevelopersHero from "components/sections/developers/hero";
import HugeCardsSection from "components/sections/developers/huge-cards";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Developers = () => {
  const { t } = useTranslation(["developers"]);

  const headProps: HeadProps = {
    meta: {
      title: t("page-developers-meta-title"),
      description: t("page-developers-meta-description"),
      url: "https://livepeer.org/developers",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@LivepeerOrg",
    },
  };

  return (
    <PageLayout headProps={headProps} pushContentSx={{ bg: "text" }}>
      <DevelopersHero
        title={t("page-developers-title")}
        subtitle={t("page-developers-intro")}
      />
      <HugeCardsSection
        card1={{
          label: t("page-developers-build-with"),
          title: t("page-developers-public-network"),
          list: [
            {
              title: t("page-developers-decentralized"),
              subtitle: t("page-developers-decentralized-text"),
            },
            {
              title: t("page-developers-cost"),
              subtitle: t("page-developers-cost-text"),
            },
            {
              title: t("page-developers-flexible"),
              subtitle: t("page-developers-flexible-text"),
            },
          ],
          ctaText: t("page-developers-public-network-cta"),
        }}
        card2={{
          label: t("page-developers-build-with"),
          title: t("page-developers-hosted-service"),
          list: [
            {
              title: t("page-developers-easy"),
              subtitle: t("page-developers-easy-text"),
            },
            {
              title: t("page-developers-powered"),
              subtitle: t("page-developers-powered-text"),
            },
            {
              title: t("page-developers-smart"),
              subtitle: t("page-developers-smart-text"),
            },
          ],
          ctaText: t("page-developers-hosted-service-cta"),
        }}
      />
      <IsOpenSourceSection
        title={t("page-developers-open-source")}
        subtitle={t("page-developers-open-source-text")}
        ctaText={t("page-developers-open-source-cta")}
        label1={t("page-developers-stats-contributors-text")}
        label2={t("page-developers-stats-stargazers-text")}
        label3={t("page-developers-stats-languages-text")}
      />
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "developers"])),
    },
    revalidate: 1,
  };
}

export default Developers;
