import React from "react";
import Guide from "./Guide";

export default function Guides({ title, guides }) {
  return (
    <section className="guideslist">
      <h2 className="section-title"> {title} </h2>
      <div className="guideslist-center">
        {guides.map((guide) => {
          return <Guide key={guide} {...guide} />;
        })}
      </div>
    </section>
  );
}
