import IconHero from "components/layouts/icon-hero";
import { FiPlay } from "react-icons/fi";
import IllustratedBackgroundBox from "components/layouts/illustrated-background-box";
import CodeStoryAnimation from "components/primitives/code-story-animation";
import { AnimatedLineProps } from "components/primitives/code-story-animation/line";
import CodeEditorBox from "components/layouts/code-editor-box";

const lines: AnimatedLineProps[] = [
  {
    frames: [{ text: "livepeer -broadcaster -network mainnet", isBold: true }],
  },
  {
    frames: [
      {
        text: "***Livepeer is running on the mainnet network***",
      },
    ],
    delay: 200,
    prefix: null,
    withoutTextAnimation: true,
    withoutCaret: true,
  },
  {
    frames: [
      {
        text:
          "Using Ethereum account: 0x4a5E4f02539326cCdA69757a7f04EA2960985fa8",
      },
    ],
    delay: 400,
    prefix: null,
    withoutTextAnimation: true,
    withoutCaret: true,
  },
  {
    frames: [
      {
        text: "***Livepeer Running in Broadcaster Mode***",
      },
    ],
    delay: 200,
    prefix: null,
    withoutTextAnimation: true,
    withoutCaret: true,
  },
  {
    frames: [
      {
        text: "Video Ingest Endpoint - rtmp://127.0.0.1:1935",
      },
    ],
    prefix: null,
    withoutTextAnimation: true,
    withoutCaret: true,
  },
  {
    frames: null,
    delay: 800,
  },
];

const DevelopersHero = ({ title, subtitle }) => (
  <IconHero
    withAnimation
    icon={<FiPlay />}
    title={title}
    subtitle={subtitle}
    illustration={
      <IllustratedBackgroundBox
        pushSx={{
          height: ["360px", "282px"],
          mt: "48px",
          width: "100%",
          maxWidth: "700px",
        }}
        pushContentSx={{
          p: 0,
          height: ["376px", "298px"],
          boxShadow: "magical",
          mt: "-48px",
        }}>
        <CodeEditorBox
          tabs={[{ label: "bash", isSelected: true }]}
          sx={{ height: "100%" }}>
          <CodeStoryAnimation lines={lines} />
        </CodeEditorBox>
      </IllustratedBackgroundBox>
    }
  />
);

export default DevelopersHero;
