import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    formErrors: {},
    carForUpdate: {}
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data;
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

const deleteCarById = createAsyncThunk(
    'carSlice/deleteCarById',
    async ({id}) => {
        const {data} = await carService.deleteById(id);
        console.log('deleted');
        return data;
    }
);

const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id, car}) =>{
        await carService.updateById(id, car);
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        create: (state, action) => {
            state.cars.push(action.payload.car)
        },
        addCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                console.log('loading');
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
            .addCase(deleteCarById.fulfilled, (state, action) => {
                state.carForUpdate = {};
            })
            .addCase(updateCar.fulfilled, (state, action) => {
                state.carForUpdate = {};
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

const {reducer: carReducer, actions: {create, addCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    addCar,
    create,
    deleteCarById,
    addCarForUpdate,
    updateCar
}

export {
    carReducer,
    carActions

}
