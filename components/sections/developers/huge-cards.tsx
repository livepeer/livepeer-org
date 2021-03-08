/** @jsx jsx */
import { jsx, Grid, Text, Box } from "theme-ui";
import SectionLayout from "components/layouts/section";
import HugeCard, { HugeCardProps } from "components/primitives/cards/huge";
import NetworkSvg from "components/svgs/network";
import HostedApiSvg from "components/svgs/hosted-api";

const HugeCardsSection = ({ card1, card2 }) => {
  const cards: HugeCardProps[] = [
    {
      titleLabel: card1.label,
      title: card1.title,
      listItems: [
        <Box>
          <Text
            sx={{
              textAlign: "left",
              lineHeight: 1,
              mb: 2,
            }}
            variant="large">
            {card1.list[0].title}
          </Text>
          {card1.list[0].subtitle}
        </Box>,
        <Box>
          <Text
            sx={{
              textAlign: "left",
              lineHeight: 1,
              mb: 2,
            }}
            variant="large">
            {card1.list[1].title}
          </Text>
          {card1.list[1].subtitle}
        </Box>,
        <Box>
          <Text
            sx={{
              textAlign: "left",
              lineHeight: 1,
              mb: 2,
            }}
            variant="large">
            {card1.list[2].title}
          </Text>
          {card1.list[2].subtitle}
        </Box>,
      ],
      cta: {
        label: card1.ctaText,
        isLink: true,
        isExternal: true,
        href: "https://livepeer.readthedocs.io/",
      },
      accent: "primary",
      headerIllustration: <NetworkSvg />,
    },
    {
      titleLabel: card2.label,
      title: card2.title,
      listItems: [
        <Box>
          <Text
            sx={{
              textAlign: "left",
              lineHeight: 1,
              mb: 2,
            }}
            variant="large">
            {card2.list[0].title}
          </Text>
          {card2.list[0].subtitle}
        </Box>,
        <Box>
          <Text
            sx={{
              textAlign: "left",
              lineHeight: 1,
              mb: 2,
            }}
            variant="large">
            {card2.list[1].title}
          </Text>
          {card2.list[1].subtitle}
        </Box>,
        <Box>
          <Text
            sx={{
              textAlign: "left",
              lineHeight: 1,
              mb: 2,
            }}
            variant="large">
            {card2.list[2].title}
          </Text>
          {card2.list[2].subtitle}
        </Box>,
      ],
      cta: {
        label: card2.ctaText,
        isLink: true,
        isExternal: true,
        href: "https://livepeer.com",
      },
      accent: "secondary",
      headerIllustration: <HostedApiSvg pushSx={{ minWidth: "968px" }} />,
    },
  ];
  return (
    <SectionLayout
      background="muted"
      pushSx={{ py: ["80px", "160px"] }}
      headingContainerPushSx={{ mb: 0 }}>
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

export default HugeCardsSection;
