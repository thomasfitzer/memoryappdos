import React from "react";
import "./TeamCard.css";
// Nothing too fancy here, just displays the team cards.
const TeamCard = props => (
  <div 
    className="card"
    value={props.id}
    onClick={() => props.handleClick(props.id)}
    >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    
    
  </div>
);

export default TeamCard;



