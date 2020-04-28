import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GuideContext } from "../components/context/guides";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../pages/Error";

const Guide = () => {
  const { id } = useParams();
  const history = useHistory();
  const { guides } = useContext(GuideContext);
  const guide = guides.find((guide) => guide._id == id);

  if (guides.length === 0) {
    return <Loading />;
  } else if (!guide) {
    return <Error />;
  } else {
    const { title, desc, category, kbNumber } = guide;
    return (
      <>
        <section className="single-guide">
          <div className="single-guide-images"></div>

          <div className="single-guide-info">
            <article className="desc">
              <div className="desc-header">
                <h3> details: </h3>
              </div>
              <p> {desc} </p>
            </article>
            <article className="info">
              <div className="info-header">
                <h3> Info: </h3>
              </div>
              <h6> Category: {category} </h6>
              <h6> KB: {kbNumber} </h6>
              <h6> update: {kbNumber} </h6>
            </article>
          </div>
        </section>
      </>
    );
  }
};

export default Guide;
