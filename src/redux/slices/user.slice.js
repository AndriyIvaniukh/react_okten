import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users:[]
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const {user} = action.payload;
            const newUser = {id: new Date().getTime(), name: user};
            state.users.push(newUser)
        },
        deleteById: (state, action) => {
            const {id} = action.payload;
            const deletedUser = state.users.findIndex(value => value.id === id);
            state.users.splice(deletedUser,1);
        }
    }
});


const {reducer: userReducer, actions:{add, deleteById}} = userSlice;

export default userReducer;

export const userActions = {
    add,
    deleteById
}