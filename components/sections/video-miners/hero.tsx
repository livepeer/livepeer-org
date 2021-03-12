import IllustratedBackgroundBox from "components/layouts/illustrated-background-box";
import CodeStoryAnimation from "components/primitives/code-story-animation";
import { AnimatedLineProps } from "components/primitives/code-story-animation/line";
import CroppedIllustrationHero from "components/layouts/cropped-illustration-hero";
import CodeEditorBox from "components/layouts/code-editor-box";

const lines: AnimatedLineProps[] = [
  {
    frames: [
      {
        text:
          "livepeer -orchestrator -transcoder -network mainnet -pricePerUnit 10000",
        isBold: true,
      },
    ],
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
        text: "Price: 10000 wei for 1 pixel",
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
        text: "***Livepeer is in Orchestrator Mode***",
      },
    ],
    delay: 200,
    prefix: null,
    withoutTextAnimation: true,
    withoutCaret: true,
  },
  {
    frames: null,
    delay: 800,
  },
];

const InfrastructureHero = ({ title, subtitle }) => (
  <CroppedIllustrationHero
    title={title}
    subtitle={subtitle}
    withAnimation
    illustration={
      <IllustratedBackgroundBox
        pushSx={{ height: ["520px", "500px"], width: "100%" }}
        pushContentSx={{
          p: 0,
          height: ["488px", "468px"],
          boxShadow: "magical",
        }}>
        <CodeEditorBox
          sx={{ height: "100%" }}
          tabs={[{ label: "bash", isSelected: true }, { label: "go-livepeer" }]}
          withLineNumbers>
          <CodeStoryAnimation lines={lines} />
        </CodeEditorBox>
      </IllustratedBackgroundBox>
    }
  />
);

export default InfrastructureHero;
