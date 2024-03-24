import { css } from "@emotion/css";
import { createFCX } from "./fcx";
import { flexVertical } from "./utility_styles";

export const App = createFCX(
  () => (
    <div>
      <img src="/logo.png" q="logo" />
      <div q="hello">Hello world!!</div>
    </div>
  ),
  css`
    width: 100vw;
    height: 100vh;
    color: #333;
    padding: 20px;
    border: solid 3px orange;
    ${flexVertical(12)};

    > .logo {
      width: 300px;
    }

    > .hello {
      color: lime;
      font-size: 60px;
    }
  `
);
