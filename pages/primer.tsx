import React, { useState } from "react";
import { Box } from "theme-ui";
import { Element } from "react-scroll";
import PageLayout from "components/layouts/primer";
import { HeadProps } from "components/primitives/head";
import { request } from "graphql-request";
import LivepeerSDK from "@livepeer/sdk";

// TODO: refactor primer components to use theme-ui
import Masthead from "components/sections/primer/Masthead";
import Introduction from "components/sections/primer/Introduction";
import Chapter1 from "components/sections/primer/Chapter1";
import Chapter2 from "components/sections/primer/Chapter2";
import Chapter3 from "components/sections/primer/Chapter3";
import Chapter4 from "components/sections/primer/Chapter4";
import Chapter5 from "components/sections/primer/Chapter5";
import Chapter6 from "components/sections/primer/Chapter6";
import Chapter7 from "components/sections/primer/Chapter7";
import Chapter8 from "components/sections/primer/Chapter8";
import Chapter9 from "components/sections/primer/Chapter9";
import Footer from "components/sections/primer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const headProps: HeadProps = {
  meta: {
    title: "A 10-Minute Primer",
    description:
      "Through storytelling, illustration, and data, the Livepeer Primer explains, at a high level, the problem Livepeer solves, and how it works.",
    url: "https://livepeer.org/primer",
    siteName: "Livepeer.org",
    image: "https://livepeer.org/images/primer/share-image.jpg",
    twitterUsername: "@LivepeerOrg",
  },
};

const Primer = ({ data }) => {
  const [section, setActiveSection] = useState("introduction");
  const onChange = (section) => {
    setActiveSection(section);
  };

  return (
    <PageLayout
      navProps={{ background: "translucent", isInmersive: true }}
      headProps={headProps}>
      <Box className="primer">
        <Box className={`bg ${section}`} />
        <Element name="top" />
        <Box id="containerElement" style={{ position: "relative", zIndex: 10 }}>
          <Masthead />
          <Element name="introduction">
            <Introduction onChange={() => onChange("introduction")} />
          </Element>
          <Element name="chapter1">
            <Chapter1 onChange={() => onChange("chapter1")} />
          </Element>
          <Element name="chapter2">
            <Chapter2 />
          </Element>
          <Element name="chapter3">
            <Chapter3 onChange={() => onChange("chapter3")} />
          </Element>
          <Element name="chapter4">
            <Chapter4 onChange={() => onChange("chapter4")} />
          </Element>
          <Element name="chapter5">
            <Chapter5 onChange={() => onChange("chapter5")} />
          </Element>
          <Element name="chapter6">
            <Chapter6 />
          </Element>
          <Element name="chapter7">
            <Chapter7 data={data} />
          </Element>
          <Element name="chapter8">
            <Chapter8 data={data} onChange={() => onChange("chapter8")} />
          </Element>
          <Element name="chapter9">
            <Chapter9 data={data} onChange={() => onChange("chapter9")} />
          </Element>
          <Footer />
        </Box>
      </Box>
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  const { rpc } = await LivepeerSDK({
    provider: process.env.PROVIDER,
  });

  const reqDelegators = async (skip) => {
    const query = `query delegators ($first: Int $skip: Int $where: Delegator_filter) {
          delegators(first: $first skip: $skip where: $where) {
              id
            }
        }`;
    let response = await request(
      "https://api.thegraph.com/subgraphs/name/livepeer/livepeer",
      query,
      {
        skip: skip,
        first: 1000,
        where: {
          bondedAmount_gt: "0",
        },
      }
    );
    return response.delegators;
  };
  const getDelegators = async () => {
    const PAGE_SIZE = 1000;
    let delegators = [];
    let keepGoing = true;
    let skip = 0;
    while (keepGoing) {
      let response = await reqDelegators(skip);
      await delegators.push.apply(delegators, response);
      skip += PAGE_SIZE;
      if (response.length < PAGE_SIZE) {
        keepGoing = false;
        return delegators;
      }
    }
  };
  let delegators = await getDelegators();

  let totalSupply = (await rpc.getTokenTotalSupply()) / 10e17;

  let inflationChange = (await rpc.getInflationChange()) / 10000000;

  let inflationPerRound = (await rpc.getInflation()) / 10000000;

  let totalBonded = (await rpc.getTotalBonded()) / 10e17;

  let participationRate = ((+totalBonded / totalSupply) * 100).toPrecision(4);

  let targetBondingRate = (await rpc.getTargetBondingRate()) / 10000000;

  let ethGasStationResponse = await fetch(
    "https://ethgasstation.info/json/ethgasAPI.json"
  );
  let ethGasStationResult = await ethGasStationResponse.json();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "primer"])),
      data: {
        totalSupply,
        totalDelegators: delegators.length,
        inflationPerRound,
        inflationChange,
        totalBonded,
        targetBondingRate,
        participationRate,
        blockTime: ethGasStationResult.block_time,
      },
    },
    revalidate: 1,
  };
}

export default Primer;
