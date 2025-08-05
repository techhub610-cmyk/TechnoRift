import React from "react";
import "./ServiceCards.css";
import marketing from "../Assets/marketing.jpg";
import design from "../Assets/graph.jpg";
import seo from "../Assets/seo.jpg";
import digital from "../Assets/digital.jpg";
import web from "../Assets/web.jpeg";
import brand from "../Assets/brand.jpeg";
import Shopify from "../Assets/shop.jpg"

const services = [
  {
    title: "Brand Execution",
    description:
      "We’ll help you establish and amplify your brand’s unique voice and identity through all of your marketing channels.",
    img: brand,
  },
  {
    title: "Web Development",
    description:
      "We build scalable, fast-loading, and responsive websites tailored to your business needs using the latest technologies.",
    img: web,
  },
  {
    title: "Digital Marketing",
    description:
      "We create data-driven digital campaigns to help your brand reach the right audience and drive measurable results.",
    img: digital,
  },
  {
    title: "Graphic Designing",
    description:
      "Engage your audience with stunning visuals, branding materials, and creative graphic content that speaks your brand language.",
    img: design,
  },
  {
    title: "Search Engine Optimization",
    description:
      "Boost your online visibility and search engine rankings with our expert SEO strategies and technical optimizations.",
    img: seo,
  },
  {
    title: "Shopify Development",
    description:
      "Unlock your eCommerce potential with our custom Shopify solutions. From launch to growth, we design and optimize your store for performance and conversions.",
    img: Shopify,
  },
];

const ServiceCards = () => {
  return (
    <section id="services" className="services-section">
     <div className="content-wrapper">
  <h1 className="main-title">
    We build digital solutions that <br />
    <strong style={{ color: "rgb(1,180,216)" }}>Accelerate Growth</strong>{" "}
    and <strong style={{ color: "rgb(1,180,216)" }}>Drive Innovation</strong>.
  </h1>

  <p className="subtext">
    <strong style={{ color: "rgb(1,180,216)" }}>TechnoRift</strong> is a
    results-driven technology and digital solutions hub, specializing in
    custom software development, digital strategy, and data-powered
    innovation. Whether you’re targeting local markets or scaling globally,
    our end-to-end services are crafted to elevate your brand, streamline
    operations, and boost growth.
  </p>
  <p className="subtext">
    From intelligent web and app development to digital transformation,
    UI/UX design, and targeted marketing campaigns — we deliver impactful,
    future-ready solutions that drive measurable results. Partner with{" "}
    <strong style={{ color: "rgb(1,180,216)" }}>TechnoRift</strong> to
    transform your digital presence and create lasting connections that move
    your business forward.
  </p>
</div>


      <div className="container">
        {services.map((service, index) => (
          <article className="card" key={index}>
            <img
              className="card__background"
              src={service.img}
              alt={service.title}
            />
            <div className="card__content flow">
              <div className="card__content--container flow">
                <h2 className="card__title">{service.title}</h2>
                <p className="card__description">{service.description}</p>
              </div>
              {/* <button className="card__button">Read More</button> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
