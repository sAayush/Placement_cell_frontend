import React, { useState } from "react"
import "../styles/custom.css"

const Auth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false)

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-slate-800 to-cyan-900 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <form className="space-y-4">
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Name"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Password"
            />
          </div>
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Confirm Password"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded mt-4 hover:bg-indigo-600 transition duration-300">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <div className="text-center my-4">OR</div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="social-btn facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-btn google">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="social-btn linkedin">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="mt-4 text-center">
          <p>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <span onClick={toggleAuthMode} className="text-indigo-500 cursor-pointer">
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Auth
