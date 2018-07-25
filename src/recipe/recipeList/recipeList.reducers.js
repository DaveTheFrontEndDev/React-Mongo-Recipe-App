
import {FETCHING_RECIPE_LIST, LOAD_RECIPE_LIST} from './recipeList.constants';

const initialState = {
  isLoading: false,
  hasLoaded: false,
  recipes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
  case FETCHING_RECIPE_LIST: {
    return {
      ...initialState,
      isLoading: true,
    };
  }
  case LOAD_RECIPE_LIST: {
    return {
      ...state,
      isLoading: false,
      hasLoaded: true,
      recipes: action.recipes,
    };
  }
  default:
    return state;
  }
};
