import React from "react"

const NavBar: React.FC = () => {
  return (
    <nav className="bg-1d3557 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8 " />
        <p className="text-f1faee font-bold text-lg">Placement Cell</p>
        <input
          type="text"
          placeholder="Search..."
          className="bg-f1faee text-1d3557 placeholder-1d3557 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-e63946 focus:ring-opacity-50 transition-colors w-96 ml-4"
        />
      </div>
      <div className="flex items-center space-x-4">
        <a href="/profile" className="text-f1faee hover:text-a8dadc">
          Profile
        </a>
        <a href="/jobs" className="text-f1faee hover:text-a8dadc">
          Jobs
        </a>
        <a href="/applications" className="text-f1faee hover:text-a8dadc">
          Applications
        </a>
        <a href="/" className="text-f1faee hover:text-a8dadc">
          Dashboard
        </a>
        <div className="relative">
          <button className="text-f1faee hover:text-a8dadc">
            <i className="fa-regular fa-bell"></i>
          </button>
          <span className="absolute -top-1 -right-2 bg-e63946 text-f1faee text-xs rounded-full h-4 w-4 flex items-center justify-center">
            1
          </span>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
