import {configureStore} from "@reduxjs/toolkit"
import { alertReducer } from "./alertSlice";
import { themeReducer } from "./themeSlice"

const store = configureStore({
    reducer: {theme: themeReducer, alert: alertReducer}
})

export default store;