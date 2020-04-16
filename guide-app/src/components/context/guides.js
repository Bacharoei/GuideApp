import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../../utilis/URL";

export const GuideContext = React.createContext();

const GuideProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [guides, setGuides] = useState([]);
  const [featured, setfeatured] = useState([]);
  const [services, setServices] = useState([]);

  return (
    <GuideContext.Provider value={{ guides, loading, services, featured }}>
      {children}
    </GuideContext.Provider>
  );
};

export default GuideProvider;
