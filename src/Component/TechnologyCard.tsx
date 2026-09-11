import type { Technology } from "../../types/technology";

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="group flex min-h-[255px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">

      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-8 w-8 object-contain"
          />
        </div>

        <span className="rounded-full bg-pink-50 px-2.5 py-1 text-[10px] font-semibold text-pink-600">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-4 text-[17px] font-bold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-[58px] text-[11px] leading-[18px] text-slate-500">
        {technology.description}
      </p>

      {/* Divider */}
      <div className="my-4 border-t border-slate-100" />

      {/* Category + Difficulty + Rating */}
      <div className="mb-4 flex items-center justify-between gap-2">

        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600">
          {technology.category}
        </span>

        <span className="text-[10px] text-slate-500">
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-700">
          <span className="text-amber-400">★</span>
          {technology.rating}
        </span>

      </div>

      {/* Add Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-auto h-9 w-full rounded-lg text-xs font-semibold transition-all ${
          isAdded
            ? "cursor-not-allowed bg-slate-100 text-slate-400"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded
          ? "✓ Added to Stack"
          : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;