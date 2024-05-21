import { css, styled } from "@pigment-css/react";
import { FC } from "react";

const HelloBox = styled.div`
  width: 200px;
  height: 100px;
  border: solid 1px red;
  padding: 20px;
`;

const LogoImage = styled.img({
  width: "300px",
});

const Home: FC = () => {
  const active = true;

  return (
    <div
      q={css`
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100vw;
        height: 100vh;
        color: #333;
        padding: 20px;
        border: solid 3px orange;
      `}
    >
      <LogoImage src="/logo.png" alt="logo" />
      <div
        q={css({
          color: "teal",
          fontSize: "60px",
        })}
      >
        Hello world!!
      </div>
      <div
        q={[
          css`
            color: black;
            &.--active {
              color: cyan;
            }
          `,
          (active && "--active") || "",
        ]}
      >
        foo bar
      </div>
      <HelloBox>hello</HelloBox>
      <div sx={{ color: "red", background: "yellow", fontWeight: "bold" }}>
        foo
      </div>
    </div>
  );
};
export default Home;
