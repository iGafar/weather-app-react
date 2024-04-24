import styled, { createGlobalStyle } from "styled-components";
import Time from "./components/Time";
import WeatherData from "./components/WeatherData";
import DaysForecast from "./components/DaysForecast";
import HourlyForecast from "./components/HourlyForecast";
import Header from "./components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./store/slices/weatherSlice";
import { RootState } from "./store/store";

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.mode.mode);

  useEffect(() => {
    dispatch(fetchWeatherData({ lat: 55, long: 37 }));
  }, [dispatch]);

  return (
    <>
      <Global $mode={mode} />
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

const Global = createGlobalStyle<{ $mode: boolean }>`
	:root {
		--main-color: ${(props) =>
      props.$mode ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"};
		--primary-color: ${(props) =>
      props.$mode ? "rgb(68, 68, 68)" : "rgb(217, 217, 217)"}
	}

	html, body {
		height: max-content;
	}

	body {
		font-family: "Poppins", sans-serif;
		background: ${(props) =>
      props.$mode
        ? "linear-gradient(130.48deg, rgb(125, 125, 125) 0%,rgb(12, 12, 12) 71.819%) no-repeat"
        : "linear-gradient(134.68deg, rgb(255, 255, 255) 0.285%, rgba(70, 97, 115, 0.5) 178.646%) no-repeat"};
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
