import React from "react"; // importing React (Optional)

import "../UI/Card.css"; // importing CSS

const Card = (props) => {
  const classes = "card " + props.className; // verible storeing the card

  return <div className={classes}>{props.children}</div>; // Showing the children within the div and adding className for styles
};

export default Card; // exporting card
