// "use client";

import { Box, css, VStack } from "@kuma-ui/core";

export default function Page2() {
  const active = true;

  return (
    <VStack
      gap="12px"
      width="100vw"
      height="100vh"
      color="#333"
      padding="20px"
      border="solid 3px orange"
    >
      <div
        className={css`
          color: green;
          font-size: 60px;
        `}
      >
        Hello world!!
      </div>
      <Box color={active ? "green" : "black"}>foo bar</Box>
      <Box color="blue">hello</Box>
      <div
        className={css`
          color: orange;
        `}
      >
        world
      </div>
    </VStack>
  );
}
