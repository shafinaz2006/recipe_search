import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  interface Recipe {
    recipe: {
      ingredientLines: string[];
      label: string;
      calories: string;
      image: string;
      url: string;
    }
    _links:{};
  }
  const [recipeFound, setRecipeFound] = useState<Recipe[]>([]);
  const [recipeSearch, setRecipeSearch] = useState('');
  const [display, setDisplay] = useState(false);
 
  const getSearchString = (event: ChangeEvent<HTMLInputElement>): void  =>{
    setRecipeSearch(event.target.value);
  }
  const searchRecipe = (event: FormEvent<HTMLFormElement>): void =>{
    event.preventDefault();
    // console.log(recipeSearch);
    axios
      .get(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipeSearch}&app_id=202b54b2&app_key=aacb28831d67e34e10029db642233e04%09&imageSize=REGULAR`)
      .then(response => setRecipeFound(response.data.hits))
      .catch(error => console.log('Error in response data', error));
  }

  useEffect(() =>{
    setDisplay(true);
  }, [recipeFound]);

  return (
    <main className="App">
      <h1> Recipe Search App</h1>
      <form onSubmit={event => searchRecipe(event)}>
        <label htmlFor='search'>Enter your query: </label>
        <input type='text'  id='search' name='recipeSearch' onChange={getSearchString} value={recipeSearch} placeholder='query'/>
        <button >Search</button>
      </form>
      <div className='allRecipes'>
      {display? recipeFound.map((recipe:any, i) => 
        <section key={i} className='recipe'>
          <img src={recipe.recipe.image} alt='recipeImage' className='recipeImage'/>
          <p className='recipeLabel'>{recipe.recipe.label}</p>
          <p className='recipeCalorie'>Calories: {recipe.recipe.calories}</p>
          <div className='recipeIngredient'>
            <p className='recipeIngLabel'>Ingredients:</p>
            {recipe.recipe.ingredientLines? 
            recipe.recipe.ingredientLines.map((ing:any, j:number) => <p key={j}> {ing}</p>): ''}
          </div>
          <a href={recipe.recipe.url} target='__blank' className='recipeDetails'> Details </a>
        </section>
      ) : '<h1> No recipe found in this category </h1>'}
      </div>
    </main>
  );
}

export default App;
