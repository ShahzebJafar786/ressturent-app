import React from 'react'

function Sidebar() {
    return (
        <div>
            <div class="d-flex" id="wrapper">
            
            <div class="border-end bg-white" id="sidebar-wrapper">
                <div class="sidebar-heading border-bottom "><h6>Shop By Categories</h6></div>
                <div class="list-group list-group-flush">
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Pizza</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Burger</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Sandwich</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Wraps</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Coldrinks</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Deserts</a>
                </div>
            </div>
            </div>
            </div>
        
    )
}

export default Sidebar
