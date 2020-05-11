import React, { useContext } from "react";
import { GuideContext } from "../components/context/guides";
import Loading from "../components/Loading";
import GuideList from "../components/Guide/Guides";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const Guides = () => {
  const { loading, guides } = useContext(GuideContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Header header="gudieHero">
        <Banner title="Guides and KB" subtitle="vmware and microsoft guides">
          <Link to="/" className="btn-primary">
            Back Home
          </Link>
        </Banner>
      </Header>
      <Title title="our guides" />

      <GuideList title="our guides" guides={guides} />
    </>
  );
};

export default Guides;
