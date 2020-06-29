import { Container, Heading, Text, Box, Flex, Input, Button } from "theme-ui"
import PrefooterSvg from "components/icons/prefooter"

const PrefooterBanner = () => (
  <Box sx={{ px: 3, py: "80px", mb: "80px" }}>
    <Container
      sx={{
        bg: "primary",
        py: [4, 5],
        px: [4, null, null, "96px"],
        position: "relative",
        overflow: "hidden",
        borderRadius: "lg",
        boxShadow: "magical"
      }}
    >
      <Box
        sx={{
          maxWidth: "lg",
          display: "flex",
          flexDirection: "column",
          alignItems: ["center", null, null, "flex-start"],
          mx: ["auto", null, null, 0],
          zIndex: "general"
        }}
      >
        <Heading
          variant="heading.3"
          sx={{ textAlign: ["center", null, null, "left"] }}
        >
          Ready to get started?
        </Heading>
        <Text
          variant="normal"
          sx={{
            mt: "18px",
            mb: "40px",
            textAlign: ["center", null, null, "left"]
          }}
        >
          Through storytelling, illustration, and data, the Livepeer Primer
          explains, at a high level, the problem Livepeer solves and how it
          works.
        </Text>
        <Flex
          sx={{
            width: "100%",
            flexWrap: "wrap",
            mx: [-1, 0],
            zIndex: "general"
          }}
        >
          <Input
            placeholder="Enter your work email address"
            sx={{ mx: 1, flex: "1 1 60%", mb: 2 }}
          />
          <Button
            variant="secondary"
            sx={{ minWidth: "fit-content", flex: "1 1", mx: 1 }}
          >
            Check it out
          </Button>
        </Flex>
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: "-336px",
          top: ["unset", null, null, "50%"],
          bottom: ["-232px", "-190px", null, "unset"],
          transform: ["none", null, null, "translateY(-50%)"]
        }}
      >
        <PrefooterSvg />
      </Box>
    </Container>
  </Box>
)

export default PrefooterBanner