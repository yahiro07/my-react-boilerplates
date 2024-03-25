/* eslint-disable @next/next/no-img-element */
"use client";
import { createFCS } from "@/utils/fcs";
import { flexCentered } from "@/utils/utility_styles";
import { css } from "@styled-system/css";

const Home = createFCS(
  (_, s) => {
    return (
      <div q={s.base}>
        <img src="/logo.png" alt="logo" q={s.logo} />
        <div q={s.hello}>Hello world!!</div>
      </div>
    );
  },
  {
    base: css({
      width: "100vw",
      height: "100vh",
      color: "#333",
      ...flexCentered(10),
      flexDirection: "column",
      border: "solid 3px green",
      padding: "20px",
    }),
    logo: css({
      width: "300px",
    }),
    hello: css({
      color: "orange",
      fontSize: "60px",
    }),
  }
);

export default Home;
