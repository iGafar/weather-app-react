import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./slices/weatherSlice";
import modeSlice from "./slices/modeSlice";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    mode: modeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
