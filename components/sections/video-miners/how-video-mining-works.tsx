import { Box, Container, Grid, Heading } from "theme-ui";
import NodesSvg from "components/svgs/nodes";
import BlockchainSvg from "components/svgs/blockchain";

const HowVideoMiningWorksSection = ({ title, text1, text2 }) => (
  <Box sx={{ bg: "text", position: "relative", zIndex: "general" }}>
    <Container variant="section" sx={{ py: ["80px", null, null, "160px"] }}>
      <Grid columns={[1, null, 2]} gap={4} sx={{ alignItems: "center" }}>
        <Box>
          <Heading
            variant="heading.3"
            sx={{
              color: "background",
              textAlign: "left",
              fontFamily: "body",
              mb: "24px",
            }}>
            {title}
          </Heading>
          <Heading
            variant="heading.5"
            sx={{ color: "lightGray", textAlign: "left" }}>
            {text1}
          </Heading>
        </Box>
        <NodesSvg />
      </Grid>
      <Grid columns={[1, null, 2]} gap={4} sx={{ alignItems: "center" }}>
        <BlockchainSvg />
        <Heading
          variant="heading.5"
          sx={{
            color: "lightGray",
            textAlign: "left",
            gridRow: [1, null, "unset"],
          }}>
          {text2}
        </Heading>
      </Grid>
    </Container>
  </Box>
);

export default HowVideoMiningWorksSection;
