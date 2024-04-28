import { FC } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "../store/slices/weatherSlice";
import { AppDispatch } from "../store/store";
import { fetchGeoToCity } from "../store/slices/dataSlice";

const CurrentLocation: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleWeatherLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        dispatch(fetchGeoToCity({ lat: latitude, lng: longitude }));
        dispatch(fetchWeatherData({ lat: latitude, lng: longitude }));
      });
    } else {
      console.log("Could not determine your position.");
    }
  };

  return (
    <CurrentLocationStyle onClick={() => handleWeatherLocation()}>
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
