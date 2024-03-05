import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

/**
 * Button component for rendering interactive buttons with optional icons and styles.
 *
 * @component
 * @param {Object} props - The properties of the Button component.
 * @param {string} props.label - The text content of the button.
 * @param {string} props.variant - The visual style variant of the button.
 * @param {string} props.size - The size variant of the button.
 * @param {string} props.redirect - The URL to redirect to when the button is clicked.
 * @param {string} props.leftIcon - The URL or path to the left icon image.
 * @param {number} props.labelLevel - The heading level for the button label.
 * @param {string} props.rightIcon - The URL or path to the right icon image.
 * @param {Function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} JSX element representing the Button.
 */
const Button = ({ children , label, variant, size, redirect, leftIcon, labelLevel, rightIcon, onClick, ...props }) => {

  return (
    <>
      <button  data-testid='button' to={redirect}
        className={['btn', `btn-${size}`, `btn-${variant}`].join(' ')}
        onClick={onClick}
        {...props}>
          {children}
      </button>
    </>
  );
};

/**
 * PropTypes for the Button component to define the expected types of props.
 * @static
 * @type {Object}
 * @property {string} label - The text content of the button.
 * @property {string} redirect - The URL to redirect to when the button is clicked.
 * @property {string} variant - The visual style variant of the button.
 * @property {string} size - The size variant of the button.
 * @property {Function} onClick - The function to be called when the button is clicked.
 * @property {string} leftIcon - The URL or path to the left icon image.
 * @property {string} rightIcon - The URL or path to the right icon image.
 * @property {number} labelLevel - The heading level for the button label.
 */
Button.propTypes = {
  label: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'primary-blue', 'secondary-blue']),
  size: PropTypes.oneOf(['small', 'large', 'auto']),
  onClick: PropTypes.func,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  labelLevel: PropTypes.number,
};

/**
 * Default properties for the Button component.
 * @static
 * @type {Object}
 * @property {string} label - The default text content of the button ('primary').
 * @property {string} redirect - The default empty string for the redirect URL.
 * @property {string} variant - The default visual style variant of the button ('primary').
 * @property {string} size - The default size variant of the button ('small').
 * @property {Function} onClick - The default undefined function for the click event.
 * @property {string} leftIcon - The default empty string for the left icon image.
 * @property {string} rightIcon - The default empty string for the right icon image.
 * @property {number} labelLevel - The default heading level for the button label (6).
 */
Button.defaultProps = {
  label: 'primary',
  redirect: '',
  variant: 'primary',
  size: 'small',
  onClick: undefined,
  leftIcon: '',
  rightIcon: '',
  labelLevel: 6,
};

export default Button;
