import React from 'react'
import StatCard from './StatCard'
import '../../css/StatsCss.css'

const Stats = () => {
  return (
        // make 3 cards with a big icon in center and a title below it and a number below that
        <div className='Stats'>
            <StatCard icon='users' title='Users' number='2500' />
            <StatCard icon='suitcase' title='Goods' number='10000' />
            <StatCard icon='city' title='Cities' number='300' />
        </div>
  )
}

export default Stats