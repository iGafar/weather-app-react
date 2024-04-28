import { FC } from "react";
import styled from "styled-components";
import Hour from "./Hour";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IHourlyWeatherData } from "../../types";

const HourlyForecast: FC = () => {
  const mode = useSelector((state: RootState) => state.data.mode);
  const hours = useSelector((state: RootState) => state.weather.days[0]?.hours);

  return (
    <HourlyForecastStyle $mode={mode}>
      <h2>Hourly Forecast:</h2>
      <ul>
        {hours?.map((hour: IHourlyWeatherData) => (
          <Hour key={hour.datetime} data={hour} />
        ))}
      </ul>
    </HourlyForecastStyle>
  );
};

const HourlyForecastStyle = styled.div<{ $mode: boolean }>`
  border-radius: 30px;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.5);
  background: ${(props) =>
    props.$mode ? "var(--primary-color-mode)" : "var(--primary-color)"};
  transition: all 300ms linear;
  padding: 15px 30px;
  width: 100%;
  overflow: hidden;

  h2 {
    color: ${(props) =>
      props.$mode ? "var(--main-color-mode)" : "var(--main-color)"};
    transition: all 200ms linear;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    text-align: center;
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    gap: 15px;
    overflow: auto;
  }
`;

export default HourlyForecast;
