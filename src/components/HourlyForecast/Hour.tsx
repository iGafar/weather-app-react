import { FC } from "react";
import styled from "styled-components";
import { IHourlyWeatherData } from "../../types";
import { getHour } from "../../functions";

interface IProps {
  data: IHourlyWeatherData;
}

const Hour: FC<IProps> = ({ data }) => {
  return (
    <HourStyle>
      <h3>{getHour(data.datetime || "00:00")}</h3>
      <img
        className="weather"
        src={`./weather/${data.icon}.svg`}
        alt={data.icon}
      />
      <p className="temperature">26°C</p>
      <img className="arrow" src="./icons/arrow.png" alt="arrow" />
      <p className="speed">3km/h</p>
    </HourStyle>
  );
};

const HourStyle = styled.li`
  border-radius: 40px;
  background: rgb(55, 54, 54);
  width: 130px;
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h3 {
    color: rgb(255, 255, 255);
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }

  .weather {
    width: 60px;
  }

  .temperature {
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
  }

  .arrow {
    max-width: 50px;
  }

  .speed {
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
  }
`;

export default Hour;
