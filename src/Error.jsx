import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>404 MotherFUcker</h1>
      <Link to="/">
        <button type="button">home</button>
      </Link>
    </div>
  );
}

export default Error;
