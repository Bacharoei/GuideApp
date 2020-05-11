import React from "react";
import Guide from "./Guide";

export default function Guides({ title, guides }) {
  return (
    <section className="guideslist">
      <div className="guideslist-center">
        {guides.map((guide) => {
          return <Guide key={guide} {...guide} />;
        })}
      </div>
    </section>
  );
}
