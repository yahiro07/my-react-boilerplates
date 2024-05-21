"use client";

import { Box, css, VStack } from "@kuma-ui/core";
import { FC } from "react";

export const IndexPage: FC = () => {
  // const [count, setCount] = useState(0);
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
      {/* <Box
        color={count % 2 == 0 ? "red" : "orange"}
        onClick={() => setCount((prev) => prev + 1)}
      >
        {count}
      </Box> */}
      <Box color="red">hello</Box>
      <div
        className={css`
          color: cyan;
        `}
      >
        world
      </div>
    </VStack>
  );
};
