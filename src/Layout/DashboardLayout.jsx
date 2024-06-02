import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNav from '../Pages/Dashboard/DashboardNav'
import DashboardSidebar from '../Pages/Dashboard/DashboardSidebar'

const DashboardLayout = () => {
  return (
    <div className="flex flex-col h-screen">
    <div className="w-full">
      <DashboardNav />
    </div>
    <div className="flex flex-1 overflow-hidden">
      <div className="w-24 sm:w-32 md:w-40 lg:w-56 h-full overflow-hidden">
        <DashboardSidebar />
      </div>
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  </div>
  )
}

export default DashboardLayout