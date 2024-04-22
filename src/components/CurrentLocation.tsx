import { FC } from "react";
import styled from "styled-components";

const CurrentLocation: FC = () => {
  return (
    <CurrentLocationStyle>
      <img src="./icons/current-location.png" alt="current location" />
      Current Location
    </CurrentLocationStyle>
  );
};

const CurrentLocationStyle = styled.button`
  border-radius: 40px;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);
  background: rgb(76, 187, 23);
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 290px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 22px;
  font-weight: 800;
	max-height: 62px;
	padding: 0 5px;

	img {
		height: 90%;
	}
`;

export default CurrentLocation;
