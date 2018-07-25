import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import StackedPane from '../../common/stackedPane';
import Main from '../../common/main';
import ImageHeader from '../../common/imageHeader';
import RecipeDetails from './RecipeDetails';
import RecipeInstructions from './RecipeInstructions';
import RecipeIngredients from './RecipeIngredients';
import RecipeSteps from './RecipeSteps';
import { fetchRecipe } from './recipe.actions';

class RecipeContainer extends Component {
  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.recipeId);
  }

  render() {
    return (
      <StackedPane
        onBackClick={() => {this.props.history.goBack();}}
      >
        <ImageHeader
          text={this.props.title}
          smallImage={this.props.imageSmall}
          largeImage={this.props.imageLarge}
        />
        <Main>
          <RecipeDetails
            serves={this.props.serves}
            dateCreated={this.props.dateCreated}
            isVegetarian={this.props.vegetarian}
            description={this.props.summary}
            isLoading={!this.props.hasLoaded}
          />
          <RecipeInstructions>
            <RecipeIngredients
              ingredients={this.props.ingredients}
              isLoading={!this.props.hasLoaded}
            />
            <RecipeSteps
              steps={this.props.steps}
              isLoading={!this.props.hasLoaded}
            />
          </RecipeInstructions>
        </Main>
      </StackedPane>
    );
  }
}

const mapStateToProps = state => ({
  id: state.recipe.id,
  title: state.recipe.title,
  imageSmall: state.recipe.imageSmall,
  imageLarge: state.recipe.imageLarge,
  dateCreated: state.recipe.dateCreated,
  vegetarian: state.recipe.vegetarian,
  serves: state.recipe.serves,
  summary: state.recipe.summary,
  ingredients: state.recipe.ingredients,
  steps: state.recipe.steps,
  hasLoaded: state.recipe.hasLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchRecipe,
}, dispatch);

RecipeContainer.propTypes = {
  fetchRecipe: PropTypes.func,
  id: PropTypes.String,
  title: PropTypes.String,
  imageSmall: PropTypes.String,
  imageLarge: PropTypes.String,
  dateCreated: PropTypes.string,
  vegetarian: PropTypes.bool,
  serves: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.String,
    item: PropTypes.String,
  })),
  summary: PropTypes.String,
  ingredients: PropTypes.arrayOf(PropTypes.String),
  steps: PropTypes.Number,
  hasLoaded: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeId: PropTypes.string,
    }),
  }),
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
