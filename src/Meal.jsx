import React, { useState } from 'react';
import MealItem from './Components/MealItem';
import "./food1.jpg";

const Meal = () => {
    const [search, setSearch] = useState('');
    const [myMeal, setMyMeal] = useState([]);

    const searchMeal = (e) => {
        if (e.key === "Enter") {
            try {
                fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${search}`)
                .then(res => res.json())
                .then(data => setMyMeal(data.meals)) 
            } catch (error) {
                console.log("There is an error");
            }       
        }
    }

    return (
        <>
        <div className='main'>
            <div className='heading'>
                <h1>Search Your Food Recipe</h1>
                <h4>Discover your favorite recipes here, and savor the joy of both cooking and relishing your delicious meals.</h4>
            </div>
            <div className='searchBox'>
                <input 
                type="search" 
                className='search-bar' 
                placeholder='Enter food name' 
                onChange={(e)=>setSearch(e.target.value)}
                value={search}
                onKeyDown={searchMeal}
                />
            </div>
            <div className='container'>
                {
                    (myMeal.length === 0) ? (
                        <div>
                            <img src="src/food1.jpg" alt="background-pic" className='main-background-pic'/>
                        </div>
                    ) : (
                        myMeal.map((meal) => {
                            return (
                                <MealItem data={ meal } key={meal.idMeal}/>
                            )
                        })
                    )
                }
            </div>
        </div>
        </>
    )
}

export default Meal;