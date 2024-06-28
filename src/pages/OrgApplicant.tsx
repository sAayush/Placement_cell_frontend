import React, { useState } from "react"
import { createPortal } from "react-dom"

const Popup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
        <h2 className="text-2xl font-bold mb-4 text-1d3557">Welcome!</h2>
        <p className="text-lg mb-4 text-457b9d">
          Are you looking for a job or looking for employees?
        </p>
        <div className="flex justify-around">
          <button
            onClick={onClose}
            className="bg-e63946 text-white py-2 px-4 rounded-md hover:bg-1d3557 transition-colors">
            Looking for a Job
          </button>
          <button
            onClick={onClose}
            className="bg-a8dadc text-1d3557 py-2 px-4 rounded-md hover:bg-457b9d hover:text-white transition-colors">
            Looking for Employees
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}

const AuthPage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true)

  const closePopup = () => {
    setShowPopup(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-800 to-cyan-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-1d3557">Create Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Name"
            />
          </div>
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
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" className="w-full bg-e63946 text-white py-2 rounded mt-4">
            Sign Up
          </button>
        </form>
      </div>
      {showPopup && <Popup onClose={closePopup} />}
    </div>
  )
}

export default AuthPage
