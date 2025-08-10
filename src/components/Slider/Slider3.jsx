import React from "react";
import { motion } from "motion/react"; //eslint-disable-line

const Slider3 = () => {
  return (
    <div className="relative h-screen overflow-hidden">{/* Reverted to h-screen but content will have proper calc height */}
      {/* Background Image with Zoom Effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1469307580733-007134b82100?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />
      
      {/* Warm Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-green-900/80 via-lime-800/60 to-emerald-700/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
      />
      
      {/* Animated Hearts */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl text-green-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, -80, -30],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            💚
          </motion.div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center h-[calc(100vh-4rem)] pt-16">{/* Added pt-16 for navbar space */}
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">{/* Reduced from max-w-5xl to max-w-4xl */}
            {/* Community Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-lime-500/20 backdrop-blur-sm border border-lime-400/30 rounded-full px-4 py-2 mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                className="text-xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🤝
              </motion.span>
              <span className="text-lime-300 text-base font-medium">Building Stronger Communities</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight "
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.5 }}
            >
              <span className="block">Feeding Communities</span>
              <span className="block bg-gradient-to-r from-lime-400 via-green-500 to-emerald-400 bg-clip-text text-transparent pb-3">
                Together
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              At FoodBridge, we connect excess meals from generous donors with families and individuals facing hunger, creating a more sustainable and caring world.
            </motion.p>

            {/* Feature Grid */}
            <motion.div
              className="grid md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                {
                  icon: "🌍",
                  title: "Global Impact",
                  desc: "Worldwide community network",
                  color: "from-emerald-500/20 to-teal-500/20"
                },
                {
                  icon: "🍽️",
                  title: "Zero Waste",
                  desc: "Reduce food wastage together",
                  color: "from-lime-500/20 to-green-500/20"
                },
                {
                  icon: "💚",
                  title: "Care & Share",
                  desc: "Spread love through food",
                  color: "from-green-500/20 to-emerald-500/20"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${feature.color} backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center`}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)" 
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                >
                  <motion.div 
                    className="text-4xl mb-3"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.button
                className="group relative overflow-hidden bg-gradient-to-r from-lime-600 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:from-lime-700 hover:to-green-700 hover:shadow-2xl hover:shadow-lime-500/25"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Join Our Community
                  <motion.span
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🚀
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-lime-400/30"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
              </motion.button>
            </motion.div>

            {/* Impact Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              {[
                { icon: "🌟", value: "500K+", label: "Lives Touched" },
                { icon: "🏆", value: "95%", label: "Success Rate" },
                { icon: "🌱", value: "200T", label: "CO2 Saved" },
                { icon: "💝", value: "50K+", label: "Acts of Kindness" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center min-w-[100px]"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="text-xl mb-1"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-xl md:text-2xl font-bold text-lime-400">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Circles */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 border-2 border-lime-400/30 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-r from-green-500/20 to-lime-500/20 rounded-full backdrop-blur-sm"
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.5, 0.8, 0.5] 
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
};

export default Slider3;
