import React from "react";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header>
        <Banner
          title="IT Infrastructure Operation "
          subtitle="Internal Knowledge Base and Guide portal"
        >
          <Link to="/guides" className="btn-primary">
            Our Guides
          </Link>
        </Banner>
      </Header>
    </>
  );
};

export default Home;
