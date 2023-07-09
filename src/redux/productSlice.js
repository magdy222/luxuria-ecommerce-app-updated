import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


export const fetchData = createAsyncThunk("productSlice/fetchData", async ()=>{
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    localStorage.setItem("products" , JSON.stringify(data))
    return  data;
  
})
    // 
const productSlice = createSlice({
    name:"productSlice",
    initialState:{
        products:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.fulfilled ,(state, action)=>{
            state.products = action.payload
        })
        builder.addCase(fetchData.rejected, (state , action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const {} = productSlice.actions;

export default productSlice.reducer;