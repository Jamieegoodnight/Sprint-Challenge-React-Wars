import React from 'react';

 const CharacterList = props => {
     return (
         <div>
             {props.starwarsChars.map(element => (
                 <Character 
                 key={element.name}
                 element={element}
                 />
             ))}
         </div>
     )
 }

export default CharacterList; 
