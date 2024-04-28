import { FC } from "react";
import styled from "styled-components";
import LeftBlock from "./LeftBlock";
import CenterBlock from "./CenterBlock";
import RightBlock from "./RightBlock";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const WeatherData: FC = () => {
  const mode = useSelector((state: RootState) => state.data.mode);

  return (
    <WeatherDataStyle $mode={mode}>
      <LeftBlock />
      <CenterBlock />
      <RightBlock />
    </WeatherDataStyle>
  );
};

const WeatherDataStyle = styled.div<{ $mode: boolean }>`
  border-radius: 30px;
  background: ${(props) =>
    props.$mode ? "var(--primary-color-mode)" : "var(--primary-color)"};
  transition: all 300ms linear;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.5);
  padding: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default WeatherData;
