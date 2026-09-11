import { useState } from "react";
import technologies from "../../technologies.json";

import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

import type { Technology } from "../../types/technology";
import { toast } from "react-toastify";

const TechnologySection = () => {
  const [stack, setStack] = useState<Technology[]>([]);

  // Add to Stack
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [...previousStack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove from Stack
  const handleRemoveFromStack = (id: string) => {
    setStack((previousStack) => previousStack.filter((item) => item.id !== id));
  };

  // Remove All
  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Explore the <span className="text-pink-500">Technologies</span>
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_245px]">
          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => {
              const isAdded = stack.some((item) => item.id === technology.id);

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={isAdded}
                  onAdd={handleAddToStack}
                />
              );
            })}
          </div>

          {/* Your Stack */}
          <StackSidebar
            stack={stack}
            onRemove={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
