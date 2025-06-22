import React, { use } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

const MyFoodList = ({ myFoodPromise }) => {
  const foods = use(myFoodPromise);
  return (
    <table className="table table-zebra w-full border border-gray-300">
      <thead className="bg-amber-200 text-amber-600">
        <tr>
          <th>#</th>
          <th>Food Name</th>
          <th>Food Status</th>
          <th>Expire Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {foods.map((req, index) => (
          <tr key={req._id}>
            <th>{index + 1}</th>
            <td>{req.name}</td>
            <td>{req.status}</td>
            <td>{req.expiredDate}</td>
            <td className="flex items-center gap-2">
              <button className="btn btn-sm bg-amber-200 text-black">Update</button>
             <button className="btn btn-sm bg-red-500 text-white"> <RiDeleteBin5Fill /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyFoodList;
