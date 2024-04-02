import { css } from "vite-css-in-js";
import { createFCX } from "~/utils/fcx";

export const TopPage = createFCX(() => {
  return (
    <div q={styles}>
      <img src="/logo.png" q="logo" alt="logo" />
      <div q="hello">Hello world!!</div>
    </div>
  );
});

const styles = css`
  width: 100vw;
  height: 100vh;
  color: #333;
  padding: 20px;
  border: solid 3px orange;

  > .logo {
    width: 300px;
  }

  > .hello {
    color: teal;
    font-size: 60px;
  }
`;
