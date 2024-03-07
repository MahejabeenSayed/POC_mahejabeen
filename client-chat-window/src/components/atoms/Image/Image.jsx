import React from "react";
import PropTypes from 'prop-types';
import "./ImageCard.scss";

/**
 * Image component for rendering an image card with a label and a link.
 *
 * @component
 * @param {Object} props - The properties of the Image component.
 * @param {string} props.image - The URL of the image.
 * @param {string} props.label - The label for the image.
 * @returns {JSX.Element} JSX element representing the Image component.
 */
function Image({ image, label, ...props }) {
  return (
      <span className={`image-card-wrapper`}>
          <img src={image} alt={label} className="image-card__img" {...props}/>
      </span>  
  );
}

export default Image;

Image.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string
};
