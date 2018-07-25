import React from 'react';
import PropTypes from 'prop-types';
import './recipeInstructions.style.scss';

const RecipeInstructions = ({
  children,
}) => (
  <section className={'c-recipe-instructions'}>
    {children}
  </section>
);

RecipeInstructions.propTypes = {
  children: PropTypes.element,
};

export default RecipeInstructions;
