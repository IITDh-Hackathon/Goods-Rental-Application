import React from 'react'
import GoodsCard from './GoodsCard'
import '../css/GoodsCss.css'

const Goods = (props) => {
    const {category} = props;
  return (
    <>
    <div>
        <h1>{category}</h1>
    </div>
    <div className='wrapper' >
        <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"  />
        <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"  />
        <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"  />
        <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"  />
        <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"  />
        <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"  />
        <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"  />
    </div>
    </>
  )
}

export default Goods