import React from 'react';
import './styles.css';
const ToggleSwitch = (props) => {
    return (
        <div style={{marginBottom:'20px'}} className="toggle-switch">
            <input
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
    );
}

export default ToggleSwitch;