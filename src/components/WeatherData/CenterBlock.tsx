import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";

const CenterBlock: FC = () => {
  const weather = useSelector((state: RootState) => state.weather.days[0]);

  return (
    <CenterBlockStyle>
      <img
        src={`./weather/${weather?.icon}.svg`}
        alt={weather?.conditions || "weather"}
      />
      <h2>{weather?.conditions}</h2>
    </CenterBlockStyle>
  );
};

const CenterBlockStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 33%;

  img {
    max-width: 270px;
    width: 100%;
  }

  h2 {
    color: var(--main-color);
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    text-transform: capitalize;
    text-align: center;
  }
`;

export default CenterBlock;
