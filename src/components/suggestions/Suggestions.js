import React from "react";
import Person from "./Person";


export default function Suggestions({suggestions}) {

  const renderSuggestions = obj => obj.map(person => {
    return (
      <Person name={person.name} profilePic={person.profilePic} />
    )
  })
  
  return (
  <>
    <div className="suggestions">
      <h5 className="col-header"> People You May Know </h5>
      {renderSuggestions(suggestions)}
    </div>
  </>   
  );
}
