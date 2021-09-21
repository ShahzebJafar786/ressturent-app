import React from 'react'
import {useState, useEffect} from 'react'
import Header from '../components/Header';
import {Link} from 'react-router-dom'

function Todos() {
    let [todos, setTodos]=useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => setTodos(json));
    });

    if(!todos.length)
    return (
        <div>
            
            <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
        </div>
    )
    return (
        <div>
            <Header/>
            <ol className="container">
                <h1>Todos</h1>
            {
                
            todos.map(todo => 
                <Link to={"/todos/"+ todo.id}>
                        <li className={todo.completed? "text-success" : "text-danger"} >{    todo.title}</li></Link>
            )
            }
            </ol>
            
        </div>
    )
}

export default Todos
