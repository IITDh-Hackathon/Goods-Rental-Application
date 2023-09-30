import React from 'react'
import GoodsCard from '../GoodsCard'
import '../../css/AddListingToCityCss.css'

const AddListingToCity = () => {
  return (
    <div>
        <div className="not-added" >
            <h2 className='not-added-title' >Items That Are Not Added </h2>
            <div className='wrapper'>
            <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg" message='Add Item' />
            <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg" message='Add Item' />
            <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg" message='Add Item' />
            <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg" message='Add Item' />
            <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"  message='Add Item'/>
            <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg" message='Add Item' />
            <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"  message='Add Item'/>
            </div>
        </div>
        <div className="added">
            <h2 className='added-title'>Items That Are Added </h2>
            <div className='wrapper'>
            <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"  />
            <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"  />
            <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"  />
            <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"  />
            <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"  />
            <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"  />
            <GoodsCard name='Title' description='lorem sdlfjslkdjflskdf fsld flskdfslkfjlsdjflsdfk;sdfls;kdjfl;' price='300.0' quantity='40' category='furniture' image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"  />
            </div>
        </div>
    </div>
  )
}

export default AddListingToCity