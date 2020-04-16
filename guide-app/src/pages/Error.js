import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="page-wrap d-flex flex-row align-items-center">
      <div className="container mt-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-12 text-center">
            <span className="display-1 d-block">404</span>
            <div className="mb-4 mt-4 lead">
              The Page you are looking for was not found.
            </div>
            <Link to="/" className="btn btn-link">
              {" "}
              Back to Home{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
