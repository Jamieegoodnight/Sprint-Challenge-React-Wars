import React from 'react';

import Film from  './Film'

class Character extends React.Component {
    constructor(props){
        super(props);
        this.state={
            films: props.element.films
        }
    }


    render(){
    return (
        <div className="character">
            <h2>{this.props.element.name}</h2>
            <p><strong>Birth Year:</strong> {this.props.element.birth_year}</p>
            <p><strong>Hair Color:</strong> {this.props.element.hair_color}</p>
            <p><strong>Skin Color:</strong> {this.props.element.skin_color}</p>
            <p><strong>Eye Color:</strong> {this.props.element.eye_color}</p>
            {this.state.films.map(x => (
                <Film 
                x={x}
                />
            ))}
        </div>
      
    )
    } 
}

export default Character;