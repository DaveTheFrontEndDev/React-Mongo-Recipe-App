import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../common/header';
import Main from '../../common/main';
import {CardsList, Card} from '../../common/cards';
import { fetchRecipeList } from './recipeList.actions';

class RecipeListContainer extends Component {
  // handleRecipeSelect = this.handleRecipeSelect.bind(this);

  componentDidMount() {
    this.props.fetchRecipeList();
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <Fragment>
        <Header
          text="My Recipes"
          icon="/resources/logo.svg"
        />
        <Main>
          <CardsList>
            {
              this.props.recipes.map( recipe => (
                <Card
                  key={recipe.id}
                  title={recipe.title}
                  summary={recipe.summary}
                  smallImage={recipe.image && recipe.image.small}
                  largeImage={recipe.image && recipe.image.large}
                  onClick={() => {this.handleRecipeSelect(recipe.id);}}
                />
              ))
            }
          </CardsList>
        </Main>
      </Fragment>
    );
  }

  handleRecipeSelect(id) {
    this.props.history.push(`/${id}`);
  }
}

const mapStateToProps = state => ({
  recipes: state.recipeList.recipes,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchRecipeList,
}, dispatch);

RecipeListContainer.propTypes = {
  recipes: PropTypes.array,
  fetchRecipeList: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListContainer);
