import { FC, useEffect } from "react";
import styled from "styled-components";
import Day from "./Day";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const DaysForecast: FC = () => {
  const days = useSelector((state: RootState) => state.weather.days);
  useEffect(() => {
    console.log("days", days);
  }, [days]);

  return (
    <DaysForecastStyle>
      <h2>5 Days Forecast:</h2>
      <ul>
        {days.slice(0, 5).map((day, index) => (
          <Day key={index} temp={day.temp} icon={day.icon} day={day.datetime} />
        ))}
      </ul>
    </DaysForecastStyle>
  );
};

const DaysForecastStyle = styled.div`
  border-radius: 30px;
  background: var(--primary-color);
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.5);
  padding: 15px 30px;
  max-width: 415px;

  h2 {
    color: var(--main-color);
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0%;
    text-align: center;
    margin-bottom: 20px;
  }

  ul {
    li:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export default DaysForecast;
