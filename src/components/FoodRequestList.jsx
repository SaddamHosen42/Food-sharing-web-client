import React, { use } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router";

const FoodRequestList = ({ foodRequestPromise }) => {
  const requestFoods = use(foodRequestPromise);
  if (!requestFoods || requestFoods.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <p className="text-center text-gray-500 mb-5 text-lg">
          You have not requested any food yet. Please check the available foods.
        </p>
        <Link to="/available-foods" className="btn bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold">
         <GoArrowLeft size={20} className="mr-1"/> Go to Available Foods
        </Link>
      </div>
    );
  }
  // Extra content: summary, stats, tips
  const total = requestFoods.length;
  const upcoming = requestFoods.filter(r => new Date(r.expiredDate) > new Date()).length;
  const expired = total - upcoming;
  return (
    <div className="container mx-auto">
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 rounded-xl p-4 text-center shadow hover:shadow-lg">
          <div className="text-2xl font-bold text-blue-700">{total}</div>
          <div className="text-gray-600 text-sm">Total Requests</div>
        </div>
        <div className="bg-green-100 rounded-xl p-4 text-center shadow hover:shadow-lg">
          <div className="text-2xl font-bold text-green-700">{upcoming}</div>
          <div className="text-gray-600 text-sm">Upcoming</div>
        </div>
        <div className="bg-red-100 rounded-xl p-4 text-center shadow hover:shadow-lg">
          <div className="text-2xl font-bold text-red-600">{expired}</div>
          <div className="text-gray-600 text-sm">Expired</div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-xl overflow-hidden shadow table-auto border border-blue-100 bg-white">
          <thead className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">#</th>
              <th className="py-3 px-4 text-left font-semibold">Donor Name</th>
              <th className="py-3 px-4 text-left font-semibold">Pickup Location</th>
              <th className="py-3 px-4 text-left font-semibold">Expire Date</th>
              <th className="py-3 px-4 text-left font-semibold">Request Date</th>
              <th className="py-3 px-4 text-left font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {requestFoods.map((req, index) => (
              <tr key={req._id} className={index % 2 === 0 ? "bg-blue-50/30 hover:bg-blue-100/60" : "bg-purple-50/20 hover:bg-purple-100/40"}>
                <td className="py-2 px-4 font-semibold text-gray-700">{index + 1}</td>
                <td className="py-2 px-4 text-gray-700">{req.donorName}</td>
                <td className="py-2 px-4 text-gray-700">{req.pickupLocation}</td>
                <td className="py-2 px-4 text-gray-700">{req.expiredDate}</td>
                <td className="py-2 px-4 text-gray-700">{new Date(req.requestDate).toLocaleString()}</td>
                <td className="py-2 px-4 text-gray-600 whitespace-pre-line">{req.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodRequestList;
