import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppDispatch, RootState } from "../store/store";
import { fetchGeoToCity, fetchTime } from "../store/slices/dataSlice";
import { fetchWeatherData } from "../store/slices/weatherSlice";
import { fetchCityToGeo } from "../store/slices/geoSlice";

const Search: FC = () => {
  const mode = useSelector((state: RootState) => state.data.mode);
  const geo = useSelector((state: RootState) => state.geo.geo);
  const dispatch = useDispatch<AppDispatch>();
  const [city, setCity] = useState<string>("");

  const getNewWeatherData = (key: string) => {
    if (key === "Enter") {
      dispatch(fetchCityToGeo(city));
    }
  };

  useEffect(() => {
    dispatch(fetchWeatherData({ ...geo }));
    dispatch(fetchTime({ ...geo }));
    dispatch(fetchGeoToCity({ ...geo }));
  }, [dispatch, geo]);

  return (
    <SearchStyle $mode={mode}>
      <img src="./icons/search.png" alt="search" />
      <input
        onChange={(e) => setCity(e.target.value)}
        onKeyUp={(e) => getNewWeatherData(e.key)}
        type="text"
        placeholder="Search for your preffered city..."
      />
    </SearchStyle>
  );
};

const SearchStyle = styled.label<{ $mode: boolean }>`
  border-radius: 40px;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);
  background: ${(props) =>
    props.$mode ? "var(--primary-color-mode)" : "var(--primary-color)"};
  transition: all 300ms linear;
  width: 100%;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  gap: 29px;
  padding: 8px 33px;
  max-height: 62px;
  border: ${(props) => (props.$mode ? "" : "1px solid rgb(0, 0, 0);")};

  input {
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    color: ${(props) =>
      props.$mode ? "rgba(255, 255, 255, 0.6)" : "rgb(41, 41, 41)"};
    font-size: 18px;
    line-height: 27px;
  }
`;

export default Search;
