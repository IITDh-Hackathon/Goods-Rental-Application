import React from 'react'
import FunctionalityCard from './FunctionalityCard'
import '../../css/FunctionalityCss.css'

const Functionalities = () => {
  return (
    <div>
      <h1 className='title'>Functionalites</h1>
      <div className="Functionality">
        <FunctionalityCard feature="Add City" />
        <FunctionalityCard feature="Add Goods" />
      </div>
    </div>
  )
}

export default Functionalities