import React from 'react'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';

import Stats from './Stats'
import Functionalities from './Functionalities'

import ApiContext from '../../context/api/ApiContext'
import { toast } from 'react-toastify';

const AdminHome = () => {
  const navigate = useNavigate();
  const context = React.useContext(ApiContext);
  const {profile, loginStatus} = context;
  if(!loginStatus || ( profile && profile.role !== "admin")){
    toast.error("You are not authorized to view this page")
    navigate("/");
  }
  if(!profile){
    return <CircularProgress/>
  }
  return (
    <>
      <div>
        <Stats />
        <Functionalities />
      </div>
    </>
  )
}

export default AdminHome