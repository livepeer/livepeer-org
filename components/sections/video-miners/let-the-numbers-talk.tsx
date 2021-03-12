import { StatProps } from "components/primitives/stat";
import SectionLayout from "components/layouts/section";
import StatsGrid from "components/layouts/stats-grid";
import { nFormatter } from "lib/document-helpers";

const LetTheNumbersTalkSection = ({
  title,
  subtitle,
  totalVolume,
  label1,
  label2,
  label3,
}) => {
  const stats: StatProps[] = [
    {
      title: "45",
      label: label1,
    },
    {
      title: `${nFormatter(totalVolume, 1)} USD`,
      label: label2,
      color: "gradient",
    },

    {
      title: "Free",
      label: label3,
    },
  ];

  return (
    <SectionLayout
      title={title}
      subtitle={subtitle}
      pushSx={{ py: ["80px", null, null, "160px"] }}>
      <StatsGrid stats={stats} />
    </SectionLayout>
  );
};

export default LetTheNumbersTalkSection;
