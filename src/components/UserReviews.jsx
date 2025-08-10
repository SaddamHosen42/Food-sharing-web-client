import React from "react";
import { motion } from "motion/react";//eslint-disable-line
import { number } from "../randomNumber/RandomNumber";

const testimonials = [
  {
    name: "Amina Rahman",
    role: "Nutritionist, Dhaka",
    image: `https://randomuser.me/api/portraits/women/${ number}.jpg`,
    feedback:
      "FoodBridge is a blessing. It helps food reach those who truly need it. I love being part of this mission!",
  },
  {
    name: "Tanvir Hasan",
    role: "Volunteer, Rangpur",
    image: `https://randomuser.me/api/portraits/men/${ number}.jpg`,
    feedback:
      "Being able to donate surplus food easily has made me more aware of food waste. Great initiative!",
  },
  {
    name: "Sadia Alam",
    role: "Student, Chittagong",
    image: `https://randomuser.me/api/portraits/women/${ number+1}.jpg`,
    feedback:
      "I received help when I needed it most. Thanks to FoodBridge for making food accessible with dignity.",
  },
];

const UserReviews = () => {
  return (
    <section className="py-12 max-w-[90%] mx-auto">
      <div className="text-center mb-12">
        <motion.h2 
          className="text-3xl font-bold uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          What <span className="text-primary-custom">Users Say</span>
        </motion.h2>
        <motion.p 
          className="mt-2 max-w-xl mx-auto text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Real stories from our contributors and receivers. Your feedback fuels
          our mission.
        </motion.p>
        <motion.div 
          className="w-24 h-1 bg-primary-custom mx-auto mt-2"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 container mx-auto">
        {testimonials.map((user, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{
              y: -12,
              scale: 1.03,
              rotateY: 5,
              transition: { 
                duration: 0.3,
                ease: "easeOut"
              }
            }}
            whileTap={{
              scale: 0.98,
              transition: { duration: 0.1 }
            }}
            viewport={{ once: true }}
            className="relative flex flex-col items-start p-6 bg-secondary-custom text-left rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-secondary-custom/30 transition-all duration-300 cursor-pointer overflow-hidden group transform-gpu"
            style={{
              perspective: "1000px"
            }}
          >
            {/* Animated background overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-custom/10 via-transparent to-accent-custom/10 opacity-0"
              whileHover={{
                opacity: 1,
                transition: { duration: 0.3 }
              }}
            />
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%]"
              whileHover={{
                translateX: "200%",
                transition: {
                  duration: 0.8,
                  ease: "easeInOut"
                }
              }}
            />

            {/* Enhanced user info section */}
            <motion.div 
              className="flex items-center mb-4 relative z-10"
              initial="hidden"
              whileHover="hover"
              variants={{
                hidden: { opacity: 1 },
                hover: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.div
                className="relative mr-4"
                variants={{
                  hover: {
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }
                }}
              >
                <motion.img
                  src={user.image}
                  alt={user.name}
                  className="w-12 h-12 rounded-full ring-2 ring-primary-custom/30 shadow-lg"
                  whileHover={{
                    ring: "4px solid rgba(41, 231, 35, 0.6)",
                    transition: { duration: 0.2 }
                  }}
                />
                
                {/* Floating glow around avatar */}
                <motion.div
                  className="absolute -inset-1 bg-primary-custom/30 rounded-full blur-sm opacity-0"
                  whileHover={{
                    opacity: 1,
                    scale: 1.2,
                    transition: { duration: 0.3 }
                  }}
                />
                
                {/* Pulsing ring effect */}
                <motion.div
                  className="absolute -inset-2 border-2 border-primary-custom/40 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              <motion.div
                variants={{
                  hover: {
                    x: 5,
                    transition: { duration: 0.2 }
                  }
                }}
              >
                <motion.h3 
                  className="text-lg font-semibold"
                  variants={{
                    hover: {
                      color: "#29e723",
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }
                  }}
                >
                  {user.name}
                </motion.h3>
                <motion.p 
                  className="text-sm text-primary-custom"
                  variants={{
                    hover: {
                      scale: 1.02,
                      fontWeight: "600",
                      transition: { duration: 0.2 }
                    }
                  }}
                >
                  {user.role}
                </motion.p>
              </motion.div>
            </motion.div>
            
            {/* Enhanced feedback text */}
            <motion.div
              className="relative z-10"
              whileHover={{
                y: -2,
                transition: { duration: 0.2 }
              }}
            >
              <p className="text-sm leading-relaxed">
                "{user.feedback}"
              </p>
            </motion.div>
            
            {/* Quote decoration */}
            <motion.div
              className="absolute top-4 right-4 text-6xl text-primary-custom/20 font-serif leading-none pointer-events-none"
              whileHover={{
                scale: 1.1,
                opacity: 0.4,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              "
            </motion.div>
            
            {/* Corner accent */}
            <motion.div
              className="absolute bottom-0 left-0 w-0 h-0 border-l-[25px] border-l-primary-custom/20 border-b-[25px] border-b-transparent"
              whileHover={{
                borderLeftColor: "rgba(41, 231, 35, 0.5)",
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UserReviews;
