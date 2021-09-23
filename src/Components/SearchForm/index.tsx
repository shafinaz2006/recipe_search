
const SearchForm = (props: any) =>{
  const {searchRecipe, getSearchString, recipeSearch} = props;
  return(
    <form onSubmit={event => searchRecipe(event)}>
      <label htmlFor='search'>Enter your query: </label>
      <input type='text'  id='search' name='recipeSearch' onChange={getSearchString} value={recipeSearch} placeholder='query'/>
      <button >Search</button>
    </form>
  )
}
export default SearchForm;