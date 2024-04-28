import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ICoordinates, IParams } from "../../types";

export interface GeoState {
  geo: ICoordinates;
  loading: "pending" | "fulfilled" | "rejected";
}

export const fetchCityToGeo = createAsyncThunk<ICoordinates, IParams>(
  "cityToGeo/fetchCityToGeo",
  async (params) => {
    const options = {
      headers: {
        "X-RapidAPI-Key": "0b2b22c7e2mshbb1afb579501133p1bec3bjsn2f3a3192ef04",
        "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.get(
        `https://trueway-geocoding.p.rapidapi.com/Geocode?language=en&address=${params.city}`,
        options
      );
      console.log(response.data.results[0].location);

      return response.data.results[0].location;
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
  loading: "pending",
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
        state.geo = action.payload;
      }
    );
    builder.addCase(fetchCityToGeo.rejected, (state) => {
      state.loading = "rejected";
    });
  },
});

export default geoSlice.reducer;
