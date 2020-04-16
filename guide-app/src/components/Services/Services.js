import React, { useContext } from "react";
import ServiceContext from "../context/services";

function Services() {
  const { services } = useContext(ServiceContext);
  return <div>{services}</div>;
}

export default Services;
