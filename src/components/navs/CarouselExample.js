import { useState, useEffect } from 'react';
import one from '../../assets/one.webp'
import photo from '../../assets/photo.jpeg'
import two from '../../assets/two.webp'
//import { useTranslation } from 'react-i18next';


function ImageSlider() {
  //const {t} = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 3);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const slides = [
    {
      image: one,
      title: 'Summer Sale',
      description: 'Experience the joy of shopping, delivered to your doorstep! Get 30% off',
      button: 'Shop Now'
    },
    {
      image: photo,
      title: 'Winter Collection',
      description: 'Stay warm and stylish this winter with our new collection. Free shipping on all orders',
      button: 'Shop Now'
    },
    {
      image: two,
      title: 'New Arrivals',
      description: 'Get the latest styles and trends for your wardrobe. Limited time offer: 15% off your first purchase',
      button: 'Shop Now'
    }
  ];

  return (
    <div className='relative w-full h-96'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex justify-center items-center slider-item ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={`Slide ${index + 1}`} className='w-full h-full object-cover' />
          <div className='absolute inset-0 flex flex-col justify-center items-center bg-gray-900 opacity-50'>
            <h2 className='text-white text-4xl font-bold mb-4'>{slide.title}</h2>
            <p className='text-white text-lg'>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageSlider;