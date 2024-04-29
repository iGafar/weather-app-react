import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IHourlyWeatherData } from "../../types";
import { getCelsiusTemp, getHour } from "../../functions";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface IProps {
  data: IHourlyWeatherData;
}

const Hour: FC<IProps> = ({ data }) => {
  const winddir = data.winddir;
  const mode = useSelector((state: RootState) => state.data.mode);
  const hourRef = useRef<HTMLHeadingElement>(null);
  const [isEvening, setIsEvening] = useState<boolean>(false);

  useEffect(() => {
    if (hourRef.current) {
      setIsEvening(
        +hourRef.current.innerText.slice(0, 2) > 18 ||
          +hourRef.current.innerText.slice(0, 2) < 6
      );
    }
  }, [isEvening]);

  return (
    <HourStyle $mode={mode} $isEvening={isEvening} $winddir={winddir}>
      <h3 ref={hourRef}>{getHour(data.datetime || "00:00")}</h3>
      <img
        className="weather"
        src={`./weather/${data.icon}.svg`}
        alt={data.icon}
      />
      <p className="temperature">{getCelsiusTemp(data.temp)}°C</p>
      <img className="arrow" src="./icons/arrow.png" alt="arrow" />
      <p className="speed">{Math.round(data.windspeed)}km/h</p>
    </HourStyle>
  );
};

const HourStyle = styled.li<{
  $winddir: number;
  $mode: boolean;
  $isEvening: boolean;
}>`
  border-radius: 40px;
  background: ${(props) =>
    props.$mode
      ? "rgb(55, 54, 54)"
      : props.$isEvening
      ? "linear-gradient(154.70deg, rgb(68, 61, 100) -15.918%,rgba(101, 130, 198, 0) 192.45%)"
      : "linear-gradient(140.10deg, rgb(248, 133, 8) -15.977%,rgba(246, 250, 217, 0) 150.582%)"};
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h3 {
    color: ${(props) =>
      props.$mode ? "var(--main-color-mode)" : "var(--main-color)"};
    transition: all 200ms linear;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }

  .weather {
    width: 60px;
  }

  .temperature {
    color: ${(props) =>
      props.$mode ? "var(--main-color-mode)" : "var(--main-color)"};
    transition: all 200ms linear;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
  }

  .arrow {
    max-width: 50px;
    transform: ${(props) => `rotate(${props.$winddir}deg)`};
  }

  .speed {
    color: ${(props) =>
      props.$mode ? "var(--main-color-mode)" : "var(--main-color)"};
    transition: all 200ms linear;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    white-space: nowrap;
  }
`;

export default Hour;
