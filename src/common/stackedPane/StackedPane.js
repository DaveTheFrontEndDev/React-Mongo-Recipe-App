import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './stackedPane.style.scss';
import BackButton from '../buttons/back';

const StackedPane = ({
  children,
  onBackClick,
}) => (
  <Fragment className="c-stacked-pane">
    <BackButton
      className="c-stacked-pane__back"
      onClick={onBackClick}
    />
    {children}
  </Fragment>
);

StackedPane.propTypes = {
  children: PropTypes.element,
  onBackClick: PropTypes.func,
};

export default StackedPane;
