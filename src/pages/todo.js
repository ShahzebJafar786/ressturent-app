import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import Header from '../components/Header';


function Todo() {
    let params=useParams();
    
    let id= params.id;
    let [todo, setTodo]=useState(null);

    console.log(id);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/todos/'+id)
        .then(response => response.json())
        .then(data => setTodo(data));
    });

    if(!todo)
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
        <div className="container ">
            <h3>Id: {todo.id}</h3>
            <h3>Title: {todo.title}</h3>
            <h3>Status: {todo.completed? "Done":"P  ending"}</h3>
            <h3>UserId: {todo.userId}</h3>
        </div>
    )
}

export default Todo
