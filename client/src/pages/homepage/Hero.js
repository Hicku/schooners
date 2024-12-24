import bar from "../../images/bar.jpg";
import "./homepage.css";

function Hero() {
  return (
    <section className="hero position-relative mb-5">
      <div
        className="hero-img"
        style={{ backgroundImage: `url(${bar})` }}
      ></div>
      <div className="container-fluid p-0"></div>
    </section>
  );
}

export default Hero;
