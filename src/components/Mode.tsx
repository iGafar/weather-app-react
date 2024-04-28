import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppDispatch, RootState } from "../store/store";
import { changeMode } from "../store/slices/dataSlice";

const Mode: FC = () => {
  const mode = useSelector((state: RootState) => state.data.mode);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ModeStyle $mode={mode}>
      <button onClick={() => dispatch(changeMode())}></button>
      <p>{mode ? "Dark Mode" : "Light Mode"}</p>
    </ModeStyle>
  );
};

const ModeStyle = styled.div<{ $mode: boolean }>`
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
      left: ${(props) => (props.$mode ? "5px" : "65px")};
      transform: translateY(-50%);
    }
  }

  p {
    color: ${(props) =>
      props.$mode ? "var(--main-color-mode)" : "var(--main-color)"};
    transition: all 200ms linear;
    font-size: 18px;
    font-weight: 800;
    line-height: 27px;
    margin-top: auto;
    white-space: nowrap;
    width: 105px;
  }
`;

export default Mode;
