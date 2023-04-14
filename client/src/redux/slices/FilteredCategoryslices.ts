import { createSlice } from "@reduxjs/toolkit";

// STATE TS VALUES
interface CategoryState {
    value: string;
}

// INITIAL STATE
const InitialState = { value: 'ALL' } as CategoryState

// CREATE SLICE
export const FilteredCategorySlice = createSlice({
    name: 'category',
    initialState: InitialState,
    reducers: {
        getCategory: (state, action) => {
            state.value = action.payload
        },
        defaultCategory: (state) => {
            state.value = InitialState.value
        }
    }
})

export const { getCategory, defaultCategory } = FilteredCategorySlice.actions