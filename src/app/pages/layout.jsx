import Navbar from "@/app/pages/home/page";
import Sidebar from "@/app/pages/sidebar/page";
import Dashboard from "./dashboard/page";
import React from 'react'

function layout({children}) {
  return <>
  
  <div className="flex ">
      <Sidebar className=""/>
      <div className="flex-1 ">
        <Navbar />
        { 
             children ? <main>{children}</main> : <Dashboard/>
        }
      </div>
    </div>
  
  
  </>
}

export default layout