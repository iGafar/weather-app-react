import { FC, useEffect } from "react";
import styled from "styled-components";
import { getCelsiusTemp, getDateStandart, getDay } from "../../functions";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface IProps {
  icon: string;
  temp: number;
  day: string;
}

const Day: FC<IProps> = ({ icon, temp, day }) => {
  const mode = useSelector((state: RootState) => state.data.mode);

  useEffect(() => {
    getDateStandart(day);
  }, [day]);
  return (
    <DayStyle $mode={mode}>
      <img src={`./weather/${icon}.svg`} alt={icon} />
      <p>{getCelsiusTemp(Math.round(temp))}°C</p>
      <h4>
        {getDay(day)}, {getDateStandart(day).split(",").join("")}
      </h4>
    </DayStyle>
  );
};

const DayStyle = styled.li<{ $mode: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  gap: 40px;

  img {
    max-width: 40px;
  }

  p {
    color: ${(props) =>
      props.$mode ? "var(--main-color-mode)" : "var(--main-color)"};
    transition: all 200ms linear;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    flex: 1;
  }

  h4 {
    color: ${(props) =>
      props.$mode ? "var(--main-color-mode)" : "var(--main-color)"};
    transition: all 200ms linear;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
  }
`;

export default Day;
