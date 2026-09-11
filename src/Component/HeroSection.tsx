import heroimage from "../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <section className="bg-white py-10 md:py-16 lg:py-20 container mx-auto">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14">
        {/*Hero Section Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight sm:leading-[1.15]">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 text-slate-500 text-xs sm:text-base lg:text-lg leading-relaxed max-w-sm sm:max-w-xl mx-auto lg:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons Section */}

          {/* Buttons 1st */}
          <div className="mt-6 sm:mt-8 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <button className="flex-1 sm:flex-initial px-4 sm:px-7 py-3 rounded-xl font-semibold text-xs sm:text-sm md:text-base text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-95 transition-opacity shadow-sm cursor-pointer border-none whitespace-nowrap">
              Explore Technologies
            </button>
            {/* Buttons 2nd */}
            <button className="flex-1 sm:flex-initial px-4 sm:px-7 py-3 rounded-xl font-medium text-xs sm:text-sm md:text-base text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>

        {/* Mobile a Image niche Rakhte */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-2 lg:mt-0">
          <img
            src={heroimage}
            alt="Development Stack Illustration"
            className="w-4/5 max-w-[260px] sm:max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
