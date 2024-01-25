import { configureStore } from "@reduxjs/toolkit";

import Slice from "./features/Slice";

const store = configureStore({
  reducer: {
    slice: Slice,
  },
});

export default store;
