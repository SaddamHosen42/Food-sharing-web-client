import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import FeaturedFoods from '../components/FeaturedFoods';
import MissionSection from '../components/MissionSection';

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
            <section className='container mx-auto w-[90%] mt-30 min-h-[calc(100vh-450px)]'>
                <FeaturedFoods></FeaturedFoods>
            </section>
            <section className='container mx-auto w-[90%] mt-30 mb-10 min-h-[calc(100vh-450px)]'>
                <MissionSection></MissionSection>
            </section>
           </main>
        </div>
    );
};
 
export default Home;