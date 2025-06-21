import React, { use } from 'react';

const FoodRequestList = ({foodRequestPromise}) => {
    const requestFoods=use(foodRequestPromise);
    if (!requestFoods || requestFoods.length === 0) {
        return <p className="text-center text-gray-500">No food requests found.</p>;
    }
    return (
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
    );
};

export default FoodRequestList;