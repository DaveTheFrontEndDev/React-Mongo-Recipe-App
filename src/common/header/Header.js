import React from 'react';
import PropTypes from 'prop-types';
import './header.style.scss';

const Header = ({
  icon,
  text,
  leftButton,
}) => (
  <header className="c-header">
    {leftButton && leftButton}
    {icon && <img className="c-header__icon" src={icon} />}
    <h2>{text}</h2>
  </header>
);

Header.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  leftButton: PropTypes.element,
};

export default Header;
