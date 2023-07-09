import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardExample from './CardExample';
import { fetchData } from '../../redux/productSlice';
import { useTranslation } from 'react-i18next';

const CardGroup = () => {
   const {t} = useTranslation()
  const products = useSelector((state) => state.products.products);
  console.log(products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  

  return (
    <div>
      <h2 className='py-10 text-center text-3xl uppercase '>{t("flire")}</h2>
      <div className=' flex justify-center items-start flex-wrap gap-7'>
        {products.map((product) => (
          <CardExample key={product.id} product={product} >{product.name}</CardExample>
        ))}
      </div>
    </div>
  );
};

export default CardGroup;