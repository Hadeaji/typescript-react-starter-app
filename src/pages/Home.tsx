import React from 'react';
import Header from '../components/HomeHeader';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
        <Header />
        <h1>Welcome to the Home Page!</h1>
        <Footer />
    </>
  );
};

export default Home;
