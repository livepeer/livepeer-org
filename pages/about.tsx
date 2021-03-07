import PageLayout from "components/layouts/page";
import IconHero from "components/layouts/icon-hero";
import LivepeerIconSvg from "components/svgs/icons/livepeer";
import MissionSection from "components/sections/about/mission";
import WhoIsBuildingSection from "components/sections/about/who-is-building";
import WhoIsMaintainingSection from "components/sections/about/who-is-maintaining";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const AboutPage = () => {
  const router = useRouter();
  const { t } = useTranslation(["about"]);

  const headProps: HeadProps = {
    meta: {
      title: t("page-about-meta-title"),
      description: t("page-about-meta-description"),
      url: "https://livepeer.org/about",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@LivepeerOrg",
    },
  };

  return (
    <PageLayout headProps={headProps}>
      <IconHero
        icon={<LivepeerIconSvg pushSx={{ width: "24px" }} isDark />}
        title={t("page-about-title")}
        subtitle={t("page-about-intro")}
        illustration={<LivepeerIconSvg />}
        withAnimation
      />
      <MissionSection
        intro={t("page-about-mission-intro")}
        text1={t("page-about-mission-text-one")}
        text2={t("page-about-mission-text-two")}
        text3={router.locale !== "en" && t("page-about-mission-text-three")}
        missionPart1={t("page-about-mission-1")}
        missionPart2={t("page-about-mission-2")}
      />
      <WhoIsBuildingSection
        title={t("page-about-who")}
        subtitle={t("page-about-text")}
        text={t("page-about-jobs")}
        ctaText1={t("page-about-who-cta")}
        ctaText2={t("page-about-open-positions")}
      />
      <WhoIsMaintainingSection
        title={t("page-about-maintainers")}
        subtitle={t("page-about-maintainers-intro")}
        role1={t("page-about-maintainers-dev")}
        role2={t("page-about-maintainers-pd")}
        text1={router.locale !== "en" && t("page-about-maintainers-text-one")}
        text2={t("page-about-maintainers-text-two")}
      />
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about"])),
    },
    revalidate: 1,
  };
}

export default AboutPage;
