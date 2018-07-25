import React from 'react';
import PropTypes from 'prop-types';
import './recipeSteps.style.scss';

const RecipeSteps = ({
  steps,
  isLoading,
}) => (
  <section className={'c-recipe-instructions__section c-recipe-steps'}>
    <h3 className={`c-recipe-instructions__title ${isLoading ? 'is-removed' : ''}`}>Steps</h3>
    <ol className={isLoading ? 'is-removed' : ''}>
      {steps.map( step => (
        <li>{step}</li>
      ))}
    </ol>
  </section>
);

RecipeSteps.propTypes = {
  steps: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default RecipeSteps;
