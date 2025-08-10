
import React from 'react';
import { MdSpaceDashboard, MdOutlineAddBox } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router";


const DashboardHome = () => {
    return (
        <section className="min-h-[calc(100vh-120px)] flex items-center justify-center  py-8 px-2">
            <div className="container max-w-[90%] mx-auto">
                <div className="rounded-2xl shadow-2xl bg-base-100">
                    <div className="flex items-center gap-4 px-6 pt-8 pb-4 border-b border-blue-50">
                        <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow">
                            <MdSpaceDashboard className="text-3xl" />
                        </span>
                        <div>
                            <h1 className="text-3xl font-extrabold text-blue-700 mb-1">Welcome to Your Dashboard</h1>
                            <p className="text-gray-500 text-base">Manage your food donations, requests, and more—all in one place.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                        <div className="bg-blue-50 rounded-xl p-6 shadow text-center flex flex-col items-center">
                            <MdOutlineAddBox className="text-4xl text-blue-600 mb-2" />
                            <h2 className="text-xl font-bold text-blue-700 mb-1">Add Food</h2>
                            <p className="text-gray-600 mb-3">Share surplus food with the community and help reduce waste.</p>
                            <Link to="/dashboard/add-food" className="btn btn-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold mt-auto">Add Food</Link>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-6 shadow text-center flex flex-col items-center">
                            <IoFastFoodOutline className="text-4xl text-purple-600 mb-2" />
                            <h2 className="text-xl font-bold text-purple-700 mb-1">My Foods</h2>
                            <p className="text-gray-600 mb-3">View and manage all your food donations and their status.</p>
                            <Link to="/dashboard/my-foods" className="btn btn-sm bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold mt-auto">My Foods</Link>
                        </div>
                    </div>
                    {/* Motivational Message */}
                    <div className="px-8 pb-8">
                        <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6 shadow text-center mb-8">
                            <h3 className="text-xl font-bold text-blue-700 mb-2">Thank you for being a FoodBridge hero! 🌟</h3>
                            <p className="text-gray-700">Your contributions help reduce food waste and support those in need. Every donation and request makes a difference in our community.</p>
                        </div>
                        {/* Quick Stats (static for now) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <div className="bg-white rounded-xl p-4 text-center shadow border border-blue-50">
                                <div className="text-2xl font-bold text-blue-700">12</div>
                                <div className="text-gray-600 text-sm">Foods Donated</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 text-center shadow border border-blue-50">
                                <div className="text-2xl font-bold text-purple-700">8</div>
                                <div className="text-gray-600 text-sm">Requests Made</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 text-center shadow border border-blue-50">
                                <div className="text-2xl font-bold text-amber-600">5</div>
                                <div className="text-gray-600 text-sm">People Helped</div>
                            </div>
                        </div>
                        {/* Tips Section */}
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <div className="bg-white rounded-lg shadow p-4 flex-1">
                                <h4 className="font-semibold text-blue-600 mb-1">Tip 1</h4>
                                <p className="text-gray-600 text-sm">Check your dashboard regularly to stay updated on your donations and requests.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow p-4 flex-1">
                                <h4 className="font-semibold text-purple-600 mb-1">Tip 2</h4>
                                <p className="text-gray-600 text-sm">Be prompt with pickups and communication for a smooth experience.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow p-4 flex-1">
                                <h4 className="font-semibold text-amber-600 mb-1">Tip 3</h4>
                                <p className="text-gray-600 text-sm">Encourage friends and family to join FoodBridge and make a bigger impact!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardHome;