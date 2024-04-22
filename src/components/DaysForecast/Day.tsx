import { FC } from "react";
import styled from "styled-components";

interface IProps {
  icon: string;
  temp: number;
  day: string;
}

const Day: FC<IProps> = ({ icon, temp, day }) => {
  return (
    <DayStyle>
      <img src={`./weather/${icon}.svg`} alt={icon} />
      <p>{Math.floor(temp)}°C</p>
      <h4>{day}</h4>
    </DayStyle>
  );
};

const DayStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  gap: 40px;
  padding: 10px 0;

  img {
    max-width: 40px;
  }

  p {
    color: rgb(255, 255, 255);
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
  }

  h4 {
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
  }
`;

export default Day;
