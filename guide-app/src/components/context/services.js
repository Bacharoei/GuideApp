import React, { useState, useEffect } from "react";
import { FaWindows, FaServer, FaCloudUploadAlt, FaBug } from "react-icons/fa";

export const ServicesContext = React.createContext();

const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  let service = [
    {
      icon: <FaServer />,
      title: "Virtual & physical Servers",
      info: "Setup and Manage the organiztion servers",
    },

    {
      icon: <FaCloudUploadAlt />,
      title: "Zcloud services",
      info: "Zcloud servicres for the Developers group",
    },

    {
      icon: <FaBug />,
      title: "Support QA and Dev",
      info: "assist with bug and errors",
    },

    {
      icon: <FaWindows />,
      title: "Windows And Linux",
      info: "Support for Windows and Linux OS by IT ",
    },
  ];

  useEffect(() => {
    setServices(service);

    //cleanup function
    return () => {};
  }, []);

  return (
    <ServicesContext.Provider value={{ services }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
