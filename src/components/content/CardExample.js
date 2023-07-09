import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart} from '../../redux/cartSlice'
import {Link} from 'react-router-dom'

const CardExample = ({product}) => {

  const dispatch = useDispatch()

  return (
   
    <div class="relative w-72 h-96" key={product.id}>
      <img src={product.image} alt="product" className="w-full h-full object-fit"/>
      <div style={{background:'rgba(0 0 0/50%)'}} className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
        <h2 className="text-white text-l font-bold mb-4 text-center w-1/3 h-1/3">{product.title.slice(0, 40)}</h2>
        <p className="text-white text-l mb-2">{product.category}</p>
        <p className="text-white text-xl font-bold">{product.price}$</p>
        <div className='flex justify-between gap-5'>
          <button className=' transition ease-in-out delay-150 bg-blue-500
              hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 text-white
              duration-300 p-2 mt-5 ' onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
           <Link to={`/product/${product.id}`}>
              <button className=' transition ease-in-out delay-150 bg-blue-500
              hover:-translate-y-1 hover:scale-110 hover:bg-pink-500  text-white
              duration-300 p-2 mt-5' >See Details...</button>
            </Link>
          </div>
      </div>
    </div>

  )
}

export default CardExample