import React from 'react';
import './InputCity.css';

export default function Input() {
    return (
        <div className="input-container">
            <input className="input-autocomplete"/>
            <button className="btn-plus">+</button>
        </div>
    )
}
