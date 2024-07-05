// reducer.jsx

import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { name: 'Wake up at 6 AM', id: 1 },
    { name: 'Do Home Work', id: 2 },
    { name: 'Sleep at 9 PM', id: 3 },
];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const id = state.length > 0 ? state[state.length - 1].id + 1 : 1;
            const { name } = action.payload;
            state.push({ id, name });
        },
        updateUser: (state, action) => {
            const { id, name } = action.payload;
            const user = state.find(user => user.id === id);
            if (user) {
                user.name = name;
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            return state.filter(user => user.id !== id);
        },
    },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
