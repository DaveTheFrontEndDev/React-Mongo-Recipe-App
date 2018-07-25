import React from 'react';
import PropTypes from 'prop-types';
import './main.style.scss';

const Main = ({
  children,
  className,
}) => (
  <main className={` ${className} c-main`}>
    {children}
  </main>
);

Main.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
};

export default Main;
