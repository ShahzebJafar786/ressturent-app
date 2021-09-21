import { Switch,Route } from 'react-router-dom';

import Home from './pages';
import Pizzadesign from './pages/pizzadesign';
import ProductPage from './pages/product-page';
import Shop from './pages/shop';
import {useState} from 'react'
import Todos from './pages/todos';
import Todo from './pages/todo';

    
    


function App() {

  const [ingredients,setIngredients]=useState({
    basil:false,
    cheese:false,
    mushroom:false,
    olive:false,
    pineapple:false,
    tomato:false
});

  return (
    <>

    
    <Switch>
     

    <Route path='/menu'>
     <Shop />
     </Route>

     

     <Route exact path='/todos/:id'>
     <Todo />
     </Route>

     <Route path='/todos'>
     <Todos />
     </Route>


     <Route path='/design_my_pizza'>
     <Pizzadesign ingredients={ingredients} setIngredients={setIngredients} />
     </Route>

     <Route  path='/product/:id'>
    <ProductPage />
    </Route>

    <Route exact path="/">
    <Home /> 
    </Route>

    </Switch>
    </>
  );
}

export default App;
