import React, { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import StatCard from './StatCard'
import '../../css/StatsCss.css'
import ApiContext from '../../context/api/ApiContext';


const Stats = () => {
  // run an api call to get the stats from the database
  const [stats, setStats] = useState({userCount: 0, productCount: 0,cityCount: 0 })
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
  },[getStats])

  return (
    <div className='Stats'>
      <StatCard icon='users' title='Users' number={stats.userCount} />
      <StatCard icon='suitcase' title='Goods' number={stats.productCount} />
      <StatCard icon='city' title='Cities' number={stats.cityCount} />
    </div>
  )
}

export default Stats