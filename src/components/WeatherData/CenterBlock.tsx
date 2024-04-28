import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";

const CenterBlock: FC = () => {
  const mode = useSelector((state: RootState) => state.data.mode);
  const weather = useSelector((state: RootState) => state.weather.days[0]);

  return (
    <CenterBlockStyle $mode={mode}>
      <img
        src={`./weather/${weather?.icon}.svg`}
        alt={weather?.conditions || "weather"}
      />
      <h2>{weather?.conditions}</h2>
    </CenterBlockStyle>
  );
};

const CenterBlockStyle = styled.div<{ $mode: boolean }>`
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
    color: ${(props) =>
      props.$mode ? "var(--main-color-mode)" : "var(--main-color)"};
    transition: all 200ms linear;
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    text-transform: capitalize;
    text-align: center;
  }
`;

export default CenterBlock;
