/** @jsx jsx */
import { jsx, Link as A, Text } from "theme-ui";
import Link from "next/link";
import { LinkProps } from "lib/types/link-props";
import { ReactNode, FC } from "react";

type Category = { label: string; value: string };

export type Question = {
  question: string;
  answer: ReactNode;
  category: Category;
};

const categories: Category[] = [
  {
    label: "General",
    value: "general",
  },
  {
    label: "Developers",
    value: "developers",
  },
  {
    label: "Tokenholders",
    value: "tokenholders",
  },
  {
    label: "Video Miners",
    value: "video-miners",
  },
  {
    label: "Lexicon",
    value: "lexicon",
  },
];

const AnswerLink: FC<LinkProps> = ({ label, href, asPath, isExternal }) =>
  isExternal ? (
    <A variant="accent" sx={{ fontWeight: 400 }} href={href} target="_blank">
      {label}
    </A>
  ) : (
    <Link href={href} as={asPath}>
      <A variant="accent" sx={{ fontWeight: 400 }}>
        {label}
      </A>
    </Link>
  );

const questions: Question[] = [
  {
    question: "I am new to Livepeer. Where is the best place to start?",
    answer: (
      <>
        The <AnswerLink href="/primer" label="Livepeer 10-minute Primer" />{" "}
        serves as a great starting point.
      </>
    ),
    category: categories[0],
  },
  {
    question: "Who is Livepeer Inc.?",
    answer: (
      <>
        Livepeer Inc. is the legal entity and core team shepherding the protocol
        and moving it along its{" "}
        <AnswerLink
          href="https://medium.com/livepeer-blog/livepeers-path-to-decentralization-a9267fd16532"
          label="path towards decentralization."
          isExternal
        />
      </>
    ),
    category: categories[0],
  },
  {
    question: "Does Livepeer have a roadmap?",
    answer: (
      <>
        Albeit slightly out of date, you can read about the philosophical phases
        of the Livepeer roadmap{" "}
        <AnswerLink
          label="here"
          href="https://medium.com/livepeer-blog/livepeer-network-phases-b196ab42264b"
          isExternal
        />
        .
      </>
    ),
    category: categories[0],
  },
  {
    question: "What is the current implementation Livepeer team is working on?",
    answer: (
      <>
        It is called “Streamflow” and you can read about it{" "}
        <AnswerLink
          label="here"
          href="https://github.com/livepeer/wiki/blob/streamflow/STREAMFLOW.md"
          isExternal
        />
        .
      </>
    ),
    category: categories[0],
  },
  {
    question: "Where can I find the Livepeer whitepaper?",
    answer: (
      <>
        You can find whitepaper{" "}
        <AnswerLink
          label="here"
          href="https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md"
          isExternal
        />{" "}
        and the Streamflow paper{" "}
        <AnswerLink
          label="here"
          href="https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md"
          isExternal
        />
        .
      </>
    ),
    category: categories[0],
  },
  {
    question:
      "I’m a developer and want to contribute to Livepeer. Where can I find some tools/resources?",
    answer: (
      <>
        <Text mb={3}>
          The best way to get started is to join the discussion in{" "}
          <AnswerLink
            label="the Discord Developer Chat. "
            href="https://discord.gg/uaPhtyrWsF"
            isExternal
          />
          These links could be useful to you in terms of discovering development
          opportunities.
        </Text>
        <ul>
          <li>
            <AnswerLink
              label="https://livepeer.readthedocs.io/en/latest/developers.html"
              href="https://livepeer.readthedocs.io/en/latest/developers.html"
              isExternal
            />
          </li>
          <li>
            <AnswerLink
              href="https://github.com/livepeer/Grant-Program"
              label="https://github.com/livepeer/Grant-Program"
              isExternal
            />
          </li>
          <li>
            <AnswerLink
              href="https://github.com/livepeer"
              label="https://github.com/livepeer"
              isExternal
            />
          </li>
        </ul>
      </>
    ),
    category: categories[1],
  },
  {
    question:
      "I’d like to use Livepeer for my video application. Should I use the Livepeer public network or Livepeer.com’s hosted gateway API?",
    answer: (
      <>
        <p sx={{ mb: 3 }}>
          Setting up your own broadcaster connected directly to the Livepeer
          public network and using the Livepeer.com hosted service both allow
          you to transcode on the same scalable, reliable, affordable Livepeer
          public network. Initial setup for a Broadcaster node can involve some
          DevOps and requires that you pay in a cryptocurrency (ETH). But, there
          is large, global Livepeer community ready to help. The Livepeer
          Discord server is very active.
        </p>
        <p>
          Livepeer.com is great getting started quickly and growing a video
          platform fast with the complexities of blockchain and cryptocurrencies
          abstracted away for you. It offers a scalable end-to-end video
          infrastructure solution, from ingest to CDN playback for live and
          recorded streams. Don’t hesitate to reach out on the Discord server or
          via a contact form on livepeer.com to learn more about either option.
        </p>
      </>
    ),
    category: categories[1],
  },
  {
    question: "How was Livepeer token distributed? Was there an ICO?",
    answer: (
      <>
        No ICO. Livepeer token was originally distributed via a Merkle Mine, an
        algorithm that allows for large-scale, decentralized distribution of
        token during genesis state. Details regarding Livepeer's token
        distribution can be found{" "}
        <AnswerLink
          label="here"
          href="https://medium.com/livepeer-blog/the-end-of-the-initial-livepeer-token-distribution-6fa9894f0f16"
          isExternal
        />
        .
      </>
    ),
    category: categories[2],
  },
  {
    question: "How do I stake my LPT?",
    answer: (
      <>
        Follow the staking guide in the{" "}
        <AnswerLink
          label="Livepeer Protocol Explorer"
          href="https://explorer.livepeer.org/"
          isExternal
        />
        .
      </>
    ),
    category: categories[2],
  },
  {
    question:
      "What is the contract address for adding LPT to Metamask or MyCrypto?",
    answer: "0x58b6a8a3302369daec383334672404ee733ab239",
    category: categories[2],
  },
  {
    question:
      "How do I evaluate which orchestrator I should stake my LPT towards?",
    answer:
      "It's your job as a tokenholder to research orchestrators based upon their past performance, statistics, rates they are charging, and any social campaigns that they’ve posted indicating why they believe they will do a good job for the network.",
    category: categories[2],
  },
  {
    question: "How long do I need to wait for unstaking/withdrawing my tokens?",
    answer:
      "Once you click on Unstake, it takes seven days for your LPT to unstake at which point your tokens will be ready for you to withdraw into your own wallet.",
    category: categories[2],
  },
  {
    question: "Can I stake to multiple orchestrators?",
    answer: "Yes, but not from the same ETH account.",
    category: categories[2],
  },
  {
    question: "I want to become an orchestrator. How do I do that?",
    answer: (
      <>
        Follow{" "}
        <AnswerLink
          label="this"
          href="https://livepeer.readthedocs.io/en/latest/transcoding.html"
          isExternal
        />{" "}
        guide.
      </>
    ),
    category: categories[3],
  },
  {
    question: "Why am I not receiving any fees?",
    answer: (
      <>
        <ol sx={{ listStyle: "decimal inside", li: { mb: 2 }, ul: { mt: 2 } }}>
          <li>
            Don’t set your price per pixel setting too <b>high</b>
          </li>
          <li>
            Don’t set your price per pixel setting too <b>low</b>
          </li>
          <li>
            Make sure you’re transcoding in “sub real-time”
            <ul sx={{ listStyle: "inside", paddingInlineStart: "24px" }}>
              <li>
                <AnswerLink
                  href="https://livepeer.readthedocs.io/en/latest/transcoding.html#testing-your-transcoding-setup"
                  label="Check the docs"
                  isExternal
                />{" "}
                to test your own transcoding setup. Turn on logging to a more
                verbose level to debug this (-v 10).
              </li>
            </ul>
          </li>
        </ol>
      </>
    ),
    category: categories[3],
  },
  {
    question: "How much should I charge per pixel?",
    answer: (
      <>
        The price you should set should be based on the max price broadcasters
        are willing to pay. For example, Livepeer Inc’s broadcasters have a max
        price set at 3k wei per pixel which comes out to around 40 cents per
        hour per stream for its customers so if you want to win this work set
        your price at or below 3k wei per pixel.
      </>
    ),
    category: categories[3],
  },
  {
    question: "How can I optimize my ROI?",
    answer: (
      <>
        Check out{" "}
        <AnswerLink
          label="this financial model"
          href="https://drive.google.com/file/d/1jvbs8jiodbSiA4OvbPXk88P-1BZmPDcp/view"
          isExternal
        />{" "}
        open sourced by Chris Remus and Gleb Dudka.
      </>
    ),
    category: categories[3],
  },
  {
    question:
      "Where can I find what other registered orchestrators are charging to optimize my price settings?",
    answer: (
      <>
        This information is exposed in the Livepeer Protocol Explorer on the
        orchestrators page under the “price” column.
      </>
    ),
    category: categories[3],
  },
  {
    question:
      "How are Orchestrators picked right now? How does the orchestrator selection algorithm work?",
    answer: (
      <>
        A high level overview of the orchestrator selection algorithm can be
        found on YouTube{" "}
        <AnswerLink
          label="here"
          href="https://youtu.be/Zz-WTzoM1IM?t=2450"
          isExternal
        />
        .
      </>
    ),
    category: categories[3],
  },
  {
    question: "Staking (Bonding)",
    answer: (
      <>
        The act of “locking” your Livepeer token within the Livepeer protocol
        smart contracts on the Ethereum blockchain in exchange for the right to
        perform work on the network and earn inflationary token and broadcaster
        fees in return. Similar to a{" "}
        <AnswerLink
          label="performance bond"
          href="https://en.wikipedia.org/wiki/Performance_bond"
          isExternal
        />
        , tokens at stake provide security for developers using the network that
        work will be performed honestly, correctly and competitively.
      </>
    ),
    category: categories[4],
  },
  {
    question: "Merkle Mine",
    answer: (
      <>
        A Merkle Mine is an algorithm that allows for the large-scale,
        decentralized distribution of token during the genesis state. It was
        first introduced by Livepeer and was the mechanism by which LPT was
        originally distributed.
      </>
    ),
    category: categories[4],
  },
  {
    question: "Livepeer Protocol",
    answer: (
      <>
        The code that dictates all of the rules of using and interacting with
        Livepeer. Implemented as a set of smart contracts that run on the
        Ethereum blockchain.
      </>
    ),
    category: categories[4],
  },
  {
    question: "Segment",
    answer: (
      <>
        A video segment (or chunk) is a fragment of video information that is a
        collection of video frames. Combined together, these segments make up a
        whole video.
      </>
    ),
    category: categories[4],
  },
  {
    question: "Transcoding",
    answer: (
      <>
        The process of taking a raw video file and reformatting it so that no
        matter bandwidth you have - whether 2g or 5g - and no matter what
        device, you're ensured the most optimal viewing experience.
      </>
    ),
    category: categories[4],
  },
  {
    question: "Rendition",
    answer: (
      <>
        The resulting compressed version of the video file after it's been
        transcoded.
      </>
    ),
    category: categories[4],
  },
  {
    question: "Delegator",
    answer: (
      <>
        A Livepeer tokenholder that stakes with an orchestrator on the network,
        in effect delegating the role of performing transcoding video in
        exchange for a cut of its rewards and fees.
      </>
    ),
    category: categories[4],
  },
  {
    question: "Broadcaster",
    answer: (
      <>
        A Livepeer actor sending video streams into the network for transcoding.
      </>
    ),
    category: categories[4],
  },
  {
    question: "Orchestrator",
    answer: (
      <>
        A smart, 24/7 connected, Livepeer aware actor (human + piece of
        software), that negotiates with broadcasters, and represents that
        they’re going to do the work correctly.
      </>
    ),
    category: categories[4],
  },
  {
    question: "Transcoder",
    answer: (
      <>
        Dumb hardware that just knows how to encode video. (A GPU or CPU).
        Orchestrators pass video to transcoders and they encode and send it
        back.
      </>
    ),
    category: categories[4],
  },
  {
    question: "Node",
    answer: (
      <>
        Livepeer client software. Currently there exists a single client
        implementation written in Go called go-livepeer which can be run in
        broadcaster mode, transcoder mode, or orchestrator mode.
      </>
    ),
    category: categories[4],
  },
  {
    question: "Livepeer Token (LPT)",
    answer: (
      <>
        In the Livepeer protocol, Livepeer Token (LPT) is required to perform
        the work of transcoding and distributing video on the network. Its
        purpose is to coordinate, bootstrap, and incentivize participants to
        make sure the Livepeer network is as cheap, effective, secure, reliable
        and useful as possible.
      </>
    ),
    category: categories[4],
  },
];

export default questions;
export { categories };
