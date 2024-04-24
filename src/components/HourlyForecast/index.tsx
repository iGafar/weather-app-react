import { FC } from "react";
import styled from "styled-components";
import Hour from "./Hour";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IHourlyWeatherData } from "../../types";

const HourlyForecast: FC = () => {
  const hours = useSelector((state: RootState) => state.weather.days[0]?.hours);

  return (
    <HourlyForecastStyle>
      <h2>Hourly Forecast:</h2>
      <ul>
        {hours?.map((hour: IHourlyWeatherData) => (
          <Hour key={hour.datetime} data={hour} />
        ))}
      </ul>
    </HourlyForecastStyle>
  );
};

const HourlyForecastStyle = styled.div`
  border-radius: 30px;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.5);
  background: var(--primary-color);
  padding: 15px 30px;
  width: 100%;
  overflow: hidden;

  h2 {
    color: var(--main-color);
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
