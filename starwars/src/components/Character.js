import React from 'react';

import Film from  './Film'

class Character extends React.Component {
    constructor(props){
        super(props);
        this.state={
            films: props.element.films
        }
    }
    componentDidMount() {
        this.getCharacters('https://swapi.co/api/films/');
      }
    
    
      getCharacters = URL => {
        // feel free to research what this code is doing.
        // At a high level we are calling an API to fetch some starwars data from the open web.
        // We then take that data and resolve it our state.
        fetch(URL)
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data);
            this.setState({ films: data.results });
          })
          .catch(err => {
            throw new Error(err);
          });
      };



    render(){
    return (
        <div className="character">
            <h2>{this.props.element.name}</h2>
            <p><strong>Birth Year:</strong> {this.props.element.birth_year}</p>
            <p><strong>Hair Color:</strong> {this.props.element.hair_color}</p>
            <p><strong>Skin Color:</strong> {this.props.element.skin_color}</p>
            <p><strong>Eye Color:</strong> {this.props.element.eye_color}</p>
            <h3>Appearances</h3>
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