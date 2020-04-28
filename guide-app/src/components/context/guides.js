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
    axios.get(`http://localhost:3030/guides`).then((res) => {
      const conv = JSON.stringify(res);
      setGuides(res.data);
      setFeatured(res.data);
      setLoading(false);
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
