import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import ProductsSlice from "./products/ProductSlice";
import ThemeSlice from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    products: ProductsSlice,
    theme: ThemeSlice,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

const rootReducer = combineReducers({
  products: ProductsSlice,
  theme: ThemeSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
