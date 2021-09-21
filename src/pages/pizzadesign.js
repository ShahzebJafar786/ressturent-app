
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../pages/pizzadesign.css'
import {motion} from 'framer-motion'



function Pizzadesign({ ingredients, setIngredients}) {

    const changeIngredients=(name)=> {
        let newIngredients = {...ingredients};
        newIngredients [name]=!newIngredients[name];
        setIngredients(newIngredients)

        

    }


    return (
        <div>
            <Header />

            <div className="main-container">
            {/* {JSON.stringify(ingredients)}  */}

                <div className="pizzadesign">  
            
            
            <img src='Images/BaseCheese.png' height='100%' width='100%' className="ingredients"/>
            <img src='Images/Olive.png' height='100%' width='100%' className="ingredients"/>
            <img src='Images/Mushroom.png' height='100%' width='100%' className="ingredients"/>
            <img src='Images/Pineapple.png' height='100%' width='100%' className="ingredients"/>
            <img src='Images/Tomato.png' height='100%' width='100%' className="ingredients"/>
            <img src='Images/Basil.png' height='100%' width='100%' className="ingredients"/>
            <img src='Images/PizzaBase.png' height='100%' width='100%'/>
             

                </div>
                <div className="checkbox-area">

                <input type="checkbox" id="basil" onChange={()=>changeIngredients("basil")}/>
                <label > Basil</label><br/>

                <input type="checkbox" id="cheese" onChange={()=>changeIngredients("cheese")}/>
                <label > Cheese</label><br/>

                <input type="checkbox" id="mushroom" onChange={()=>changeIngredients("mushroom")}/>
                <label > Mushroom</label><br/>

                <input type="checkbox" id="olive" onChange={()=>changeIngredients("olive")}/>
                <label > Olive</label><br/>

                <input type="checkbox" id="pineapple" onChange={()=>changeIngredients("pineapple")}/>
                <label > Pineapple</label><br/>

                <input type="checkbox" id="tomato" onChange={()=>changeIngredients("tomato")}/>
                <label > Tomato</label> 

                </div>
                
            

            </div>
            {/* <Footer /> */}

        </div>
    )
}

export default Pizzadesign





          
