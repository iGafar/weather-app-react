import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";
import { getCelsiusTemp, getHour } from "../../functions";

const LeftBlock: FC = () => {
  const weather = useSelector((state: RootState) => state.weather.days[0]);

  return (
    <LeftBlockStyle>
      <p className="temperature">{getCelsiusTemp(weather?.temp) || 0}C</p>
      <p className="feels">
        Feels like:
        <span className="feels-temperature">
          {getCelsiusTemp(weather?.feelslike) || 0}C
        </span>
      </p>

      <SunStyle>
        <img src="./icons/sunrise.png" alt="sunrise" />
        <div>
          <h4>Sunrise</h4>
          <p>{getHour(weather?.sunrise || "00:00")}</p>
        </div>
      </SunStyle>

      <SunStyle>
        <img src="./icons/sunset.png" alt="sunset" />
        <div>
          <h4>Sunset</h4>
          <p>{getHour(weather?.sunset || "00:00")}</p>
        </div>
      </SunStyle>
    </LeftBlockStyle>
  );
};

const LeftBlockStyle = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 33%;
  text-align: center;
  min-width: 155px;

  .temperature {
    background: linear-gradient(
      67.78deg,
      rgb(255, 255, 255),
      rgba(255, 255, 255, 0)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Poppins;
    font-size: 80px;
    font-weight: 700;
    line-height: 70px;
  }

  .feels {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    opacity: 0.8;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 30px;

    &-temperature {
      color: rgba(255, 255, 255, 0.8);
      font-size: 32px;
      font-weight: 700;
    }
  }
`;

const SunStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:first-of-type {
    margin: auto 0 10px;
  }

  img {
    max-width: 48px;
  }

  h4 {
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
  }

  p {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
`;

export default LeftBlock;
