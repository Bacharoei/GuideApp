import React from "react";
import { Link } from "react-router-dom";
import "./guide.css";

export default function Guide({ _id, title, name, category, image }) {
  return (
    <article className="guide">
      <div className="img-container">
        <img src={image} alt={title} />
        <Link to={`guides/${_id}`} className="btn-primary guide-link">
          detauls
        </Link>
        <div className="price-top">
          <h4> {category} </h4>
        </div>
        <p className="guide-info"> {name} </p>
      </div>
    </article>
  );
}
