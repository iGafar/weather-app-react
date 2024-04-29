import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/store";
import { getDateStandart } from "../functions";

const Time: FC = () => {
  const mode = useSelector((state: RootState) => state.data.mode);
  const city = useSelector((state: RootState) => state.data.city);
  const dayOfWeek = useSelector(
    (state: RootState) => state.data.time?.dayOfWeek
  );
  const date = useSelector((state: RootState) => state.data.time?.dateTime);

  return (
    <TimeStyle $mode={mode}>
      <h1>{city}</h1>
      <p className="time">{date?.slice(11, 16)}</p>
      <p className="date">
        {dayOfWeek}, {getDateStandart(date?.slice(0, 10) || "2024-01-01")}
      </p>
    </TimeStyle>
  );
};

const TimeStyle = styled.div<{ $mode: boolean }>`
  border-radius: 30px;
  background: ${(props) =>
    props.$mode ? "var(--primary-color-mode)" : "var(--primary-color)"};
  transition: all 300ms linear;
  padding: 50px 107px;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.5);
  text-align: center;
  max-width: 510px;

  h1 {
    color: ${(props) =>
      props.$mode ? "var(--main-color-mode)" : "var(--main-color)"};
    transition: all 200ms linear;
    font-size: 36px;
    font-weight: 700;
    line-height: 54px;
    margin-bottom: 29px;
  }

  .time {
    color: ${(props) =>
      props.$mode ? "var(--main-color-mode)" : "var(--main-color)"};
    transition: all 200ms linear;
    font-size: 96px;
    font-weight: 700;
    line-height: 144px;
  }

  .date {
    color: ${(props) =>
      props.$mode ? "var(--main-color-mode)" : "var(--main-color)"};
    transition: all 200ms linear;
    font-size: 20px;
    line-height: 30px;
  }
`;

export default Time;
