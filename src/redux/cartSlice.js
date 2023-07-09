import {createSlice} from '@reduxjs/toolkit'
import {toast} from "react-toastify"



export const cartSlice = createSlice({
    name:"cartSlice",
    initialState: JSON.parse(localStorage.getItem("cartItem")) || [],
    reducers:{

        addToCart:(state ,action)=>{
            const findedProduct = state?.find((product)=> product.id === action.payload.id);
            console.log(findedProduct)

            if(findedProduct){
                findedProduct.quantity ++
                
                localStorage.setItem("cartItem", JSON.stringify(state))

                toast.info(`The quantity of ${action.payload.title} increased` , {
                    position: "bottom-center"
                })

            }else{
                const productClone = {...action.payload, quantity:1}
                state.push(productClone)

                localStorage.setItem("cartItem", JSON.stringify(state))

                toast.success(`${action.payload.title} item added to the cart ` , {
                    position: "top-center"
                })
            }
        },
        increaseQuantity:(state, action)=>{
            const findedProduct = state.find((product)=> product.id === action.payload.id);
            if(findedProduct){
                findedProduct.quantity++;
                
                localStorage.setItem("cartItem", JSON.stringify(state))
            }
        },
        decreaseQuantity:(state, action)=>{
            const findedProduct = state.find((product)=> product.id === action.payload.id);
            console.log(findedProduct)
            if(findedProduct){
                if(findedProduct.quantity > 1){
                    findedProduct.quantity--;

                    /*if(findedProduct.quantity = 1){
                        return findedProduct
                    }*/

                localStorage.setItem("cartItem", JSON.stringify(state))
                
                }else{
                    return state.filter((product) => product.id !== action.payload.id);
                }
                
            }
        },
        removeFromCart:(state,action)=>{
           return state.filter((product)=> product.id !== action.payload.id)
        },
        clear:(state, action)=>{
            return [];
        },
        showDetails:(state,action)=>{
           return action.payload
        },
        setCart:(state, action)=>{
           return state = action.payload
        }
        
    }
})


export const {addToCart, removeFromCart, clear, 
    increaseQuantity, decreaseQuantity,showDetails, setCart} = cartSlice.actions;

export default cartSlice.reducer


