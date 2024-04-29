import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ICoordinates } from "../../types";

export interface GeoState {
  geo: ICoordinates;
  loading: "idle" | "pending" | "fulfilled" | "rejected";
}

export const fetchCityToGeo = createAsyncThunk<ICoordinates, string>(
  "cityToGeo/fetchCityToGeo",
  async (city: string) => {
    const options = {
      headers: {
        "X-RapidAPI-Key": "5eab756ae1msh44181e14f4c8381p17da48jsnc1784cf948d2",
        "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
      },
    };

    try {
      const { data } = await axios.get(
        `https://trueway-geocoding.p.rapidapi.com/Geocode?language=en&address=${city}`,
        options
      );

      return data?.results[0]?.location;
    } catch (error) {
      console.error(error);
    }
  }
);

export interface IGeoToCity {
  geoToCity: string;
}

const initialState: GeoState = {
  geo: {
    lat: 55.755841,
    lng: 37.617286,
  },
  loading: "idle",
};

export const geoSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCityToGeo.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(
      fetchCityToGeo.fulfilled,
      (state, action: PayloadAction<ICoordinates>) => {
        if (action.payload) {
          state.geo = action.payload;
        } else {
          alert("Incorrect city name.");
        }
      }
    );
    builder.addCase(fetchCityToGeo.rejected, (state) => {
      state.loading = "rejected";
    });
  },
});

export default geoSlice.reducer;
