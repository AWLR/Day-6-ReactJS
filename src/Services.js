import React from 'react'

function Products() {
  return (
    <div className='products'>
        <h1 style={{color:'blue',}}>This is our products build with latest chipset</h1>
        <img src="m3.jpeg" style={{width:"100%",margin:"10px auto",height:"800px"}}/>
        <h1>Iphone 14 RM 3899</h1>
        <img src="ip14.jpeg" style={{width:"50%",margin:"10px auto",height:"500px"}}/>
        <h1>Iphone 15 RM 4899</h1>
        <img src="ip15.jpeg" style={{width:"50%",margin:"10px auto",height:"500px"}}/>
        <h1>Macbook Pro M3 RM 7899</h1>
        <img src="macbook pro m3.jpeg" style={{width:"50%",margin:"10px auto",height:"500px"}}/>
    </div>
  )
}

export default Products