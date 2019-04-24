import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>): Oops, page not found :(</h1>
      <Link to={"/notes"}>
        <button
          className="button"
          style={{ backgroundColor: "black", padding: "5px" }}
        >
          Back to notes
        </button>
      </Link>
    </div>
  );
};

export { NotFoundPage as default };
