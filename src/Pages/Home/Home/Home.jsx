import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Services from '../Services/Services';
import FAQ from '../FAQ/FAQ';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <Brands></Brands>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;