import SectionLayout from "components/layouts/section";
import { Link as A, Heading, Text, Box } from "theme-ui";
import Accordion from "components/primitives/accordion";
import { AccordionItemProps } from "components/primitives/accordion/item";
import LivepeerIconSvg from "components/svgs/icons/livepeer";
import BasementIconSvg from "components/svgs/icons/basement";
import Maintainer, { MaintainerProps } from "./maintainer";

const WhoIsMaintainingSection = ({
  title,
  subtitle,
  role1,
  role2,
  text1,
  text2,
}) => {
  const livepeerMaintainers: MaintainerProps[] = [
    {
      name: "Adam Soffer",
      position: role1,
      avatar: {
        src:
          "https://avatars3.githubusercontent.com/u/555740?s=460&u=af1ec022281bf42faadde807895f47230583c0d8&v=4",
      },
      githubHref: "https://github.com/adamsoffer",
    },
  ];

  const basementMaintainers: MaintainerProps[] = [
    {
      name: "Jose Rago",
      position: role2,
      avatar: {
        src:
          "https://avatars1.githubusercontent.com/u/13522179?s=460&u=357b008de640d8d353a203a08bbaad37151ef9cb&v=4",
      },
      githubHref: "https://github.com/ragojose",
    },

    {
      name: "Julian Benegas",
      position: role1,
      avatar: {
        src:
          "https://avatars1.githubusercontent.com/u/40034115?s=400&u=3bf788afbbf0fe34bda786a12fe7dd0480830531&v=4",
      },
      githubHref: "https://github.com/julianbenegas",
    },
    {
      name: "Franco Arza",
      position: role1,
      avatar: {
        src:
          "https://avatars3.githubusercontent.com/u/466367?s=460&u=f01535059f726cc441b47e044ec92c6b9b0f4024&v=4",
      },
      githubHref: "https://github.com/arzafran",
    },
  ];

  const accordionItems: AccordionItemProps[] = [
    {
      heading: {
        title: "Livepeer, Inc.",
        icon: {
          children: <LivepeerIconSvg pushSx={{ width: "20px" }} isDark />,
        },
        pushSx: {
          h5: {
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          },
        },
      },
      children: (
        <Box pl={3} className="maintainer">
          {livepeerMaintainers.map((m) => (
            <Maintainer key={`maintainer-${m.name}`} {...m} />
          ))}
        </Box>
      ),
    },
    {
      heading: {
        title: "basement.studio",
        icon: {
          bg: "#000",
          children: <BasementIconSvg />,
        },
        pushSx: {
          h5: {
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          },
        },
      },
      children: (
        <Box pl={3} className="maintainer">
          {basementMaintainers.map((m) => (
            <Maintainer key={`maintainer-${m.name}`} {...m} />
          ))}
        </Box>
      ),
    },
  ];
  return (
    <SectionLayout
      title={title}
      subtitle={subtitle}
      pushSx={{ pt: ["80px", "160px"] }}>
      <Accordion
        items={accordionItems}
        pushSx={{
          ".maintainer > div:not(:last-of-type)": {
            mb: 3,
            pb: 3,
            borderBottom: "1px solid",
            borderColor: "ultraLightGray",
          },
          maxWidth: "800px",
          mx: "auto",
          mb: 5,
        }}
        withIllustratedBackground
      />
      <Heading variant="heading.5" sx={{ mb: 4, maxWidth: "4xl", mx: "auto" }}>
        {text1 ? (
          text1
        ) : (
          <>
            Anyone is welcome and encouraged to help improve the site on{" "}
            <A
              href="https://github.com/livepeer/livepeer-org"
              target="_blank"
              variant="accent">
              GitHub
            </A>{" "}
            by opening an issue or pull request. When submitting a pull request,
            please take required time to discuss your changes and adapt your
            work.
          </>
        )}
      </Heading>
      <Text
        variant="normal"
        sx={{
          color: "gray",
          textAlign: "center",
          maxWidth: "4xl",
          mx: "auto",
        }}>
        {text2}
      </Text>
    </SectionLayout>
  );
};

export default WhoIsMaintainingSection;
