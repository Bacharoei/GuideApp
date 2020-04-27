import React from "react";
import loading from "../images/loading-arrow.gif";

export default function Loading() {
  return (
    <div className="loading">
      <h4>Guides data loading...</h4>
      <img src={loading} alt="loading-arrow" />
    </div>
  );
}
