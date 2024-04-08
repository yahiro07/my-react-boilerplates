import { css } from "@linaria/core";
import { createFCX } from "~/utils/fcx";
import { flexVertical } from "~/utils/utility_styles";

export const TopPage = createFCX(
  () => {
    return (
      <div>
        <img src="/logo.png" q="logo" alt="logo" />
        <div q="hello">Hello world!!</div>
      </div>
    );
  },
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
      color: teal;
      font-size: 60px;
    }
  `
);
