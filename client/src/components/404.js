import React from 'react'
import '../css/404Css.css'

export default function NotFound() {
    return (
        <>
        <section className="page_404">
	<div >
		<div className="row" style={{width:'100%'}} >	
		<div className="col-sm-12 " style={{width:'100%'}}>
		<div className="col-sm-10 col-sm-offset-1  text-center" style={{width:'100%'}} >
		<div className="four_zero_four_bg">
			<h1 className="text-center ">404</h1>
		
		
		</div>
		
		<div className="contant_box_404">
		<h3 className="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<a href="/login" className="link_404">Go to Home</a>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
            
        </>
    )
}