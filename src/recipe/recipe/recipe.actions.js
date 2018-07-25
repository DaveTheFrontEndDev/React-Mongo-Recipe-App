
import {FETCHING_RECIPE, LOAD_RECIPE} from './recipe.constants';

import recipeMock from './recipe.mocks';

import httpService from '../../services/http';

export const fetchRecipe = (recipeId) => dispatch => {
  dispatch({
    type: FETCHING_RECIPE,
  });

  if (!!localStorage.getItem('mock')) {
    dispatch({
      type: LOAD_RECIPE,
      id: recipeMock.id,
      title: recipeMock.title,
      description: recipeMock.description,
      imageSmall: recipeMock.image.small,
      imageLarge: recipeMock.image.large,
      vegetarian: recipeMock.vegetarian,
      serves: recipeMock.serves,
      ingredients: recipeMock.ingredients,
      steps: recipeMock.steps,
      dateCreated: recipeMock.dateCreated,
    });
  } else {
    httpService.get(`/recipes/${recipeId}`)
      .then(data => {
        dispatch({
          type: LOAD_RECIPE,
          id: data.id,
          title: data.title,
          summary: data.summary,
          description: data.description,
          imageSmall: data.image.small,
          imageLarge: data.image.large,
          vegetarian: data.vegetarian,
          serves: data.serves,
          ingredients: data.ingredients,
          steps: data.steps,
          dateCreated: new Date(data.createdAt).toISOString().split('T')[0],
        });
      });
  }
};
