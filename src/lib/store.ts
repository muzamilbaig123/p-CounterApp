import { configureStore } from '@reduxjs/toolkit';
import myCounterReducer from "@/lib/slices/counter";

export const makeStore = () => {
  return configureStore({
    reducer: {
      countApp: myCounterReducer

    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']