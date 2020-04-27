import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GuideContext } from "../components/context/guides";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";

const Guide = () => {
  const { id } = useParams();
  const history = useHistory();
  const { guides } = useContext(GuideContext);
  const guide = guides.map((guide) => guide.name === guide);

  if (guides.length === 0) {
    return <Loading />;
  } else {
    const { title } = guide;
    return (
      <>
        <section className="single-guide">
          <img src={""} className="single-guide-images"></img>
        </section>

        <section className="single-guide-info">
          <article className="des">{title}</article>
          <h2 className="desc-header">{title}</h2>
          <h2> {title} </h2>
        </section>
      </>
    );
  }
};

export default Guide;
