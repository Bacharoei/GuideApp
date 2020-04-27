import React from "react";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import FeaturedGuides from "../components/Guide/FeaturedGuide";
import Services from "../components/Services/Services";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

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
      <Services />
      <FeaturedGuides />
      <Footer />
    </>
  );
};

export default Home;
