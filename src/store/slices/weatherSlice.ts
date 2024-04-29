import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ICoordinates, IDataDays, IWeatherData } from "../../types";

export interface CounterState {
  days: IWeatherData[];
  loading: "idle" | "pending" | "fulfilled" | "rejected";
}

export const fetchWeatherData = createAsyncThunk<IWeatherData[], ICoordinates>(
  "weatherData/fetchWeatherData",
  async (params: ICoordinates): Promise<IWeatherData[]> => {
    try {
      const { data } = await axios.get<IDataDays>(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${params.lat},${params.lng}?key=D52NUFUDL7963TWL6VX3X2BQJ`
      );

      return data.days;
    } catch (error) {
      console.log(`Failed to fetch: ${onmessage}`);
      return [];
    }
  }
);

const initialState: CounterState = {
  days: [],
  loading: "idle",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(
      fetchWeatherData.fulfilled,
      (state, action: PayloadAction<IWeatherData[]>) => {
        state.days = action.payload;
      }
    );
    builder.addCase(fetchWeatherData.rejected, (state) => {
      state.loading = "rejected";
    });
  },
});

export default weatherSlice.reducer;
