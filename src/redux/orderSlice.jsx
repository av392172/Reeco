import { createSlice, current } from "@reduxjs/toolkit";
//import PayloadAction in case you're using Typescript

const initialState = {
  orders: [],
  selectedOrder: {},
};

export const orderSlice = createSlice({
  name: "orderInfo",
  initialState,
  reducers: {
    addOrders: (state, action) => {
      state.orders = [...action.payload];
    },
    updateStatus: (state, action) => {
      state.orders = state.orders.map((item) => {
        if (item.id === action.payload.id) {
          item.Status = action.payload.status;
          if (
            action.payload.status === "Missing" ||
            action.payload.status === "Missing - Urgent"
          ) {
            item.Quantity = 0;
            item.Total = 0;
          }
        }
        return item;
      });
    },

    updateSelectedOrder: (state, action) => {
      state.selectedOrder = { ...action.payload };
    },
  },
});

export const { updateStatus, addOrders, updateSelectedOrder } =
  orderSlice.actions;

export default orderSlice.reducer;
