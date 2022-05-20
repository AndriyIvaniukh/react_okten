import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";
import {Car} from "../../components";

const initialState = {
    cars: [],
    status: null,
    formErrors: {}
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);

const addCar = createAsyncThunk(
    'carSlice/addCar',
    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            dispatch(create({car: data}));
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }

    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        create: (state, action) => {
            state.cars.push(action.payload.car)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.cars = action.payload;
            })
            .addCase(addCar.fulfilled, (state, action) => {

            })
            .addCase(addCar.rejected, (state, action) => {
                const {status, formErrors} = action.payload;
                        state.status = status;
                        state.formErrors = formErrors;
            })
    }

    // extraReducers: {
    //     [getAll.pending]: (state, action) => {
    //         state.status = 'pending';
    //     },
    //     [getAll.fulfilled]: (state, action) => {
    //         state.status = 'fulfilled';
    //         state.cars = action.payload;
    //         state.status = null;
    //     },
    //     [getAll.rejected]: (state, action) => {
    //         state.status = 'rejected';
    //     },
    //     [addCar.fulfilled]: (state, action) =>{
    //         console.log('add')
    //     },
    //     [addCar.rejected]: (state, action) => {
    //         const {status, formErrors} = action.payload;
    //         state.status = status;
    //         state.formErrors = formErrors;
    //     }
    // }

});

const {reducer: carReducer, actions: {create}} = carSlice;

const carActions = {
    getAll,
    addCar,
    create
}

export {
    carReducer,
    carActions

}
