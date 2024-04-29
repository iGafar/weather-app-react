import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICoordinates, ITime } from "../../types";
import axios from "axios";

export interface IData {
  mode: boolean;
  city: string;
  loading: "idle" | "pending" | "fulfilled" | "rejected";
  time: ITime | null;
}

export const fetchGeoToCity = createAsyncThunk<string, ICoordinates>(
  "geoToCity/fetchGeoToCity",
  async (params: ICoordinates) => {
    const options = {
      headers: {
        "X-RapidAPI-Key": "5eab756ae1msh44181e14f4c8381p17da48jsnc1784cf948d2",
        "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.get(
        `https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?language=en&location=${params.lat},${params.lng}`,
        options
      );

      return response.data.results[0].locality ?? response.data.results[0].area;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchTime = createAsyncThunk<ITime, ICoordinates>(
  "time/fetchTime",
  async (params) => {
    const options = {
      method: "GET",
      url: "",

      headers: {
        "X-RapidAPI-Key": "0b2b22c7e2mshbb1afb579501133p1bec3bjsn2f3a3192ef04",
        "X-RapidAPI-Host": "time-api4.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.get(
        `https://time-api4.p.rapidapi.com/api/Time/current/coordinate?latitude=${params.lat}&longitude=${params.lng}`,
        options
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const initialState: IData = {
  mode: false,
  city: "Moscow",
  loading: "idle",
  time: null,
};

export const dataSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.mode = !state.mode;
    },
  },
  extraReducers: (builder) => {
    // fetchGeoToCity
    builder.addCase(fetchGeoToCity.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(
      fetchGeoToCity.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.city = action.payload;
      }
    );
    builder.addCase(fetchGeoToCity.rejected, (state) => {
      state.loading = "rejected";
    });

    // fetchTime
    builder.addCase(fetchTime.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(
      fetchTime.fulfilled,
      (state, action: PayloadAction<ITime>) => {
        state.time = action.payload;
      }
    );
    builder.addCase(fetchTime.rejected, (state) => {
      state.loading = "rejected";
    });
  },
});

export const { changeMode } = dataSlice.actions;
export default dataSlice.reducer;
