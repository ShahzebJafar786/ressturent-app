import React from 'react'
import { Link } from 'react-router-dom';





function Product(props) {
    return (
        <div>
            
            <div >
                    
                        <div class="card product-card ">
                            <div class="card-body">
                                <div class="card-img-actions"> <img src={props.product.image} class="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div class="card-body bg-light text-center">
                                <div class="mb-2">
                                    <h6 class="font-weight-semibold mb-2"> <Link to={'/product/'+ props.product.id} class="text-default mb-2" data-abc="true"><h3>{props.product.title}</h3></Link> </h6> 
                                    {/* <p class="text-muted" data-abc="true">{props.product.description}</p> */}
                                </div>
                                <h4 class="mb-0 font-weight-semibold">{"RS. " + props.product.price}</h4>
                                <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
                                <div class="text-muted mb-3">{props.product.reviews + " Reviews" } </div> 
                                <Link type="button" to={'/product/'+ props.product.id} class="btn bg-warning btn-lg"><i class="fa fa-cart-plus mr-2"></i> Buy Now </Link>
                            </div>
                        </div>
                        </div>
                        </div>
                       

                        


                
                
            

        
    )
}

export default Product;
