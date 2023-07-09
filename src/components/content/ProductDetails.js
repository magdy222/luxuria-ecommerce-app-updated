import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../redux/cartSlice';

function ProductDetails() {

    const params = useParams()
    const api_url = "https://fakestoreapi.com/products"
    const [product, setProduct] = useState({})
    const dispatch = useDispatch()
    useEffect(() => {
          fetch(`${api_url}/${params.productId}`)
        .then(res => res.json())
        .then(product => setProduct(product))
    }, [])
    
  return (
    <div className="bg-white flex flex-col justify-center items-center pt-10 md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center ">
        <img
          className="h-1/2 w-1/2 object-cover "
          src={product.image}
          alt="pImage"
        />
      </div>
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-between p-5">
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-4">
                {product.description}
          </p>
          <p className="text-gray-700 mb-4">Price :${product.price}</p>
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2">Product Features</h2>
            <ul className="list-disc list-inside">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Sed do eiusmod tempor incididunt</li>
              <li>Ut labore et dolore magna aliqua</li>
            </ul>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700
         text-white font-bold py-3 px-6 rounded-lg shadow-md" onClick={()=> dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;