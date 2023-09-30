import React from 'react'
import '../../css/StatsCardCss.css'

const StatCard = (props) => {
    const {icon, title, number} = props
    return (
        <div className='StatsCard'>
            <div>
                <i className={`fas fa-${icon} fa-5x StatIcon`}></i>
            </div>
            <div>
                <div className='StatNumber'>{number}</div>
                <div className='StatTitle'>{title}</div>
            </div>
        </div>
    )
}

export default StatCard