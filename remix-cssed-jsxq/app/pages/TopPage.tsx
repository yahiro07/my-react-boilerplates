import { css } from "cssed";
import { createFCX } from "~/utils/fcx";

export const TopPage = createFCX(() => {
  return (
    <div q={styles.base}>
      <img src="/logo.png" q={styles.logo} alt="logo" />
      <div q={styles.hello}>Hello world!!</div>
    </div>
  );
});

const styles = css`
  .base {
    width: 100vw;
    height: 100vh;
    color: #333;
    padding: 20px;
    border: solid 3px orange;
  }

  .logo {
    width: 300px;
  }

  .hello {
    color: teal;
    font-size: 60px;
  }
`;
