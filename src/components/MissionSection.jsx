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
    <section className="py-12">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 max-w-6xl mx-auto">
        {missions.map((item, index) => (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            key={index}
            className="relative border border-secondary-custom/30 text-center p-6  bg-base-200 transition-transform duration-300 hover:-translate-y-3
"
          >
            {/* Icon on top center */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary-custom p-3 rounded">
                <span className="text-white">{item.icon}</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold  mb-2 text-primary-custom">
                {item.title}
              </h3>
              <p className=" text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MissionSection;
