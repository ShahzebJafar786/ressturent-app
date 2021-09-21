import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import Product from '../components/Product-card'
import { productsdata } from '../data/products'
import './shop.css'
import './home.css'
import Sidebar from '../components/Sidebar'
import Sortingdropdown from '../components/Sortingdropdown'
import Footer from '../components/Footer'

function shop() {
    return (
        <div>
            {/* Header -------------------- */}
            <Header />

            {/* Sorting Dropdown -------------------- */}
            <Sortingdropdown />

            {/* Sidebar -------------------- */}

            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>

                {/* Main Shop -------------------- */}
                <div className="col-md-10">
                    <div class="row ">
                        <div class="container d-flex shop-product ">
                            {productsdata.map(currentproduct => <Product product={currentproduct} />)}
                        </div>

                    </div>

                    <div className=" d-flex justify-content-center"><Pagination /></div>



                </div>


            </div>



            <Footer />


        </div>













    )
}

export default shop
