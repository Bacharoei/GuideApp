import React, { useContext } from "react";
import { GuideContext } from "../components/context/guides";

const Guides = () => {
  const { loading, guides } = useContext(GuideContext);

  return <div>hello from guides list</div>;
};

export default Guides;
