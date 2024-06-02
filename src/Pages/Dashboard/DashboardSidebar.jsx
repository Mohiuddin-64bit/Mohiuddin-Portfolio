import React from 'react'
import { Link } from 'react-router-dom'

const DashboardSidebar = () => {
  return (
    <div className="h-screen bg-slate-100 dark:bg-slate-700 ">
    <section className="text-center pt-32">
      <Link to="../dashboard">
        <h4 className="hover:bg-slate-200 dark:hover:bg-slate-800 transition-all py-3">
          Home
        </h4>
      </Link>
      <Link to="../dashboard/add-blogs">
        <h4 className="hover:bg-slate-200 dark:hover:bg-slate-800 transition-all py-3">
          Add blogs
        </h4>
      </Link>
      <Link to="../dashboard/add-projects">
        <h4 className="hover:bg-slate-200 dark:hover:bg-slate-800 transition-all py-3">
          Add Projects
        </h4>
      </Link>
      <Link to="/">
        <h4 className="hover:bg-slate-200 dark:hover:bg-slate-800 transition-all py-3">
          Back to Home
        </h4>
      </Link>
    </section>
  </div>
  )
}

export default DashboardSidebar