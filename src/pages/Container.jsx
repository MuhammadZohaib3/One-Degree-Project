import React from 'react';
import Nav from '../components/Nav';
import FrontBox from '../components/FrontBox';
import CardBox from '../components/CardBox';
import SwipeToSlide from '../components/SwipeToSlide';
import OnedegreCard from '../components/OnedegreCard';
import ReelsSection from '../components/ReelsSection';
import OneDegreCard2 from '../components/OneDegreeCard2';
import OneDegreeCustomer from '../components/OneDegreeCustomer';
import SubscribeCard from '../components/SubscribeCard';
import Footer from '../components/Footer';


 function Container() {
  return (
    <div className='bg-black'>
      <Nav />
      <FrontBox />
      <CardBox />
      <SwipeToSlide />
      <OnedegreCard />
      <ReelsSection />
      <OneDegreCard2 />
      <OneDegreeCustomer />
      <SubscribeCard />
      <Footer />
    
    </div>
  )
}
export default Container;
