import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICoordinates } from "../../types";
import axios from "axios";

export interface IData {
  mode: boolean;
  city: string;
  loading: "pending" | "fulfilled" | "rejected";
}

export const fetchGeoToCity = createAsyncThunk<string, ICoordinates>(
  "eoToCity/fetchGeoToCity",
  async (params: ICoordinates) => {
    const options = {
      headers: {
        "X-RapidAPI-Key": "0b2b22c7e2mshbb1afb579501133p1bec3bjsn2f3a3192ef04",
        "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.get(
        `https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?language=en&location=${params.lat},${params.lng}`,
        options
      );
      console.log(response.data.results[0].locality);

      return response.data.results[0].locality;
    } catch (error) {
      console.error(error);
    }
  }
);

const initialState: IData = {
  mode: false,
  city: "Moscow",
  loading: "pending",
};

export const dataSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.mode = !state.mode;
    },
    changeCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
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
  },
});

export const { changeMode, changeCity } = dataSlice.actions;
export default dataSlice.reducer;
