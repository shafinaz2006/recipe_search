import './style.css';

const Recipe = ({recipe}: {recipe:any}) =>{
  return(
    <section className='recipe'>
      <img src={recipe.image} alt='recipeImage' className='recipeImage'/>
      <p className='recipeLabel'>{recipe.label}</p>
      <p className='recipeCalorie'>Calories: {Math.round(recipe.calories)} cal</p>
      <div className='recipeIngredient'>
        <p className='recipeIngLabel'>Ingredients:</p>
        <ul>
        {recipe.ingredientLines? 
          recipe.ingredientLines.map((ingredient:any, index:number) => 
            <li key={index}>{ingredient}</li>): ''
        }
        </ul>
      </div>
      <a href={recipe.url} target='__blank' className='recipeDetails'> Details </a>
    </section>
  )
}

export default Recipe;