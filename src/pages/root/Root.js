import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import RecipeListContainer from '../../recipe/recipeList/';
import RecipeContainer from '../../recipe/recipe/';

const Root = () => (
  <Fragment>
    <Switch>
      <Route exact from="/" component={RecipeListContainer}/>
      <Route exact from="/:recipeId" component={RecipeContainer}/>
    </Switch>
  </Fragment>
);

export default Root;
