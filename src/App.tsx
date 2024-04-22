import styled, { createGlobalStyle } from "styled-components";
import Time from "./components/Time";
import WeatherData from "./components/WeatherData";
import DaysForecast from "./components/DaysForecast";
import HourlyForecast from "./components/HourlyForecast";
import Header from "./components/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "./store/slices/weatherSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(async (position) => {
    //   const lat = position.coords.latitude;
    //   const long = position.coords.longitude;
    //   console.log("lat", lat);
    //   dispatch(fetchWeatherData({ lat, long }));
    // });

    dispatch(fetchWeatherData({ lat: 55, long: 37 }));
  }, [dispatch]);
  return (
    <>
      <Global />
      <Header />
      <section>
        <div className="container">
          <Block>
            <Time />
            <WeatherData />
          </Block>
          <Block>
            <DaysForecast />
            <HourlyForecast />
          </Block>
        </div>
      </section>
    </>
  );
}

const Global = createGlobalStyle`
	html, body {
		height: max-content;
	}

	body {
		font-family: "Poppins", sans-serif;
		background: linear-gradient(130.48deg, rgb(125, 125, 125) 0%,rgb(12, 12, 12) 71.819%) no-repeat;
		min-height: 100vh;
		padding-top: 63px;
	}

	.container {
		max-width: 1500px;
		margin: 0 auto;
		padding: 0 30px;
	}
`;

const Block = styled.div`
  display: flex;
  gap: 55px;
  margin-bottom: 50px;
`;

export default App;
