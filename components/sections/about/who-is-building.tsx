/** @jsx jsx */
import { jsx, Heading, Link as A } from "theme-ui";
import SectionLayout from "components/layouts/section";
import { FiArrowUpRight } from "react-icons/fi";
import Slider from "components/primitives/slider";

const images = [
  {
    src: "/images/slider/tokenholders.png",
    alt: "",
    sx: { width: "450px" },
  },
  {
    src: "/images/slider/infrastructure.png",
    alt: "",
    sx: { width: "460px" },
  },
  {
    src: "/images/slider/contributors.png",
    alt: "",
    sx: { width: "624px" },
  },
];

const WhoIsBuildingSection = ({
  title,
  subtitle,
  text,
  ctaText1,
  ctaText2,
}) => (
  <SectionLayout
    title={title}
    background="muted"
    subtitle={
      subtitle ? (
        subtitle
      ) : (
        <>
          In 2017, the founders of the Livepeer project formed a company called
          Livepeer, Inc. to help facilitate its early development, bootstrap the
          network’s supply and demand sides, and guide the project’s{" "}
          <A
            href="https://medium.com/livepeer-blog/livepeers-path-to-decentralization-a9267fd16532"
            target="_blank"
            rel="noopener noreferrer"
            variant="accent">
            path to decentralization
          </A>
          .
        </>
      )
    }
    pushSx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      py: ["80px", "160px"],
    }}>
    <A
      href="https://livepeer.com/team"
      target="_blank"
      rel="noopener noreferrer"
      variant="buttons.primary"
      sx={{ display: "flex" }}>
      {ctaText1}{" "}
      <i sx={{ ml: 2, fontSize: 4 }}>
        <FiArrowUpRight />
      </i>
    </A>
    <Slider pushSx={{ my: 5 }} numberOfCopies={4} duration={20}>
      {images.map((img) => (
        <div key={`slider-image-${img.src}`} sx={{ mx: 4, ...img.sx }}>
          <img
            {...img}
            sx={{
              height: "312px",
              objectFit: "cover",
              borderRadius: "md",
              ...img.sx,
            }}
          />
        </div>
      ))}
    </Slider>
    <Heading variant="heading.5">
      {text}{" "}
      <A
        href="https://angel.co/company/livepeer/jobs"
        target="_blank"
        rel="noopener noreferrer"
        variant="accent"
        sx={{ variant: "layout.flexCenter", display: "inline-flex" }}>
        {ctaText2} <FiArrowUpRight />
      </A>
    </Heading>
  </SectionLayout>
);

export default WhoIsBuildingSection;
