import { css } from "../styled-system/css";
import { createFCS } from "./fcs";
import { flexCentered } from "./utility_styles";

export const App = createFCS(
  (_, s) => {
    return (
      <div q={s.base}>
        <img src="/logo.png" q={s.logo} />
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
      border: "solid 3px pink",
      padding: "20px",
    }),
    logo: css({
      width: "300px",
    }),
    hello: css({
      color: "pink",
      fontSize: "60px",
    }),
  }
);
