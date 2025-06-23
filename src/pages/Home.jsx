import React from 'react';
import Banner from '../components/Banner';
import FeaturedFoods from '../components/FeaturedFoods';

const Home = () => {
    return (
        <div className=''>
           <header>
            <Banner></Banner>
           </header>
           <main>
            <section className='container mx-auto w-[90%] mt-30 min-h-[calc(100vh-450px)]'>
                <FeaturedFoods></FeaturedFoods>
            </section>
           </main>
        </div>
    );
};
 
export default Home;