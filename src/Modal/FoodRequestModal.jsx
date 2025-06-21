import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const FoodRequestModal = ({ food, user, closeModal }) => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const notes = form.notes.value;

    const requestData = {
      foodId: food._id,
      foodName: food.name,
      foodImage: food.image,
      donorName: food.donorName,
      donorEmail: food.donorEmail,
      requesterEmail: user.email,
      requestDate: new Date().toISOString(),
      pickupLocation: food.pickupLocation,
      expiredDate: food.expiredDate,
      notes,
    };

    try {
      const res1 = await axios.post(
        "http://localhost:5000/food-request",
        requestData
      );
      const res2 = await axios.patch(
        `http://localhost:5000/update-status/${food._id}`,
        {
          status: "unavailable",
        }
      );

      if (res1.data.insertedId && res2.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Food Request Submitted!",
          showConfirmButton: false,
          timer: 1500,
        });
        closeModal();
        navigate("/food-request");
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Failed to Submit Request",
        text: "Please try again later.",
      });
    }
  };

  return (
    <dialog
      id="foodRequestModal"
      className="modal modal-bottom sm:modal-middle"
      open
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Request This Food</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="input input-bordered w-full"
            defaultValue={food.name}
            readOnly
          />
          <input
            className="input input-bordered w-full"
            defaultValue={food.image}
            readOnly
          />
          <input
            className="input input-bordered w-full"
            defaultValue={food._id}
            readOnly
          />
          <input
            className="input input-bordered w-full"
            defaultValue={food.donorEmail}
            readOnly
          />
          <input
            className="input input-bordered w-full"
            defaultValue={food.donorName}
            readOnly
          />
          <input
            className="input input-bordered w-full"
            defaultValue={user.email}
            readOnly
          />
          <input
            className="input input-bordered w-full"
            defaultValue={format(new Date(), "PPpp")}
            readOnly
          />
          <input
            className="input input-bordered w-full"
            defaultValue={food.pickupLocation}
            readOnly
          />
          <input
            className="input input-bordered w-full"
            defaultValue={food.expiredDate}
            readOnly
          />

          <textarea
            name="notes"
            placeholder="Additional notes (optional)"
            className="textarea textarea-bordered w-full"
          ></textarea>

          <div className="modal-action">
            <button type="submit" className="btn btn-warning text-white">
              Submit Request
            </button>
            <button onClick={closeModal} type="button" className="btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default FoodRequestModal;
