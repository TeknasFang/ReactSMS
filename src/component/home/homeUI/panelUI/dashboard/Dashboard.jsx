import React from 'react'
import { useParams } from 'react-router-dom'
import AdminDashboard from './AdminDashboard'
const Dashboard = () => {
  const params = useParams()
  const role = params.role
  return (
    <div>
    {role=="admin"&&<AdminDashboard/>}</div>
  )
}

export default Dashboard