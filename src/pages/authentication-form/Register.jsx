import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import {Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import registerAnimation from "../../lottie-animation/Animation-register.json";
const Register = () => {
  useEffect(() => {
    document.title = "Register - FoodBridge";
  }, []);
  const { creatUser, setUser, logInWithGoogle, updateUser } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    //password validation
    const passRE = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passRE.test(password)) {
      setErrorMessage(
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter."
      );
      return;
    }
    //console.log({ email, password, name, photo });
    //create user in firebase
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate(location.state || "/");
               Swal.fire({
                icon: "success",
                title: "Your account is created.",
                showConfirmButton: false,
                timer: 1500,
              });
          })
          .catch((error) => {
            setErrorMessage(error.message);
            setUser(user);
          });
        form.reset();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    setErrorMessage("");
  };
  //google sign in
  const handleGoogleSignIn = () => {
    logInWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate(location.state || "/");
        Swal.fire({
          icon: "success",
          title: "Login successful!",
          text: `Welcome, ${user.displayName}!`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    setErrorMessage("");
  };
  return (
    <div className="flex justify-center  items-center  mb-10 mt-20 min-h-[calc(100vh-150px)]">
     <div className=" hidden md:block">
      <Lottie animationData={registerAnimation} loop={true}></Lottie>
     </div>
      <div className="card bg-base-100 w-sm md:w-[500px]  shrink-0 shadow-2xl mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center py-4">
          Create an <span className="text-amber-400"> Account</span>
        </h1>
        <div className="card-body px-8">
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
          <form onSubmit={handleSubmit} className="fieldset">
            {/* name */}
            <label className="label text-lg">Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              placeholder="Your Name"
            />
            {/* photo url */}
            <label className="label text-lg">Photo</label>
            <input
              type="text"
              className="input w-full"
              name="photo"
              placeholder="Photo URL"
            />
            {/* email */}
            <label className="label text-lg">Email</label>
            <input
              type="email"
              className="input w-full"
              name="email"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label text-lg">Password</label>
            <div className="relative">
              <input
                //type="password"
                type={showPassword ? "text" : "password"}
                className="input w-full"
                name="password"
                placeholder="Password"
                required
              />
              <button
                className="btn btn-xs absolute right-2 top-2 text-lg"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              type="submit"
              className="btn bg-amber-400 text-white hover:bg-amber-500 mt-4 text-lg"
            >
              Register
            </button>
            <div className="mt-4 text-center text-lg">
              <p>
                Allreday have an account?{" "}
                <span>
                  <Link to="/login" className="text-amber-400 ">
                    Login
                  </Link>
                </span>
              </p>
            </div>
            <div className="divider text-lg">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="btn border-amber-500 text-lg bg-amber-400 hover:bg-amber-500"
            >
              <svg
                aria-label="Google logo"
                width="25"
                height="25"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
