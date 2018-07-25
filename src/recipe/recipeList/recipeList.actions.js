
import {FETCHING_RECIPE_LIST, LOAD_RECIPE_LIST} from './recipeList.constants';

import recipesMock from './recipeList.mocks';

import httpService from '../../services/http';

export const fetchRecipeList = () => dispatch => {
  dispatch({
    type: FETCHING_RECIPE_LIST,
  });

  if (!!localStorage.getItem('mock')) {
    dispatch({
      type: LOAD_RECIPE_LIST,
      recipes: recipesMock,
    });
  } else {
    httpService.get('/recipes')
      .then(data => {
        dispatch({
          type: LOAD_RECIPE_LIST,
          recipes: data.map(recipe => ({
            ...recipe,
            id: recipe.id,
          })),
        });
      });
  }
};
