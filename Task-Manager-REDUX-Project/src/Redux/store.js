import { configureStore } from "@reduxjs/toolkit";
import Task_Reducer from './feature.js'

const store = configureStore({
    reducer : {
        Alltask : Task_Reducer
    }
});

export default store;