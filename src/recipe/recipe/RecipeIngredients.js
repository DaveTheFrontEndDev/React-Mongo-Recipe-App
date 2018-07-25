import React from 'react';
import PropTypes from 'prop-types';
import './recipeIngredients.style.scss';

const RecipeIngredients = ({
  ingredients,
  isLoading,
}) => (
  <section className={'c-recipe-instructions__section c-recipe-ingredients'}>
    <h3 className={`c-recipe-instructions__title ${isLoading ? 'is-removed' : ''}`}>Ingredients</h3>
    <ul className={isLoading ? 'is-removed' : ''}>
      {ingredients.map( ingredient => (
        <li>{isNaN(ingredient.amount) ? `${ingredient.amount} of` : `${ingredient.amount} x`} {ingredient.item}</li>
      ))}
    </ul>
  </section>
);

RecipeIngredients.propTypes = {
  ingredients: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default RecipeIngredients;
