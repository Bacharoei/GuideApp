import React, { useContext } from "react";
import { ServicesContext } from "../context/services";
import Title from "../Title";

export default function FeaturedGuide() {
  const { services } = useContext(ServicesContext);

  return (
    <section className="services">
      <Title title="our services" />
      <div className="services-center">
        {services.map((service, index) => {
          return (
            <article key={index} className="service">
              <span> {service.icon} </span>
              <h6> {service.title} </h6>
              <p> {service.info} </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
