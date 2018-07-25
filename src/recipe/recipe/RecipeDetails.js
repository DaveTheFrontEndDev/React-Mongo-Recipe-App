import React from 'react';
import PropTypes from 'prop-types';
import './recipeDetails.style.scss';
import VegetarianBadge from '../../common/badges/vegetarian';

const RecipeDetails = ({
  serves,
  dateCreated,
  isVegetarian,
  description,
  isLoading,
}) => (
  <section className={'c-recipe-details'}>
    <section>
      { isVegetarian && <VegetarianBadge/> }
      <h3 className={`c-recipe-details__item ${isLoading && 'h-loading'}`}>
        Serves: <span className="c-recipe-details__item-number">{serves}</span>
      </h3>
      <h3 className={`c-recipe-details__item -right ${isLoading && 'h-loading'}`}>
        Created: <span className="c-recipe-details__item-number">{dateCreated}</span>
      </h3>
    </section>
    <hr/>
    <p className={`c-recipe-details__summary ${isLoading && 'h-loading'}`} dangerouslySetInnerHTML={{ __html: description}} />
    <hr/>
  </section>
);

RecipeDetails.propTypes = {
  serves: PropTypes.number,
  dateCreated: PropTypes.string,
  isVegetarian: PropTypes.string,
  description: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default RecipeDetails;
