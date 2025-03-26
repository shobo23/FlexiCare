import React from 'react'
import DashboardHeader from './DashboardHeader'
import SideBar from './SideBar'
import DashboardContent from './DashboardContent'

const UserDashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <SideBar />
      <DashboardContent />
    </div>
  )
}

export default UserDashboard