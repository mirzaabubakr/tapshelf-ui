import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../../Services/Constants/Products";

interface StateType {
  data: any[];
}

const initialState: StateType = {
  data: productsData,
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addNewProduct: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deleteProductById: (state, action) => {
      const productIdToDelete = action.payload;
      state.data = state.data.filter(
        (product) => product.productId !== productIdToDelete
      );
    },
  },
});

export const { addNewProduct, deleteProductById } = ProductsSlice.actions;
export default ProductsSlice.reducer;
