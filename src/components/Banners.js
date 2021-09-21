import React from 'react'

function Banners() {
    return (
        <div id="bannersWrap">

           
           <div className="container">
            
        <div className=" row row-cols-1 row-cols-lg-3  row-cols-md-1 g-4 ">
  
          <div className="col">
          <div className="card">
           <img src="Images\burger banner.jpg" className="card-img" alt="..." />
           </div>
          </div>

          <div className="col">
          <div className="card">
           <img src="Images\pizaa banner.jpg" className="card-img" alt="..." />
           </div>
          </div>

          <div className="col">
          <div className="card">
           <img src="Images\platter banner.jpg" className="card-img" alt="..." />
           </div>
          </div>
          </div>

          </div>
          </div>
        
    )
}

export default Banners
