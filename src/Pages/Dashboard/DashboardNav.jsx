import React from 'react'
import { Link } from 'react-router-dom';
import { logo } from '../../assets';

const DashboardNav = () => {
  return (
    <div className="w-full bg-slate-100 dark:bg-slate-700">
      <div className="flex justify-between items-center py-5 px-12">
        {/* <Logo /> */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="" className="w-9 h-9 object-contain" />
          <p className="text-black text-[18px] font-bold cursor-pointer flex">
            <span className="lg:block hidden">Dashboard</span>
          </p>
        </Link>
        <div className="flex items-center gap-4">
          <div>
            <h3 className="text-sm font-semibold">Dashboard</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardNav