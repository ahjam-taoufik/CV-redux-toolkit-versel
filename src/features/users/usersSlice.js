import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Ahjam Taoufik' },
    { id: '1', name: 'Ahmed' },
    { id: '2', name: 'Mohammed ' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer