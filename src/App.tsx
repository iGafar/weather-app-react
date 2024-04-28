import styled, { createGlobalStyle } from "styled-components";
import Time from "./components/Time";
import WeatherData from "./components/WeatherData";
import DaysForecast from "./components/DaysForecast";
import HourlyForecast from "./components/HourlyForecast";
import Header from "./components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./store/slices/weatherSlice";
import { AppDispatch, RootState } from "./store/store";
import { fetchCityToGeo } from "./store/slices/geoSlice";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const mode = useSelector((state: RootState) => state.data.mode);

  useEffect(() => {
    dispatch(fetchCityToGeo({ city: "Goa" }));
    dispatch(fetchWeatherData({ lat: 55.755841, lng: 37.617286 }));
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
		--main-color: rgb(0, 0, 0);
		--main-color-mode: rgb(255, 255, 255); 
		--primary-color: rgb(217, 217, 217);
		--primary-color-mode: rgb(68, 68, 68);
	}

	html, body {
		height: max-content;
	}

	body {
		font-family: "Poppins", sans-serif;
		position: relative;
		min-height: 100vh;
		padding: 63px 0 1px;

		&::after {
			background: linear-gradient(
					134.68deg,
					rgb(255, 255, 255) 0.285%,
					rgba(70, 97, 115, 0.5) 178.646%
				)
				no-repeat;
			transition: all 2s linear;
			z-index: -1000;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			opacity: ${(props) => (props.$mode ? "0" : "1")};
		}

		&::before {
			content: "";
			display: block;
			opacity: ${(props) => (props.$mode ? "1" : "0")};
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(
					130.48deg,
					rgb(125, 125, 125) 0%,
					rgb(12, 12, 12) 71.819%
				)
				no-repeat;
			transition: all 1s ease-in-out;
			z-index: -1000;
		}
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
