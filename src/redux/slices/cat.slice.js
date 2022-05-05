import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats:[]
}
const catSlice = createSlice({
    name:'catSlice',
    initialState,
    reducers:{
      add: (state, action) => {
          const {catName} = action.payload;
          const newCat = {id: new Date().getTime(), name: catName};
          state.cats.push(newCat);

      },
      deleteById: (state, action) => {
          const ellToDelete = state.cats.findIndex(value => value.id === action.payload.id);
          state.cats.splice(ellToDelete,1);
      }
    }
});

const {reducer: catReducer, actions: {add, deleteById}} = catSlice;

export default catReducer;

export const catActions ={
    add,
    deleteById
}
