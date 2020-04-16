import React from "react";
import { useParams } from "react-router-dom";

const Guide = () => {
  const { id } = useParams();

  return <div>hello from singleGuide, Guide id is {id} </div>;
};

export default Guide;
