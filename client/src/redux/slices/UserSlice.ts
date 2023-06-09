import { createSlice } from "@reduxjs/toolkit";

type User = {
    email: string
    name: string
    id: string | null
}

// STATE TS VALUES
interface UserState {
    value: User;
}

// INITIAL STATE
const InitialState = { value: { email: '', name: '', id: null} } as UserState

// CREATE SLICE
export const UserSlice = createSlice({
    name: 'user',
    initialState: InitialState,
    reducers: {
        signIn: (state, action) => {
            state.value = action.payload
        },
        signOut: (state) => {
            state.value = InitialState.value
        }
    }
})

export const { signIn, signOut } = UserSlice.actions