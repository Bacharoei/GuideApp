import React, { useContext } from "react";
import GuidesList from "./Guides";
import { GuideContext } from "../context/guides";
import Loading from "../Loading";
import Title from "../Title";

export default function FeaturedGuide() {
  const { loading, featured } = useContext(GuideContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="featured-guides">
      <div className="featured-guides-center">
        <GuidesList title="Featured Guides" guides={featured} />
      </div>
    </section>
  );
}
