import { Flex, Box, Heading, Text, SxStyleProp } from "theme-ui";
import { ReactNode } from "react";

export type StatProps = {
  title: string;
  label: ReactNode;
  color?: "text" | "gradient";
  pushSx?: SxStyleProp;
};

const Stat = ({ title, label, color = "text", pushSx }: StatProps) => (
  <Box
    sx={{ width: "280px", height: "240px", ...pushSx }}
    className="c-animate">
    <Flex
      sx={{
        mx: "auto",
        bg: "background",
        width: "140px",
        height: "140px",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxShadow: "magical",
        borderRadius: "md",
        mb: 3,
      }}>
      <Heading
        variant="heading.3"
        sx={{
          fontWeight: "bold",
          position: "absolute",
          variant: color === "gradient" ? "text.gradient" : "text",
          whiteSpace: "nowrap",
          fontSize: "64px",
        }}>
        {title}
      </Heading>
    </Flex>
    <Text variant="heading.5" sx={{ color: "text" }}>
      {label}
    </Text>
  </Box>
);

export default Stat;
