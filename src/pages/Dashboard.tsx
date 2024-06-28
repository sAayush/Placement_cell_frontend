import React from "react"
import { useState } from "react"
import { DndProvider, useDrag, useDrop } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import NavBar from "../components/NavBar" // Importing NavBar component

const ItemTypes = {
  MODULE: "module",
}

interface ModuleProps {
  id: number
  children: React.ReactNode
  moveModule: (draggedId: number, hoveredId: number) => void
}

const Module: React.FC<ModuleProps> = ({ id, children, moveModule }) => {
  const [, ref] = useDrag({
    type: ItemTypes.MODULE,
    item: { id },
  })

  const [, drop] = useDrop({
    accept: ItemTypes.MODULE,
    hover(item: { id: number }) {
      if (item.id !== id) {
        moveModule(item.id, id)
      }
    },
  })

  return (
    <div ref={node => ref(drop(node))} className="p-4 bg-white rounded-lg shadow-md mb-4">
      {children}
    </div>
  )
}

interface ModuleData {
  id: number
  content: React.ReactNode
}

const Dashboard: React.FC = () => {
  const [modules, setModules] = useState<ModuleData[]>([
    { id: 1, content: <ProfileStats /> },
    { id: 2, content: <ApplicationStats /> },
    { id: 3, content: <RecommendedJobs /> },
    { id: 4, content: <JobInterest /> },
    { id: 5, content: <Events /> },
    { id: 6, content: <Announcements /> },
    { id: 7, content: <AllJobs /> },
    { id: 8, content: <Resources /> },
  ])

  const moveModule = (draggedId: number, hoveredId: number) => {
    const draggedIndex = modules.findIndex(module => module.id === draggedId)
    const hoveredIndex = modules.findIndex(module => module.id === hoveredId)
    const newModules = [...modules]
    const [draggedModule] = newModules.splice(draggedIndex, 1)
    newModules.splice(hoveredIndex, 0, draggedModule)
    setModules(newModules)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <NavBar />
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {modules.map(module => (
            <Module key={module.id} id={module.id} moveModule={moveModule}>
              {module.content}
            </Module>
          ))}
        </div>
      </div>
    </DndProvider>
  )
}

const ProfileStats: React.FC = () => (
  <div className="p-4 bg-blue-100 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-2 text-blue-700">Profile Stats</h2>
    <p className="text-blue-600">Profile Visits: 120</p>
    <p className="text-blue-600">Applications Submitted: 15</p>
    <p className="text-blue-600">Acceptance Rate: 20%</p>
  </div>
)

const ApplicationStats: React.FC = () => (
  <div className="p-4 bg-green-100 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-2 text-green-700">Application Stats</h2>
    <p className="text-green-600">Applications Accepted: 5</p>
    <p className="text-green-600">Applications Rejected: 10</p>
    <p className="text-green-600">Pending Applications: 2</p>
  </div>
)

const RecommendedJobs: React.FC = () => (
  <div className="p-4 bg-purple-100 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-2 text-purple-700">Recommended Jobs</h2>
    <ul className="text-purple-600 ">
      <li>Software Engineer at ABC Corp</li>
      <li>Data Analyst at XYZ Ltd</li>
      <li>Product Manager at Tech Solutions</li>
    </ul>
  </div>
)

const JobInterest: React.FC = () => (
  <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-2 text-yellow-700">Jobs You Might Be Interested In</h2>
    <ul className="text-yellow-600">
      <li>Frontend Developer at Web Innovators</li>
      <li>Backend Developer at Cloud Networks</li>
      <li>AI Specialist at Future Tech</li>
    </ul>
  </div>
)

const Events: React.FC = () => (
  <div className="p-4 bg-red-100 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-2 text-red-700">Upcoming Events</h2>
    <ul className="text-red-600">
      <li>Tech Talk: AI in Healthcare - June 30</li>
      <li>Webinar: Career in Data Science - July 5</li>
      <li>Workshop: Resume Building - July 10</li>
    </ul>
  </div>
)

const Announcements: React.FC = () => (
  <div className="p-4 bg-teal-100 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-2 text-teal-700">Announcements</h2>
    <p className="text-teal-600">New internship opportunities available!</p>
    <p className="text-teal-600">Company ABC is visiting our campus next week.</p>
    <p className="text-teal-600">Submit your projects for the annual tech fest.</p>
  </div>
)

const AllJobs: React.FC = () => (
  <div className="p-4 bg-indigo-100 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-2 text-indigo-700">All Jobs</h2>
    <ul className="text-indigo-600">
      <li>Marketing Manager at BrandCorp</li>
      <li>UI/UX Designer at CreativeWorks</li>
      <li>Cloud Engineer at CloudNet</li>
      <li>DevOps Engineer at DevOps Solutions</li>
    </ul>
  </div>
)

const Resources: React.FC = () => (
  <div className="p-4 bg-pink-100 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-2 text-pink-700">Resources</h2>
    <ul className="text-pink-600">
      <li>
        <a href="#" className="text-pink-500 hover:underline">
          Resume Templates
        </a>
      </li>
      <li>
        <a href="#" className="text-pink-500 hover:underline">
          Interview Tips
        </a>
      </li>
      <li>
        <a href="#" className="text-pink-500 hover:underline">
          Career Guides
        </a>
      </li>
    </ul>
  </div>
)

export default Dashboard
