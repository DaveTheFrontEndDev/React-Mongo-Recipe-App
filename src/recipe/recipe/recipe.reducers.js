
import {FETCHING_RECIPE, LOAD_RECIPE} from './recipe.constants';

const initialState = {
  isLoading: false,
  hasLoaded: false,
  id: false,
  title: false,
  description: false,
  imageSmall: false,
  imageLarge: false,
  vegetarian: false,
  serves: false,
  summary: false,
  ingredients: [],
  steps: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
  case FETCHING_RECIPE: {
    return {
      ...initialState,
      isLoading: true,
    };
  }
  case LOAD_RECIPE: {
    return {
      ...state,
      isLoading: false,
      hasLoaded: true,
      id: action.id,
      title: action.title,
      summary: action.summary,
      imageSmall: action.imageSmall,
      imageLarge: action.imageLarge,
      dateCreated: action.dateCreated,
      vegetarian: action.vegetarian,
      serves: action.serves,
      ingredients: action.ingredients,
      steps: action.steps,
    };
  }
  default:
    return state;
  }
};
