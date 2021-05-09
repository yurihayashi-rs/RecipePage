import React from 'react'
import'./recipe_module.css';

const Recipe = ({title, calories,image, ingredients}) => {
    return (
        <div className='recipe'>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className='image' src={image}/>            
        </div>
    )
}

export default Recipe
