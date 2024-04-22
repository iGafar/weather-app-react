import { FC } from "react";
import styled from "styled-components";
import LeftBlock from "./LeftBlock";
import CenterBlock from "./CenterBlock";
import RightBlock from "./RightBlock";

const WeatherData: FC = () => {
  return (
    <WeatherDataStyle>
      <LeftBlock />
      <CenterBlock />
      <RightBlock />
    </WeatherDataStyle>
  );
};

const WeatherDataStyle = styled.div`
  border-radius: 30px;
  background: rgb(68, 68, 68);
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.5);
  padding: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default WeatherData;
