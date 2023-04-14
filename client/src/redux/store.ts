import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FilteredCategorySlice } from "./FilteredCategoryslices";
import { UserSlice } from "./UserSlice";

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from "redux-thunk";

// PERSIST CONFIG
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

// COMBINE REDUCERS
const rootReducer = combineReducers({
    category: FilteredCategorySlice.reducer,
    user: UserSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>

// PERSISTED REDUCER
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export default store