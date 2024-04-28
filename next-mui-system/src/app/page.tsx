/* eslint-disable @next/next/no-img-element */
"use client";
import { Box } from "@mui/system";
import { FC } from "react";

const VStack = Box;

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
    </VStack>
  );
};
export default Home;
