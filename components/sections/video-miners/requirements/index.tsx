import SectionLayout from "components/layouts/section";
import RequirementCard, { RequirementCardProps } from "./card";
import { FiSettings, FiZap, FiClock } from "react-icons/fi";
import { Grid } from "theme-ui";

const RequirementsSection = ({ title, subtitle, cards }) => {
  const cardData: RequirementCardProps[] = [
    {
      title: cards[0].title,
      description: cards[0].description,
      icon: <FiSettings />,
    },
    {
      title: cards[1].title,
      description: cards[1].description,
      icon: <FiZap />,
    },
    {
      title: cards[2].title,
      description: cards[2].description,
      icon: <FiClock />,
    },
  ];

  return (
    <SectionLayout
      title={title}
      background="dark"
      subtitle={subtitle}
      pushSx={{ py: ["80px", null, null, "160px"] }}>
      <Grid
        columns={["minmax(auto, 360px)", null, null, 3]}
        gap="40px"
        sx={{ justifyContent: "center" }}>
        {cardData.map((c) => (
          <RequirementCard key={`requirement-card-${c.title}`} {...c} />
        ))}
      </Grid>
    </SectionLayout>
  );
};

export default RequirementsSection;
