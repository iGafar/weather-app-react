import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";

const RightBlock: FC = () => {
  const weather = useSelector((state: RootState) => state.weather.days[0]);
  const mode = useSelector((state: RootState) => state.data.mode);

  const data = useMemo(
    () => [
      {
        img: `./icons/humidity${mode ? "-dark" : ""}.png`,
        value: `${Math.round(weather?.humidity) || "0"}%`,
        name: "Humidity",
      },
      {
        img: `./icons/wind${mode ? "-dark" : ""}.png`,
        value: `${Math.round(weather?.windspeed) || "0"}km/h`,
        name: "Wind Speed",
      },
      {
        img: `./icons/pressure${mode ? "-dark" : ""}.png`,
        value: `${Math.round(weather?.pressure) || "0"}hPa`,
        name: "Pressure",
      },
      {
        img: `./icons/uv${mode ? "-dark" : ""}.png`,
        value: `${Math.round(weather?.uvindex) || "0"}`,
        name: "UV",
      },
    ],
    [
      mode,
      weather?.humidity,
      weather?.pressure,
      weather?.uvindex,
      weather?.windspeed,
    ]
  );

  return (
    <RightBlockStyle $mode={mode}>
      {data.map((item) => (
        <li key={item.name}>
          <picture>
            <img src={item.img} alt={item.name} />
          </picture>
          <p>{item.value}</p>
          <h4>{item.name}</h4>
        </li>
      ))}
    </RightBlockStyle>
  );
};

const RightBlockStyle = styled.ul<{ $mode: boolean }>`
  display: flex;
  flex-wrap: wrap;
  width: 33%;
  gap: 10px 0;

  li {
    width: 50%;
    height: 50%;
    text-align: center;
  }

  picture {
    height: 60px;
    display: inline-block;

    img {
      max-width: 60px;
      width: 100%;
    }
  }

  p {
    white-space: nowrap;
    color: ${(props) =>
      props.$mode ? "var(--main-color-mode)" : "var(--main-color)"};
    transition: all 200ms linear;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    margin-bottom: 10px;
  }

  h4 {
    white-space: nowrap;
    color: ${(props) =>
      props.$mode ? "var(--main-color-mode)" : "var(--main-color)"};
    transition: all 200ms linear;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
`;

export default RightBlock;
