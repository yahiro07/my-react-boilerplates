import { styled } from "@styils/react";
import { createFCX } from "~/utils/fcx";
import { flexCentered } from "~/utils/utility_styles";

export const TopPage = createFCX(() => {
  const { Base, Logo, Hello } = styles;
  return (
    <Base>
      <Logo src="/logo.png" alt="logo" />
      <Hello>Hello world!!</Hello>
    </Base>
  );
});

const styles = {
  Base: styled("div", {
    width: "100vw",
    height: "100vh",
    color: "#333",
    ...flexCentered(10),
    flexDirection: "column",
    border: "solid 3px pink",
    padding: "20px",
  }),
  Logo: styled("img", {
    width: "300px",
  }),
  Hello: styled("div", {
    color: "pink",
    fontSize: "60px",
  }),
};
