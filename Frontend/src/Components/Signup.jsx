import React from "react";
import "../CustomCss/Signup.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const password = watch("password", "");
  // Watch the password field to validate confirm password
  const validatePasswordMatch = (value) => {
    return value === password || "Passwords do not match";
    }
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    await axios.post("http://localhost:3000/user/signup", userInfo)
    .then((response) => {
      if (response.data){
      alert("Signup successfully, please login now");
      }
      localStorage.setItem("ChatApp", JSON.stringify(response.data));
    })
    .catch((error) => {
    if (error.response) {
      alert("Error: " + error.response.data.message);
    }
    });
  
  };
  return (
    <div className="signup-container flex justify-center items-center min-h-screen">
      <div className="signup-box-border">
        <form onSubmit={handleSubmit(onSubmit)} className="signup-box flex flex-col gap-4 min-w-96 p-6">
          <h1 className="signup-title text-2xl font-bold text-center text-white">
            Patel Chat<span className="text-green-500">App</span>
          </h1>
          <h2 className="signup-title text-xl text-center text-white/80 mb-2">
            Sign Up
          </h2>
          <div className="signup-content">
            {/*fullname */}
            <div>
              <label className="input validator">
                <svg
                  className="h-[1.1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="text"
                  required
                  placeholder="Fullname"
                  pattern="^[A-Za-z]+( [A-Za-z]+)*$"
                  minLength="3"
                  maxLength="30"
                  title="Must be 3 to 30 characters, containing only letters"
                  {...register("fullname")}
                />
              </label>
              <p className="validator-hint hidden">
                Must be 3 to 30 characters, containing only letters
              </p>
            </div>
            {/*email */}
            <div>
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@gmail.com" required 
                 {...register("email")}
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>

            {/*password */}
            <div>
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                    <circle
                      cx="16.5"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                  </g>
                </svg>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  minLength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                {...register("password")}
                />
              </label>
              <p className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />
                At least one number, At least one lowercase letter, At least one
                uppercase letter
              </p>
            </div>

            {/*confirm password */}
            <div>
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                    <circle
                      cx="16.5"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                  </g>
                </svg>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword",{required:true, validate: validatePasswordMatch})}
                />
              </label>
              {errors.confirmPassword && (
              <span className="text-red-500 text-sm font-semibold">
                {errors.confirmPassword.message || "Confirm Password must match the password"}
              </span>
              )}
            </div>

            {/*Text and submit button */}
            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="submit-btn py-2 px-4 rounded-lg text-white font-semibold hover:shadow-lg transition-all"
              >
                Sign Up
              </button>
              <p className="text-center text-white/70">
                Already have an account?{" "}
                <a href="/login" className="text-blue-400 hover:underline">
                  Login
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
