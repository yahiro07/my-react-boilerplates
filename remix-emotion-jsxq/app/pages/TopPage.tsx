import { css } from "@emotion/css";
import { createFCX } from "~/utils/fcx";
import { flexVertical } from "~/utils/utility_styles";

export const TopPage = createFCX(() => (
  <div className={style}>
    <img src="/logo.png" className="logo" alt="" />
    <div className="hello">Hello world!!</div>
  </div>
));

const style = css`
  width: 100vw;
  height: 100vh;
  color: #333;
  padding: 20px;
  border: solid 3px orange;
  ${flexVertical(10)};

  > .logo {
    width: 300px;
  }

  > .hello {
    color: lime;
    font-size: 60px;
  }
`;
