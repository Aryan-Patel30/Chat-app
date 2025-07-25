import React from 'react'
import "../CustomCss/Login.css";

function Login() {
  return (
    <div>
          <div className="login-container flex justify-center items-center min-h-screen">
      <div className="login-box-border">
        <form className="login-box flex flex-col gap-4 min-w-96 p-6">
          <h1 className="login-title text-2xl font-bold text-center text-white">
            Patel Chat<span className="text-green-500">App</span>
          </h1>
          <h2 className="login-title text-xl text-center text-white/80 mb-2">
            Login
          </h2>
          <div className="login-content">
            {/*email */}
            <div>
              <label className="input validator ">
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
                <input type="email" placeholder="mail@gmail.com" required />
              </label>
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
                />
              </label>
            </div>

            {/*Text and submit button */}
            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="loginsubmit-btn py-2 px-4 rounded-lg text-white font-semibold hover:shadow-lg transition-all"
              >
                Login 
              </button>
               <p className="text-center text-white/70">
                New User?{" "}
                <a href="/signup" className="text-blue-400 hover:underline">
                  Signup
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login
