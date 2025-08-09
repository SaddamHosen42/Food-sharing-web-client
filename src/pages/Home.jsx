import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import FeaturedFoods from '../components/FeaturedFoods';
import MissionSection from '../components/MissionSection';
import UserReviews from '../components/UserReviews';

const Home = () => {
    useEffect(() => {
        document.title = "Home - FoodBridge";
    }, []);
    return (
        <div className=''>
           <header>
            <Banner></Banner>
           </header>
           <main>
            <section className='container mx-auto mt-30 '>
                <FeaturedFoods></FeaturedFoods>
            </section>
            <section className='container mx-auto mt-30 mb-10'>
                <MissionSection></MissionSection>
            </section>
            <section className='bg-base-200 mt-30 mb-10'>
                <UserReviews></UserReviews>
            </section>
           </main>
        </div>
    );
};
 
export default Home;