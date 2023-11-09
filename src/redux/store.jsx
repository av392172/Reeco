//configureStore will help us set up our store
import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./orderSlice";

//we are exporting the store by default
//if you want, you can also assign it to a variable and then export it
export default configureStore({
  reducer: {
    // the "user" key will be used to identify the slice we are dealing with
    //in case of multiple slices, we can create different keys for different reducers(of those relevant slices)
    order: orderReducer,
  },
});
