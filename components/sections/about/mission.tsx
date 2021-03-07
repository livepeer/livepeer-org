import { useRef, useEffect } from "react";
import { Box, Link as A, Grid, Heading, Text } from "theme-ui";
import LivepeerIconSvg from "components/svgs/icons/livepeer";
import sectionEffect from "lib/animations/section-effect";

const MissionSection = ({
  intro,
  text1,
  text2,
  text3,
  missionPart1,
  missionPart2,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    sectionEffect(sectionRef.current);
  }, [sectionRef]);

  return (
    <Box
      sx={{
        bg: "text",
        color: "background",
        overflow: "hidden",
      }}>
      <Grid
        className="hide__section"
        ref={sectionRef}
        variant="layout.section"
        columns={[1, null, 2]}
        gap={"40px"}
        sx={{
          py: ["80px", "160px"],
          maxWidth: "984px",
          position: "relative",
        }}>
        <LivepeerIconSvg
          pushSx={{
            position: "absolute",
            width: "unset",
            height: "760px",
            top: "-22px",
            filter: "opacity(0.3)",
            left: "-532px",
            transform: "rotate(90deg)",
            display: ["none", null, "block"],
          }}
        />
        <Box sx={{ zIndex: "general", position: "relative" }}>
          <Heading
            variant="heading.5"
            sx={{
              textAlign: ["center", null, "left"],
              color: "background",
              mb: 1,
            }}>
            {missionPart1}
          </Heading>
          <Heading
            variant="heading.2"
            sx={{ textAlign: ["center", null, "left"], mb: 3 }}>
            {missionPart2}
          </Heading>
          <Heading
            variant="heading.5"
            sx={{ textAlign: ["center", null, "left"], color: "lightGray" }}>
            {intro}
          </Heading>
        </Box>
        <Box sx={{ zIndex: "general", position: "relative" }}>
          <Text variant="normal" sx={{ mb: 4 }}>
            {text1}
          </Text>
          <Text variant="normal" sx={{ mb: 4 }}>
            {text2}
          </Text>
          <Text variant="normal">
            {text3 ? (
              text3
            ) : (
              <>
                By providing the best possible portal to Livepeer, we hope to
                help capture this opportunity and fulfill the project’s mission
                as laid out in the original{" "}
                <A
                  href="https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="accent"
                  data-dark>
                  whitepaper
                </A>{" "}
                and{" "}
                <A
                  href="https://github.com/livepeer/wiki/blob/master/GOVERNANCE-FOUNDERS-STATEMENT.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="accent"
                  data-dark>
                  founder’s statement
                </A>{" "}
                — to <b>build the world’s open video infrastructure</b>.
              </>
            )}
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default MissionSection;
