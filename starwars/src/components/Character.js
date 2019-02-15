import React from 'react';

const Character = props => {
    <div>
        <img src={props.element.url} alt="Image of the character."/>
        <ul>
            <li>Name: {props.element.name}</li>
        </ul>
    </div>
}

export default Character;