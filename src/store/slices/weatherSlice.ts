import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { IData, IParams, IWeatherData } from "../../types";

export interface CounterState {
  days: IWeatherData[];
}

export const fetchWeatherData = createAsyncThunk<IWeatherData[], IParams>(
  "weatherData/fetchWeatherData",
  async (params: IParams): Promise<IWeatherData[]> => {
    try {
      const res = await axios
        .get<IData>(
          `${BASE_URL}${params.lat},${params.long}?key=D52NUFUDL7963TWL6VX3X2BQJ`
        )
        .then((res) => res.data.days);

      console.log("data", res);

      return res;
    } catch (error) {
      console.log(`Failed to fetch: ${onmessage}`);
      return [];
    }
  }
);

const initialState: CounterState = {
  days: [],
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.days = action.payload;
    });
  },
});

export default weatherSlice.reducer;
