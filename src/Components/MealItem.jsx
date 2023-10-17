import React from 'react';

const MealItem = ({ data }) => {
    return (
        <>
        <div className='card'>
            <img src={data.data.strMealThumb} />
            <div className='info'>
                <h2>{data.data.strMeal}</h2>
                <p>{data.data.strArea} food</p>
            </div>
            <div className='recipe'>
                <h2>Recipe</h2>
                <p>{data.data.strInstructions}</p>
                <img src={data.data.strSource} />
                <a href={data.data.strYoutube}>Watch video</a>
            </div>
        </div>
        </>
    );
}

export default MealItem; 