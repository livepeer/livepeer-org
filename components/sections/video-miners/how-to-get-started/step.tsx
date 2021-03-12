import { Flex, Text, Box } from "theme-ui";
import { useEffect, useRef, ReactNode } from "react";

export type HowToGetStartedStepProps = {
  index?: number;
  children: ReactNode;
  className?: string;
  isLast?: boolean;
};

const HowToGetStartedStep = ({
  index,
  children,
  className,
  isLast,
}: HowToGetStartedStepProps) => {
  const childrenRef = useRef<HTMLDivElement>(null);
  const stickRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stickRef.current && childrenRef.current) {
      const height = childrenRef.current.offsetHeight;
      stickRef.current.style.height = height + "px";
    }
  }, [stickRef, childrenRef]);

  return (
    <Flex className={className} sx={{ alignItems: "flex-start" }}>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          mr: 4,
          minWidth: 4,
        }}>
        <Text
          variant="normal"
          sx={{
            fontWeight: 700,
            fontFamily: "special",

            textAlign: "center",
          }}>
          {index + 1}
        </Text>
        {!isLast && (
          <Box
            ref={stickRef}
            sx={{
              height: "40px",
              width: "4px",
              bg: "primary",
            }}
          />
        )}
      </Flex>
      <Text variant="normal" ref={childrenRef}>
        {children}
      </Text>
    </Flex>
  );
};

export default HowToGetStartedStep;
