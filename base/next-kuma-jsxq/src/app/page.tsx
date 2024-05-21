/* eslint-disable @next/next/no-img-element */
"use client";
import { createFCX } from "@/utils/fcx";
import { Box, css, VStack } from "@kuma-ui/core";

const Home = createFCX(() => {
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
      <img
        src="/logo.png"
        alt="logo"
        q={css`
          width: 300px;
        `}
      />
      <div
        q={css`
          color: teal;
          font-size: 60px;
        `}
      >
        Hello world!!
      </div>
      <Box color={active ? "blue" : "black"}>foo bar</Box>
    </VStack>
  );
});
export default Home;
