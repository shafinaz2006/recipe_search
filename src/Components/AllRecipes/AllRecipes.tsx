import Recipe from '../Recipe/index';
import './style.css';

const AllRecipes = ({ recipeFound }: { recipeFound: any }) => {
  return (
    <section className='allRecipes'>
      {recipeFound.length > 0? recipeFound.map((recipe: any, i: number) => 
          <Recipe recipe={recipe.recipe} key={i} />)
        : <h1> No recipe found in this category </h1> 
      }
    </section>
  );
};
export default AllRecipes;