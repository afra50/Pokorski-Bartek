import React from "react";
import { Link } from "react-router-dom";
import "../../styles/pages/NotFound.scss";

const NotFound = () => {
  return (
    <div id="not-found">
      <h1>Oops! The page you're looking for doesn't exist.</h1>
      <i class="fa-regular fa-face-frown-open"></i>
      <p>Nothing found at this address.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
