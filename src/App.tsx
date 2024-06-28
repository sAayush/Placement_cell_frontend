import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Application, Dashboard, Jobs, Login, OrgApplicant } from "./pages"

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Apply" element={<Application />} />
          <Route path="/OrgApplicant" element={<OrgApplicant />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
