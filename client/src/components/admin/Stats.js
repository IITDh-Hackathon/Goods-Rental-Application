import React, { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import StatCard from './StatCard'
import '../../css/StatsCss.css'
import ApiContext from '../../context/api/ApiContext';


const Stats = () => {
  // run an api call to get the stats from the database
  const [stats, setStats] = useState({users: 0,goods: 0,cities: 0 })
  const {getStats} = useContext(ApiContext)
  useEffect(() => {
    getStats().then((res) => {
      const [response, error] = res || [null, true];
      if (error) {
        toast.error(response.response.data.message);
      }
      else {
        setStats(response.data);
      }
    })
  },)

  return (
    <div className='Stats'>
      <StatCard icon='users' title='Users' number='2500' />
      <StatCard icon='suitcase' title='Goods' number='10000' />
      <StatCard icon='city' title='Cities' number='300' />
    </div>
  )
}

export default Stats