import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/store";
import { changeMode } from "../store/slices/modeSlice";

const Mode: FC = () => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const dispatch = useDispatch();

  return (
    <ModeStyle $isDark={mode}>
      <button onClick={() => dispatch(changeMode())}></button>
      <p>{mode ? "Dark Mode" : "Light Mode"}</p>
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
    color: var(--main-color);
    font-size: 18px;
    font-weight: 800;
    line-height: 27px;
    margin-top: auto;
    white-space: nowrap;
    width: 105px;
  }
`;

export default Mode;
