import React from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom';
import { getProductById} from '../data/products';
import Footer from '../components/Footer';


function ProductPage() {
    let params = useParams();
    let productdata = getProductById(params.id);


    return (
        <div >
            <Header />

            <div className="container " >
                <div className="row product-detail">
                    <div className="col-md-5 " >

                        <img src={`../${productdata.image}`} alt="product-image" width="300px" height="350px" />

                    </div>

                    <div className="col-md-7 " >
                        <div className="product-data">
                            <div className="product-detail-text">
                            <h2 className="text-red">{productdata.title}</h2>
                            <hr/>
                            <h4>{"Price: Rs. " + productdata.price}</h4> 
                            <p><b>Availablity:</b><span className="availibility"> {productdata.availability}</span></p>
                            </div>
                            <label><b>Quanity: </b> </label><input type="text" value="1" /> 
                            <button className="btn btn-warning add-to-cart">Add to Cart</button>
                        </div>


                    </div>
                </div>

                <div className="container description-section">
                    <hr/>
                    <h2>Description</h2>
                <p>{productdata.description}</p>

                </div>
            </div>

            <Footer />

        </div>
    )
}

export default ProductPage
