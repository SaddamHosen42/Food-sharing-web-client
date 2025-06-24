import React from "react";

const testimonials = [
  {
    name: "Amina Rahman",
    role: "Nutritionist, Dhaka",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    feedback:
      "FoodBridge is a blessing. It helps food reach those who truly need it. I love being part of this mission!",
  },
  {
    name: "Tanvir Hasan",
    role: "Volunteer, Rangpur",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    feedback:
      "Being able to donate surplus food easily has made me more aware of food waste. Great initiative!",
  },
  {
    name: "Sadia Alam",
    role: "Student, Chittagong",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    feedback:
      "I received help when I needed it most. Thanks to FoodBridge for making food accessible with dignity.",
  },
];

const UserReviews = () => {
  return (
    <section className="py-12 bg-base-200">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold uppercase">
          What <span className="text-amber-500">Users Say</span>
        </h2>
        <p className="mt-2 max-w-xl mx-auto text-gray-600">
          Real stories from our contributors and receivers. Your feedback fuels
          our mission.
        </p>
        <div className="w-24 h-1 bg-amber-500 mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 max-w-6xl mx-auto">
        {testimonials.map((user, index) => (
          <div
            key={index}
            className="flex flex-col items-start border border-amber-300 p-6 bg-base-100 text-left"
          >
            <div className="flex items-center mb-4">
              <img
                src={user.image}
                alt={user.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">
                  {user.name}
                </h3>
                <p className="text-sm text-amber-500">{user.role}</p>
              </div>
            </div>
            <p className="text-sm">{user.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserReviews;
