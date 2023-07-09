import React, { useEffect, useState } from 'react';
import CarouselExample from '../components/navs/CarouselExample';
import CardGroup from './content/CardGroup';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const currentUser = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if currentUser is undefined
    if (currentUser === undefined) {
      return;
    }

    // Navigate based on authentication state
    if (!currentUser) {
      navigate('/register');
    } else {
      navigate('/');
    }

    // Set loading to false
    setLoading(false);
  }, [currentUser, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CarouselExample />
      <CardGroup />
    </div>
  );
};

export default HomePage;