import { StatProps } from "components/primitives/stat";
import SectionLayout from "components/layouts/section";
import StatsGrid from "components/layouts/stats-grid";
import { nFormatter } from "lib/document-helpers";
import { useTranslation } from "next-i18next";

type Props = {
  totalActiveStake: number;
  label: string;
  title: string;
  subtitle: string;
};

const ByTheNumbersSection = ({
  title,
  subtitle,
  label,
  totalActiveStake,
}: Props) => {
  const { t } = useTranslation(["home"]);

  const stats: StatProps[] = [
    {
      title: "1.2.2017",
      label: t("page-home-stats-date-text"),
    },
    {
      title: "70k+",
      label: t("page-home-stats-gpus-text"),
      color: "gradient",
    },
    {
      title: `${nFormatter(totalActiveStake, 1)}`,
      label: t("page-home-stats-staked-text"),
    },
  ];
  return (
    <SectionLayout
      background="muted"
      title={title}
      subtitle={subtitle}
      titleLabel={label}
      pushSx={{ pb: ["80px", null, null, "160px"] }}>
      <StatsGrid stats={stats} />
    </SectionLayout>
  );
};

export default ByTheNumbersSection;
