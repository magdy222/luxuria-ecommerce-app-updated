import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clear, decreaseQuantity, increaseQuantity, removeFromCart, setCart } from '../../redux/cartSlice';
import {AiOutlineShoppingCart} from 'react-icons/ai'


function CartPage() {
    
    const cart = useSelector(state => state.cart) 

    console.log(cart, "cart console")


    const dispatch = useDispatch()

    useEffect(()=>{
        const cartItem = JSON.parse(localStorage.getItem("cartItem"))
        if(cartItem){
          dispatch( setCart(cartItem))
        }
        
    },[])


    const totalPrice = cart && cart?.reduce((acc,product)=>{
        acc += product.price * product.quantity
        return acc
    },0)


    return (
        <div className='container mx-auto my-10 min-h-screen'>
          <h2 className='text-3xl font-bold mb-10 lg:mb-5 flex justify-center items-center gap-3'>Shopping Cart 
          <AiOutlineShoppingCart  style={{ fontSize: '32px' }}/></h2>
          <div className='grid grid-cols-4 gap-4 '>
            <div className='col-span-3 '>
             {cart?.map((product)=>(
                <div className='flex flex-col md:flex-row items-center justify-between px-2 border-b-2 pt-2 pb-2'>
                <div className='flex items-center '>
                  <img src={product.image} alt='Product' className='mr-4 w-24 h-24' />
                  <div className='flex justify-center items-center px-2'>
                    <h3 className='w-32 h-36 flex flex-wrap '>{product.title}</h3>
                  </div>
                </div>
                <div className='flex items-center justify-center text-center px-10'>
                  <button className='px-2 py-1 bg-gray-200 rounded-full mr-2'
                  onClick={()=> dispatch(decreaseQuantity(product))}>-</button>
                  <span className='px-2'>{product.quantity}</span>
                  <button className='px-2 py-1 bg-gray-200 rounded-full ml-2' 
                  onClick={()=> dispatch(increaseQuantity(product))}>+</button>
                </div>
                <div className='text-center px-2'>
                  <p className='font-bold'>{(product.price * product.quantity)}$</p>
                  <button className='text-red-500 hover:text-red-700 text-center' 
                  onClick={()=> dispatch(removeFromCart(product))}>Remove</button>
                </div>
              </div>

              ))}
            </div>
            <div className='col-span-1 ml-[-30px] sm:ml-0'>
              <div className='bg-gray-100 p-3 w-[100px] sm:w-[180px]'>
                <h2 className='font-bold text-l lg:xl mb-2'>Summary</h2>
                <div className='flex justify-between mb-2'>
                  <p className='sm:text-lg'>Total:  </p>
                   <span className='px-2'>{+totalPrice}$ </span> 
                </div>
                <div className='flex flex-col justify-between items-center flex-nowrap'>
                  <button className='bg-red-500 hover:bg-red-700 text-white lg:font-bold py-2 px-5 rounded-full block text-center mt-5'
                  onClick={()=> dispatch(clear())}>
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };


export default CartPage;