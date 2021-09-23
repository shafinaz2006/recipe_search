import { useState, useEffect } from 'react';
import axios from 'axios';

function SearchRecipeHook() {
  const [recipeSearch, setRecipeSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recipeFound, setRecipeFound] = useState([]);

  // input change event:

  const getSearchString = (event) => {
    setRecipeSearch(event.target.value);
  }

  // axios search recipe request:

  const searchRecipe = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipeSearch}&app_id=202b54b2&app_key=aacb28831d67e34e10029db642233e04%09&imageSize=REGULAR`)
      .then(response => setRecipeFound(response.data.hits))
      .catch(error => console.log('Error in response data', error));
  }

  useEffect(() => {
    setIsLoading(false);
  }, [recipeFound]);

  return {recipeFound, recipeSearch, isLoading, getSearchString, searchRecipe}
}

export default SearchRecipeHook;
