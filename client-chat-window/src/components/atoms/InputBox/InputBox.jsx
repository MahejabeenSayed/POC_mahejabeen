import React, { useState } from 'react';
import "./InputBox.scss";

/**
 * InputBox component for rendering an input box with a label and search button.
 *
 * @component
 * @param {Object} props - The properties of the InputBox component.
 * @param {string} props.type - The type of the input field (e.g., 'text', 'password').
 * @param {string} props.id - The unique identifier for the input field.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {function} props.onChange - The callback function for handling search when the button is clicked.
 * @returns {JSX.Element} JSX element representing the InputBox component.
 */
const InputBox = ({ type, id, label, placeholder, onChange , ...props }) => {
    const [inputValue, setInputValue] = useState('');

    /**
     * Handles the input change event and updates the state with the new value.
     * @param {Event} e - The input change event.
     */
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        onChange(e)
    };

    return (
        <div className="inputbox" data-testid="inputbox">
            {label && <label htmlFor={id} className='inputbox__label'>{label}</label>}
            <input type={type} name={id} id={id} className='inputbox__field' placeholder={placeholder} onChange={handleInputChange} {...props}/>
        </div>
    )
}

export default InputBox;
