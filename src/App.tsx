import './App.css';
import SearchRecipeHook from './utils/searchRecipeHook';
import SearchForm from './Components/SearchForm';
import AllRecipes from './Components/AllRecipes/AllRecipes';

function App() {
  const {recipeFound, 
         recipeSearch, 
         isLoading, 
         getSearchString, 
         searchRecipe } = SearchRecipeHook();

  return (
    <main className="App">
      <h1> Recipe Search App</h1>
      <SearchForm searchRecipe={searchRecipe} getSearchString={getSearchString} recipeSearch={recipeSearch} />
      {isLoading? <p> Loading....</p> : ''}
      {recipeFound? <AllRecipes recipeFound={recipeFound}/> : '' }
    </main>
  );
}

export default App;
