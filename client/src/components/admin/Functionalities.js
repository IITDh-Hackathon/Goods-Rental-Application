import React from 'react'
import FunctionalityCard from './FunctionalityCard'
import '../../css/FunctionalityCss.css'

const Functionalities = () => {
  return (
    <div>
      <h1 className='title'>Functionalites</h1>
      <div className="Functionality">
        <FunctionalityCard feature="Add Item To City" />
        <FunctionalityCard feature="Add New Goods" />
      </div>
    </div>
  )
}

export default Functionalities