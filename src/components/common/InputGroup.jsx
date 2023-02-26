import React from 'react';
import "../../assets/styles/components/common/InputGroup.css";

export default function InputGroup({ id, label, placeholder }) {
    return (
        <div className="input-group">
            <label for={id} className='input__label'>{label}</label>
            <input type="text"
                id={id}
                className="input__field"
                placeholder={placeholder} />
        </div>
    )
}
