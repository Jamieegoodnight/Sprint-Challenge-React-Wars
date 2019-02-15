import React from 'react';

const Character = props => {
    return (
        <div className="character">
            <h2>{props.element.name}</h2>
            <p><strong>Birth Year:</strong> {props.element.birth_year}</p>
            <p><strong>Hair Color:</strong> {props.element.hair_color}</p>
            <p><strong>Skin Color:</strong> {props.element.skin_color}</p>
            <p><strong>Eye Color:</strong> {props.element.eye_color}</p>
        </div>
    )
}

export default Character;