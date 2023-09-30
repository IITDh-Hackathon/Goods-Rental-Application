import React from 'react'
import '../../css/FunctionalityCardCss.css'
import { useNavigate } from 'react-router-dom';

const FunctionalityCard = (props) => {
    const {feature} = props;
    const navigate = useNavigate();
    const handleOnClick = () => {
      if(feature==="Add Item To City"){
        navigate('/admin/addlisting');
      }
      else{
        navigate('/admin/addgoods');
      }
    }
  return (
    <div onClick={handleOnClick} >
        <div className="FunctionalityCard">
            <div className="FunctionalityCardTitle">
                {feature}
            </div>
        </div>
    </div>
  )
}

export default FunctionalityCard