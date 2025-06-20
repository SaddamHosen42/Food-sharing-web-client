import React from 'react';
import { useLoaderData } from 'react-router';

const FoodRequest = () => {
    const requestFoods=useLoaderData().data;
    console.log(requestFoods);
    
    return (
     <div className="p-6 container mx-auto w-[90%] mt-25">
      <h2 className="text-2xl font-bold text-center mb-6 text-amber-600">My Food Requests</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full border border-gray-300">
          <thead className="bg-amber-200 text-amber-600">
            <tr>
              <th>#</th>
              <th>Donor Name</th>
              <th>Pickup Location</th>
              <th>Expire Date</th>
              <th>Request Date</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {
            requestFoods.map((req, index) => (
              <tr key={req._id}>
                <th>{index + 1}</th>
                <td>{req.donorName}</td>
                <td>{req.pickupLocation}</td>
                <td>{req.expiredDate}</td>
                <td>{new Date(req.requestDate).toLocaleString()}</td>
                <td className="whitespace-pre-line">{req.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default FoodRequest; 