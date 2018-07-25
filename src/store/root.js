
import { combineReducers } from 'redux';
import recipe from '../recipe/recipe/recipe.reducers';
import recipeList from '../recipe/recipeList/recipeList.reducers';

export default combineReducers({
  recipe,
  recipeList,
});
