import {createSlice} from '@reduxjs/toolkit'


const searchSlice = createSlice({
    name:"searchSlice",
    initialState:{
        query:'',
    },
    reducers:{
        searchByName:(state, action)=>{
            state.query = action.payload
        }
    }
})

export const {searchByName} = searchSlice.actions;
export default searchSlice.reducer;