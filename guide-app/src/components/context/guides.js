import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../../utilis/URL";
import { featuredGuides } from "../../utilis/helpers";

export const GuideContext = React.createContext();

const GuideProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [guides, setGuides] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    setLoading(true);

    // axios.get(`${url}/guides`).then((response) => {
    //   const featured = featuredGuides(response.data);
    //   setFeatured(featured);

    fetch("http://localhost:3030/guides")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGuides(data);
        setFeatured(data);
        setLoading(false);
        console.log(data[0]._id);
      });
    //cleanup function
    return () => {};
  }, []);

  return (
    <GuideContext.Provider value={{ guides, loading, featured }}>
      {children}
    </GuideContext.Provider>
  );
};

export default GuideProvider;
