
import React, { Suspense, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import FoodRequestList from "../components/FoodRequestList";
import Loading from "../components/Loading";
import useFoodRequestApi from "../api/useFoodRequestApi";

import { MdOutlineRequestPage } from "react-icons/md";


const FoodRequest = () => {
  const { user } = useAuth();
  useEffect(() => {
    document.title = "My Food Requests - FoodBridge";
  }, []);
  const {foodRequestPromise} = useFoodRequestApi();
  return (
    <section className="min-h-[calc(100vh-120px)] flex items-center justify-center  py-8 px-2">
      <div className="container w-full max-w-[90%] mx-auto">
        <div className="rounded-2xl ">
          <div className="flex items-center gap-4 px-6 pt-8 pb-4 border-b border-blue-50">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow">
              <MdOutlineRequestPage className="text-2xl" />
            </span>
            <div >
              <h2 className="text-2xl font-bold text-blue-700 mb-1">My Food Requests</h2>
              <p className="text-gray-500 text-sm">All your food requests in one place.</p>
            </div>
          </div>
          <div className="overflow-x-auto p-6">
            <div className="rounded-xl shadow-lg">
              <Suspense fallback={<Loading />}> 
                <FoodRequestList foodRequestPromise={foodRequestPromise(user.email)} />
              </Suspense>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6 shadow text-center">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Thank you for supporting the community! 🙏</h3>
            <p className="text-gray-700 mb-4">Your food requests help reduce waste and ensure food reaches those who need it most. Stay updated on your requests and keep making a difference!</p>
            <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center">
              <div className="bg-white rounded-lg shadow p-4 flex-1">
                <h4 className="font-semibold text-blue-600 mb-1">Tip 1</h4>
                <p className="text-gray-600 text-sm">Check your request status regularly to know when your food is ready for pickup.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 flex-1">
                <h4 className="font-semibold text-purple-600 mb-1">Tip 2</h4>
                <p className="text-gray-600 text-sm">Contact the donor if you have any questions about the pickup location or timing.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 flex-1">
                <h4 className="font-semibold text-amber-600 mb-1">Tip 3</h4>
                <p className="text-gray-600 text-sm">Be on time for pickups to ensure food quality and respect the donor’s effort.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FoodRequest;
