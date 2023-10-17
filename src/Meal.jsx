import React, { useState } from 'react';
import MealItem from './Components/MealItem';

const Meal = () => {
    const [search, setSearch] = useState('');
    const [meal, setMeal] = useState();

    const searchMeal = (e) => {
        if (e.key === "Enter") {
            fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals))
            console.log(data.meals);
        }
    }

    return (
        <>
        <div className='main'>
            <div className='heading'>
                <h1>Search Your Food Recipe</h1>
                <h4>...</h4>
            </div>
            <div className='searchBox'>
                <input 
                type="search" 
                className='search-bar' 
                placeholder='Enter food name' 
                onChange={(e)=>setSearch(e.target.value)}
                value={search}
                />
            </div>
            <div className='container'>
                {
                    (meal === null) ? (
                        <p>Not Found</p>
                    ) : (
                        ""
                    )
                }
            </div>
        </div>
        </>
    )
}

export default Meal;