import { FC } from "react";
import styled from "styled-components";

const Time: FC = () => {
  return (
    <TimeStyle>
      <h1>City</h1>
      <p className="time">9:00</p>
      <p className="date">Thursday, 31 Aug</p>
    </TimeStyle>
  );
};

const TimeStyle = styled.div`
  border-radius: 30px;
  background: rgb(68, 68, 68);
  padding: 50px 107px;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.5);
	text-align: center;
	max-width: 510px;

  h1 {
    color: rgb(255, 255, 255);
    font-size: 36px;
    font-weight: 700;
    line-height: 54px;
    margin-bottom: 29px;
  }

  .time {
    color: rgb(255, 255, 255);
    font-size: 96px;
    font-weight: 700;
    line-height: 144px;
  }

  .date {
    color: rgb(255, 255, 255);
    font-size: 20px;
    line-height: 30px;
  }
`;

export default Time;
