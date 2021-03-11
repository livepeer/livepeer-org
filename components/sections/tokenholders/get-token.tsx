import SectionLayout from "components/layouts/section";
import { Grid } from "theme-ui";
import HugeCard, { HugeCardProps } from "components/primitives/cards/huge";
import {
  GetTokenSvg,
  StakeTokenSvg,
} from "components/svgs/tokenholder-card-headers";

const GetTokenSection = ({ title, card1, card2 }) => {
  const cards: HugeCardProps[] = [
    {
      titleLabel: card1.label,
      title: card1.title,
      listItems: card1.listItems,
      cta: {
        label: card1.ctaText,
        isLink: true,
        isExternal: true,
        href:
          "https://app.uniswap.org/#/swap?outputCurrency=0x58b6a8a3302369daec383334672404ee733ab239",
      },
      accent: "primary",
      headerIllustration: <StakeTokenSvg />,
    },
    {
      titleLabel: card2.label,
      title: card2.title,
      listItems: card2.listItems,
      cta: {
        label: card2.ctaText,
        isLink: true,
        isExternal: true,
        href: "https://explorer.livepeer.org",
      },
      accent: "secondary",
      headerIllustration: <GetTokenSvg />,
    },
  ];
  return (
    <SectionLayout
      title={title}
      background="muted"
      pushSx={{ py: ["80px", "160px"] }}>
      <Grid
        columns={[
          "minmax(auto, 632px)",
          null,
          "repeat(2, minmax(auto, 632px))",
        ]}
        sx={{ justifyContent: "center" }}>
        {cards.map((c) => (
          <HugeCard key={`get-token-card-${c.titleLabel}=${c.title}`} {...c} />
        ))}
      </Grid>
    </SectionLayout>
  );
};

export default GetTokenSection;
