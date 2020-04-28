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
        <Title title="Featuerd Guides" />
        <GuidesList guides={featured} />
      </div>
    </section>
  );
}
