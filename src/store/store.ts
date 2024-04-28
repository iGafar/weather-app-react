import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./slices/weatherSlice";
import dataSlice from "./slices/dataSlice";
import geoSlice from "./slices/geoSlice";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    data: dataSlice,
    geo: geoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
