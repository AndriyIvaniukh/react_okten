import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    dog: []
};

const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers:{
        add: (state, action) => {

        },
        deleteById: (state, action) => {

        }
    }
});

const {reducer: catReducer, actions:{add,deleteById}} = dogSlice;

export default catReducer;

export const dogActions = {
    add,
    deleteById
}
