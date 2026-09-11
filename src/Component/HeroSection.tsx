import heroimage from "../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <section>
      <div>
        <h2>Build Your Ideal Development Stack</h2>
        <p>
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <button>Explore Technologies</button>
        <button>Learn More</button>
      </div>
      <div>
        <img src={heroimage} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
