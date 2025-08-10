import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import { motion } from "motion/react"; //eslint-disable-line

const MyFoodList = ({ foods, handelDelete }) => {
  if (!foods || foods.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center py-16"
      >
        <div className="text-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-12 rounded-3xl border-2 border-dashed border-gray-300 dark:border-gray-600 max-w-md">
          <div className="text-6xl mb-6">🍽️</div>
          <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">
            No Foods Added Yet
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
            Start making a difference by sharing your surplus food with the community
          </p>
          <Link
            to="/add-food"
            className="btn bg-primary-custom hover:bg-primary-custom text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <GoArrowLeft size={20} className="mr-2" /> 
            Add Your First Food
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 dark:from-gray-800/80 dark:via-gray-700/80 dark:to-gray-600/80 rounded-xl overflow-hidden shadow-lg border border-blue-200/50 dark:border-gray-600/50">
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Modern Table Header */}
          <thead className="bg-gradient-to-r from-primary-custom/30 to-secondary-custom/30 backdrop-blur-sm">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                🍽️ Food Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                📊 Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                📅 Expire Date
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                ⚡ Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white/60 dark:bg-gray-900/60 divide-y divide-gray-200/50 dark:divide-gray-700/50">
            {foods.map((req, index) => (
              <motion.tr 
                key={req._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="hover:bg-gradient-to-r hover:from-primary-custom/10 hover:to-secondary-custom/10 transition-all duration-300"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-custom to-secondary-custom rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {req.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                    req.status === 'available' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
                  }`}>
                    {req.status === 'available' ? '✅ Available' : '🔶 Requested'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-gray-700 dark:text-gray-300 font-medium">
                    {req.expiredDate}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Link
                      to={`update-food/${req._id}`}
                      className="btn btn-sm bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-none rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      ✏️ Update
                    </Link>
                    <button
                      onClick={() => handelDelete(req._id)}
                      id={`delete-btn-${req._id}`}
                      className="btn btn-sm bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-none rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <Tooltip
                        anchorSelect={`#delete-btn-${req._id}`}
                        content="Delete food item"
                        place="top"
                      />
                      <RiDeleteBin5Fill className="text-lg" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFoodList;
