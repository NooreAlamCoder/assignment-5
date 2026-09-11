import technologies from "../../technologies.json";
import TechnologyCard from "./TechnologyCard";

const TechnologySection = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Explore the{" "}
            <span className="text-pink-500">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              isAdded={false}
              onAdd={() => {}}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default TechnologySection;