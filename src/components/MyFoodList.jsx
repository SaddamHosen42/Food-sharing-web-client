import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";

const MyFoodList = ({ foods, handelDelete }) => {
  if (!foods || foods.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center ">
        <p className="text-center text-gray-500 mb-5">
          You have not added any food yet. Please add the foods.
        </p>
        <Link
          to="/add-food"
          className="btn bg-primary-custom hover:bg-primary-custom text-black"
        >
          <GoArrowLeft size={20} /> Add Food
        </Link>
      </div>
    );
  }
  return (
    <table className="table table-zebra w-full border border-gray-300">
      <thead className="bg-secondary-custom/20 text-primary-custom">
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
              <Link
                to={`/update-food/${req._id}`}
                className="btn btn-sm bg-secondary-custom/20 text-black hover:bg-secondary-custom/30"
              >
                Update
              </Link>
              <button
                onClick={() => handelDelete(req._id)}
                id="delete-btn"
                className="btn btn-sm bg-red-500 text-black"
              >
                <Tooltip
                  anchorSelect="#delete-btn"
                  content="Delete food"
                ></Tooltip>
                <RiDeleteBin5Fill />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyFoodList;
