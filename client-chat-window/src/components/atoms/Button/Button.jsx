import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

/**
 * Button component for rendering interactive buttons with optional icons and styles.
 *
 * @component
 * @param {Object} props - The properties of the Button component.
 * @param {JSXElement} props.label - The text content of the button.
 * @param {string} props.variant - The visual style variant of the button.
 * @param {string} props.size - The size variant of the button.
 * @param {string} props.redirect - The URL to redirect to when the button is clicked.
 * @param {Function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} JSX element representing the Button.
 */
const Button = ({ label, variant, size, redirect, onClick, ...props }) => {

  return (
    <>
      <button data-testid='button' to={redirect}
        className={['btn', `btn-${size}`, `btn-${variant}`].join(' ')}
        onClick={onClick}
        {...props}>
          {label}
      </button>
    </>
  );
};

/**
 * PropTypes for the Button component to define the expected types of props.
 * @static
 * @type {Object}
 * @property {JSXElement} label - The text content of the button.
 * @property {string} redirect - The URL to redirect to when the button is clicked.
 * @property {string} variant - The visual style variant of the button.
 * @property {string} size - The size variant of the button.
 * @property {Function} onClick - The function to be called when the button is clicked.
 */
Button.propTypes = {
  label: PropTypes.any.isRequired,
  redirect: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'primary-blue', 'secondary-blue']),
  size: PropTypes.oneOf(['small', 'large', 'auto']),
  onClick: PropTypes.func,
};



export default Button;
