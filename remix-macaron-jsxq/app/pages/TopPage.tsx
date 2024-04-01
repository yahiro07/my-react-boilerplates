import { style } from "@macaron-css/core";
import { createFCX } from "~/utils/fcx";
import { flexCentered } from "~/utils/utility_styles";

export const TopPage = createFCX(() => {
  return (
    <div q={styles.base}>
      <img src="/logo.png" q={styles.logo} alt="logo" />
      <div q={styles.hello}>Hello world!!</div>
    </div>
  );
});

const styles = {
  base: style({
    width: "100vw",
    height: "100vh",
    color: "#333",
    ...flexCentered(10),
    flexDirection: "column",
    border: "solid 3px pink",
    padding: "20px",
  }),
  logo: style({
    width: "300px",
  }),
  hello: style({
    color: "pink",
    fontSize: "60px",
  }),
};
