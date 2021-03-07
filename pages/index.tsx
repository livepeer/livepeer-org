import HomeHero from "components/sections/home/hero";
import ByTheNumbersSection from "components/sections/home/by-the-numbers";
import LetLivepeerDoSection from "components/sections/home/let-livepeer-do";
import PrimerBanner from "components/sections/home/primer-banner";
import CommunitySection from "components/sections/home/community";
import PageLayout from "components/layouts/page";
import { useEffect } from "react";
import HaveACallSection from "components/sections/home/have-a-call";
import { getTotalActiveStake } from "lib/document-helpers";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const HomePage = ({ youtubeVideos, totalActiveStake }) => {
  const router = useRouter();
  const { t } = useTranslation(["home"]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "initial";
    };
  }, []);

  const headProps: HeadProps = {
    meta: {
      title: t("page-home-meta-title"),
      description: t("page-home-meta-description"),
      url: "https://livepeer.org",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@LivepeerOrg",
    },
  };

  return (
    <PageLayout
      headProps={headProps}
      navProps={{ isInmersive: true }}
      pushContentSx={{ marginTop: "-72px" }}>
      <HomeHero
        title={router.locale !== "en" && t("page-home-title")}
        subtitle={t("page-home-intro")}
        cta={t("page-home-get-started")}
        videoLabel={t("page-home-live")}
      />
      <LetLivepeerDoSection
        label={t("page-home-get-started")}
        title={t("page-home-what-role")}
        subtitle={t("page-home-jump-in")}
        tokenholders={{
          title: t("page-home-tokenholders"),
          description: t("page-home-tokenholders-text"),
        }}
        developers={{
          title: t("page-home-developers"),
          description: t("page-home-developers-text"),
        }}
        videoMiners={{
          title: t("page-home-video-miners"),
          description: t("page-home-video-miners-text"),
        }}
      />
      <PrimerBanner
        label={t("page-home-primer")}
        title={t("page-home-primer-title")}
        subtitle={t("page-home-primer-text")}
        ctaText={t("page-home-primer-cta")}
      />
      <ByTheNumbersSection
        title={t("page-home-stats-title")}
        subtitle={t("page-home-stats-text")}
        label={t("page-home-stats")}
        totalActiveStake={totalActiveStake}
      />
      <CommunitySection
        title={t("page-home-communities-title")}
        subtitle={t("page-home-communities-text")}
        label={t("page-home-communities")}
      />
      <HaveACallSection
        title={t("page-home-call")}
        subtitle={t("page-home-call-text")}
        ctaText={t("page-home-call-cta")}
        youtubeVideos={youtubeVideos}
      />
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?maxResults=100&part=snippet&playlistId=PLkw6hm1fcjtEo9HydrGKP2R_NHhSu1Mpl&key=${process.env.YOUTUBE_API_KEY}`
  );

  const youtubeData = await response.json();

  const totalActiveStake = await getTotalActiveStake();

  return {
    props: {
      youtubeVideos: youtubeData.items,
      totalActiveStake: totalActiveStake,
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
    revalidate: 1,
  };
}

export default HomePage;
