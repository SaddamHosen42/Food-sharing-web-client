import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";

const Slider2 = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 8, ease: "easeInOut" }}
      />
      
      {/* Dynamic Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-teal-800/60 to-green-700/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Food Icons */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, -50, -10],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['🍎', '🥖', '🥗', '🍲', '🥪'][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            {/* Subtitle */}
            <motion.div
              className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-teal-300 text-lg font-medium">Bridge the Plate</span>
              <motion.div
                className="w-3 h-3 bg-teal-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              <span className="block">Bridge the</span>
              <span className="block bg-gradient-to-r from-teal-400 via-emerald-500 to-green-400 bg-clip-text text-transparent">
                Gap
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Your extra food can transform into hope—join our network to reduce waste and ensure everyone at the table is fed.
            </motion.p>

            {/* Action Cards */}
            <motion.div
              className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                {
                  icon: "🍽️",
                  title: "Share Food",
                  desc: "List your surplus meals",
                  color: "from-teal-500 to-emerald-500"
                },
                {
                  icon: "❤️",
                  title: "Feed Communities",
                  desc: "Connect with those in need",
                  color: "from-green-500 to-teal-500"
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-r ${card.color} bg-opacity-20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-3">{card.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-gray-300">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link to="/add-food">
                <motion.button
                  className="group relative overflow-hidden bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:from-teal-700 hover:to-emerald-700 hover:shadow-2xl hover:shadow-teal-500/25"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Add Food Now
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </Link>
            </motion.div>

            {/* Progress Indicators */}
            <motion.div
              className="flex justify-center gap-12 mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { label: "Tons Saved", value: "50+" },
                { label: "Families Fed", value: "2K+" },
                { label: "Communities", value: "25+" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 border border-teal-400/30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full backdrop-blur-sm"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
};

export default Slider2;
