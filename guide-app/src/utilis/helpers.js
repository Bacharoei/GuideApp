import React from "react";

//return only the guides with a featured value is ture
export function featuredGuides(data) {
  return data.filter((guide) => {
    return guide.featured === true;
  });
}
