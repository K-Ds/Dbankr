import React from 'react';
import "../../assets/styles/components/common/InputGroup.css";
import "../../assets/styles/components/common/CheckBoxInputGroup.css";

export default function CheckBoxInputGroup({ id, label }) {
    return (
        <div className="input-group--checkbox">
            <input type="checkbox" id={id} className='input__checkbox' />
            <label for={id} className='input__label'>{label}</label>
        </div>
    )
}
