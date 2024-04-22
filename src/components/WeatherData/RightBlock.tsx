import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";

const RightBlock: FC = () => {
  const weather = useSelector((state: RootState) => state.weather.days[0]);

  const data = [
    {
      img: "./icons/humidity-dark.png",
      value: `${Math.floor(weather?.humidity) || "0"}%`,
      name: "Humidity",
    },
    {
      img: "./icons/wind-dark.png",
      value: `${Math.floor(weather?.windspeed) || "0"}km/h`,
      name: "Wind Speed",
    },
    {
      img: "./icons/pressure-dark.png",
      value: `${Math.floor(weather?.pressure) || "0"}hPa`,
      name: "Pressure",
    },
    {
      img: "./icons/uv-dark.png",
      value: `${Math.floor(weather?.uvindex) || "0"}`,
      name: "UV",
    },
  ];

  return (
    <RightBlockStyle>
      {data.map((item) => (
        <li key={item.name}>
          <img src={item.img} alt={item.name} />
          <p>{item.value}</p>
          <h4>{item.name}</h4>
        </li>
      ))}
    </RightBlockStyle>
  );
};

const RightBlockStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 33%;
  gap: 10px 0;

  li {
    width: 50%;
    height: 50%;
    text-align: center;
    img {
      max-width: 60px;
    }
  }

  p {
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    margin-bottom: 10px;
  }

  h4 {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
`;

export default RightBlock;
