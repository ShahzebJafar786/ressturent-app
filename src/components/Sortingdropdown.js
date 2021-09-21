import React from 'react'

function Sortingdropdown() {
    return (
        <div>
            <div id="page-content-wrapper">
               
                <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                    <div class="container-fluid">
                        
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                                
                                <li class="nav-item dropdown">
                                    <a type="button" class="btn nav-link dropdown-toggle" id="navbarDropdown" href="#!" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort By</a>
                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#!">Price: Low To High</a>
                                        <a class="dropdown-item" href="#!">Price: High To Low</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#!">Date</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </div>
        </div>
    )
}

export default Sortingdropdown
