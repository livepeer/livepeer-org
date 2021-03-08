import PageLayout from "components/layouts/page";
import IconHero from "components/layouts/icon-hero";
import { FiHelpCircle } from "react-icons/fi";
import FaqsSection from "components/sections/faqs";
import FaqHeroSvg from "components/svgs/faq-hero";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const headProps: HeadProps = {
  meta: {
    title: "FAQ",
    description:
      "Livepeer.org is a primary online resource for participants and users of the Livepeer network.",
    url: "https://livepeer.org/participants",
    siteName: "Livepeer.org",
    image: "https://livepeer.org/OG.png",
    twitterUsername: "@LivepeerOrg",
  },
};

const ParticipantsPage = () => (
  <PageLayout headProps={headProps} navProps={{ background: "dark" }}>
    <IconHero
      icon={<FiHelpCircle />}
      title="FAQ"
      subtitle="Below is a list of topics with the most frequently asked questions about the Livepeer network."
      illustration={<FaqHeroSvg />}
      background="dark"
      withAnimation
    />
    <FaqsSection />
  </PageLayout>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "faq"])),
    },
    revalidate: 1,
  };
}

export default ParticipantsPage;
