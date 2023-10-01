import React from 'react'
import { Navigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';

import Stats from './Stats'
import Functionalities from './Functionalities'

import ApiContext from '../../context/api/ApiContext'

const AdminHome = () => {
  const context = React.useContext(ApiContext);
  const {profile, loginStatus} = context;
  if(!loginStatus || ( profile && profile.role !== "admin")){
    return <Navigate to="/"/>
  }
  if(!profile){
    return <CircularProgress/>
  }
  return (
    <>
      <div>
        <p> Hey {profile && profile.role}</p>
        <Stats />
        <Functionalities />
      </div>
    </>
  )
}

export default AdminHome