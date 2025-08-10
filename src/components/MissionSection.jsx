import React from "react";
import {
  FaBook,
  FaFaucet,
  FaHeartbeat,
  FaHome,
  FaTshirt,
} from "react-icons/fa";
import { motion } from "motion/react";//eslint-disable-line
import { FaBowlFood } from "react-icons/fa6";

const missions = [
  {
    title: "Charity For Food",
    icon: <FaBowlFood size={30} />,
    description:
      "We provide nutritious meals to those struggling with hunger and food insecurity in underserved communities.",
  },
  {
    title: "Charity For Cloth",
    icon: <FaTshirt size={30} />,
    description:
      "We collect and distribute clothing to those in need, helping them stay warm, clean, and dignified.",
  },
  {
    title: "Charity For Education",
    icon: <FaBook size={30} />,
    description:
      "We support underprivileged children and adults in accessing quality education and learning resources.",
  },
  {
    title: "Charity For Health",
    icon: <FaHeartbeat size={30} />,
    description:
      "We promote health awareness and offer basic medical assistance to vulnerable individuals and families.",
  },
  {
    title: "Charity For Shelter",
    icon: <FaHome size={30} />,
    description:
      "We provide temporary and permanent shelter support for the homeless and disaster-affected individuals.",
  },
  {
    title: "Charity For Clean Water",
    icon: <FaFaucet size={30} />,
    description:
      "We ensure access to clean and safe drinking water for communities facing water scarcity.",
  },
];

const MissionSection = () => {
  return (
    <section className="py-12 ">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", type: "spring" }}
          viewport={{ once: true }}
          className="text-3xl font-bold uppercase"
        >
          Our Upcoming <span className="text-primary-custom">Mission</span>
        </motion.h2>
        <p className="mt-2 max-w-xl mx-auto">
          Together, we can bring positive change. Your small contribution can
          make a big difference in someone's life. Join us in spreading hope and
          compassion.
        </p>
        <div className="w-24 h-1 bg-primary-custom mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 max-w-[90%] mx-auto">
        {missions.map((item, index) => (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              y: -15,
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(41, 231, 35, 0.3)",
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
            key={index}
            className="relative shadow-xl text-center p-6 bg-base-200 transition-all duration-300 rounded-2xl overflow-hidden group cursor-pointer"
          >
            {/* Animated background gradient overlay */}
            <motion.div
              className="absolute inset-0  opacity-0"
              whileHover={{
                opacity: 1,
                transition: { duration: 0.3 }
              }}
            />
            
            {/* Shimmer effect on hover */}
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

            {/* Enhanced Icon with hover effects */}
            <motion.div 
              className="flex justify-center mb-6 pt-4"
              whileHover={{
                y: -4,
                scale: 1.15,
                rotate: 10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="bg-primary-custom p-4 rounded-xl shadow-lg relative overflow-hidden w-16 h-16 flex items-center justify-center"
                whileHover={{
                  background: "linear-gradient(135deg, #29e723, #1fdc18)",
                  boxShadow: "0 15px 30px rgba(41, 231, 35, 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Icon glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary-custom to-accent-custom opacity-0 rounded-xl"
                  whileHover={{
                    opacity: 0.3,
                    transition: { duration: 0.3 }
                  }}
                />
                
                <motion.span 
                  className="text-white relative z-10 block"
                  whileHover={{
                    scale: 1.1,
                    filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))",
                    transition: { duration: 0.2 }
                  }}
                >
                  {item.icon}
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Content with staggered hover animations */}
            <motion.div 
              className="relative z-10"
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
              <motion.h3 
                className="text-lg font-semibold mb-2 text-primary-custom"
                variants={{
                  hover: {
                    scale: 1.05,
                    color: "#1fdc18",
                    textShadow: "0 0 20px rgba(41, 231, 35, 0.5)",
                    transition: { duration: 0.2 }
                  }
                }}
              >
                {item.title}
              </motion.h3>
              
              <motion.p 
                className="text-sm leading-relaxed"
                variants={{
                  hover: {
                    y: -3,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }
                }}
              >
                {item.description}
              </motion.p>
            </motion.div>
            
            {/* Floating particles effect on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              whileHover="hover"
              variants={{
                hover: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary-custom/40 rounded-full"
                  style={{
                    left: `${15 + i * 20}%`,
                    top: `${25 + i * 15}%`
                  }}
                  variants={{
                    hover: {
                      y: [-5, -20, -5],
                      opacity: [0, 1, 0],
                      scale: [0, 1.2, 0],
                      rotate: [0, 180, 360],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.15
                      }
                    }
                  }}
                />
              ))}
            </motion.div>
            
            {/* Corner decoration with animation */}
            <motion.div
              className="absolute bottom-0 right-0 w-0 h-0 border-r-[30px] border-r-transparent border-b-[30px] "
              whileHover={{
                borderBottomColor: "rgba(41, 231, 35, 0.6)",
                scale: 1.2,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            />
            
            {/* Pulse ring effect */}
            <motion.div
              className="absolute inset-0  rounded-2xl"
              whileHover={{
                borderColor: "rgba(41, 231, 35, 0.4)",
                scale: [1, 1.02, 1],
                transition: {
                  borderColor: { duration: 0.3 },
                  scale: { duration: 1, repeat: Infinity }
                }
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MissionSection;
