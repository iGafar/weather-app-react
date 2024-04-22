import { FC, useState } from "react";
import styled from "styled-components";

const Mode: FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <ModeStyle $isDark={isDark}>
      <button onClick={() => setIsDark((prev) => !prev)}></button>
      <p>{isDark ? "Dark Mode" : "Light Mode"}</p>
    </ModeStyle>
  );
};

const ModeStyle = styled.div<{ $isDark: boolean }>`
  button {
    width: 100px;
    height: 38px;
    border-radius: 40px;
    background: rgb(217, 217, 217);
    position: relative;

    &:before {
      content: "";
      display: inline-block;
      transition: all 200ms ease-in-out;
      width: 30px;
      height: 30px;
      background: rgb(17, 17, 17);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: ${(props) => (props.$isDark ? "5px" : "65px")};
      transform: translateY(-50%);
    }
  }

  p {
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 800;
    line-height: 27px;
    margin-top: auto;
    white-space: nowrap;
    width: 105px;
  }
`;

export default Mode;
