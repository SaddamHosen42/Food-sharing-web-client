import React, { useEffect } from 'react';
import { motion } from 'motion/react'; //eslint-disable-line

const About = () => {
  useEffect(() => {
    document.title = "About Us - FoodBridge";
  }, []);

  // Mission and Vision Data
  const missionVisionData = [
    {
      id: 1,
      icon: "🎯",
      title: "Our Mission",
      description: "FoodBridge is a community-driven platform that connects food donors with those in need. We believe that no food should go to waste while people are hungry. Our mission is to create a sustainable ecosystem where surplus food finds its way to those who need it most."
    },
    {
      id: 2,
      icon: "✨",
      title: "Our Vision",
      description: "We envision a world where technology bridges the gap between abundance and need. Through FoodBridge, we're creating a future where communities thrive together, food waste becomes a thing of the past, and everyone has access to nutritious meals."
    }
  ];

  // How it works steps data
  const stepsData = [
    {
      id: 1,
      step: "1",
      title: "List Food",
      description: "Food donors list available surplus food with details"
    },
    {
      id: 2,
      step: "2",
      title: "Browse & Request",
      description: "Community members browse and request needed food items"
    },
    {
      id: 3,
      step: "3",
      title: "Connect",
      description: "Donors approve requests and coordinate pickup details"
    },
    {
      id: 4,
      step: "4",
      title: "Impact",
      description: "Together we reduce waste and strengthen our community"
    }
  ];

  // Statistics data
  const statisticsData = [
    {
      id: 1,
      number: "1,000+",
      title: "Meals Shared",
      description: "Food items successfully redistributed"
    },
    {
      id: 2,
      number: "500+",
      title: "Community Members",
      description: "Active users making a difference"
    },
    {
      id: 3,
      number: "50%",
      title: "Waste Reduction",
      description: "Average food waste decrease in our community"
    }
  ];

  // Additional info data
  const additionalInfoData = [
    {
      id: 1,
      icon: "🌱",
      title: "Environmental Impact",
      description: "Every meal shared through FoodBridge helps reduce food waste, which in turn decreases greenhouse gas emissions and conserves water and energy resources. Together, we're creating a more sustainable future for our planet."
    },
    {
      id: 2,
      icon: "❤️",
      title: "Community Building",
      description: "FoodBridge isn't just about food sharing—it's about building stronger, more connected communities. Every interaction fosters relationships, builds trust, and creates a network of neighbors helping neighbors."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-secondary/10 to-base-100">
      <div className="mx-auto px-4 py-16 w-[90%]">
        <div className="mx-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block p-3 bg-secondary/20 rounded-full mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-2xl">🍽️</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent py-4">
              About FoodBridge
            </h1>
            <p className="text-xl md:text-2xl text-base-content/70 leading-relaxed max-w-3xl mx-auto">
              Connecting communities through food sharing and reducing food waste. 
              Together, we're building a world where no meal goes to waste.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-8 rounded-full"></div>
          </motion.div>

          {/* Mission and Vision Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {missionVisionData.map((item) => (
              <div key={item.id} className="group bg-base-200 p-8 rounded-3xl shadow-lg border border-secondary-custom/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-custom to-secondary-custom rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">{item.icon}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-primary-custom">{item.title}</h2>
                </div>
                <p className="text-base-content/80 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* How It Works Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-secondary-custom/20 via-secondary-custom/30 to-secondary-custom/20 p-10 rounded-3xl mb-16 border border-secondary-custom/30"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-custom mb-4">How FoodBridge Works</h2>
              <p className="text-xl text-base-content/70">Simple steps to make a big difference</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {stepsData.map((step) => (
                <div key={step.id} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-custom to-secondary-custom rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-custom mb-2">{step.title}</h3>
                  <p className="text-base-content/70">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Statistics Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {statisticsData.map((stat) => (
              <div key={stat.id} className="text-center bg-base-200 p-8 rounded-3xl border border-secondary-custom/30 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-primary-custom mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-base-content mb-2">{stat.title}</div>
                <div className="text-base-content/70">{stat.description}</div>
              </div>
            ))}
          </motion.div>

          {/* Call to Action Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-secondary-custom/20 via-secondary-custom/30 to-secondary-custom/20 p-12 rounded-3xl text-center border border-secondary-custom/30 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-custom/5 to-secondary-custom/5 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="inline-block p-4 bg-secondary-custom/20 rounded-full mb-6">
                <span className="text-4xl">🤝</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">Join Our Community</h2>
              <p className="text-xl text-base-content/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you have food to share or are looking for meals, 
                FoodBridge welcomes everyone to be part of the solution. 
                Start making a difference in your community today!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn bg-primary-custom hover:bg-primary-custom text-black btn-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 px-8"
                >
                  <span className="mr-2">🍽️</span>
                  Start Sharing Food
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline border-primary-custom text-primary-custom hover:bg-primary-custom hover:text-black btn-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 px-8"
                >
                  <span className="mr-2">🔍</span>
                  Browse Available Food
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Additional Info Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            {additionalInfoData.map((info) => (
              <div key={info.id} className="bg-base-200 p-8 rounded-3xl border border-secondary-custom/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-custom to-secondary-custom rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">{info.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-custom">{info.title}</h3>
                </div>
                <p className="text-base-content/80 leading-relaxed">
                  {info.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
