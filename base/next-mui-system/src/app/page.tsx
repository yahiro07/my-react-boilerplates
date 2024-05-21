/* eslint-disable @next/next/no-img-element */
"use client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { FC } from "react";

const VStack = Box;

const RedBox = styled.div`
  background: red;
  width: 100px;
  height: 100px;
`;

const Home: FC = () => {
  const active = true;

  return (
    <VStack
      display="flex"
      flexDirection="column"
      gap="12px"
      width="100vw"
      height="100vh"
      color="#333"
      padding="20px"
      border="solid 3px orange"
    >
      <Box component="img" src="/logo.png" alt="logo" width="300px" />
      <Box color="teal" fontSize="60px">
        Hello world!!
      </Box>
      <Box color={active ? "blue" : "black"}>foo bar</Box>
      <Box width="200px" height="100px" border="solid 1px red" padding="20px">
        hello
      </Box>
      <RedBox />
      <div
        css={css`
          color: red;
        `}
      >
        world
      </div>
    </VStack>
  );
};
export default Home;
