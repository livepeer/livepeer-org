import { StatProps } from "components/primitives/stat";
import SectionLayout from "components/layouts/section";
import StatsGrid from "components/layouts/stats-grid";
import { nFormatter } from "lib/document-helpers";

type Props = {
  title: string;
  label1: string;
  label2: string;
  label3: string;
  totalActiveStake: number;
  totalDelegators: number;
  totalVolume: number;
};

const TokenholderStatsSection = ({
  title,
  label1,
  label2,
  label3,
  totalActiveStake,
  totalDelegators,
  totalVolume,
}: Props) => {
  const stats: StatProps[] = [
    {
      title: `${nFormatter(totalActiveStake, 1)}`,
      label: label1,
    },
    {
      title: `${nFormatter(totalVolume, 1)} USD`,
      label: label2,
      color: "gradient",
    },
    {
      title: totalDelegators.toString(),
      label: label3,
    },
  ];

  return (
    <SectionLayout title={title} pushSx={{ pt: ["80px", null, null, "160px"] }}>
      <StatsGrid stats={stats} />
    </SectionLayout>
  );
};

export default TokenholderStatsSection;
