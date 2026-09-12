import type { Technology } from "../../types/technology";

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

const badgeColorMap: Record<string, string> = {
  Popular: "bg-sky-50 text-sky-500",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-500",
  Standard: "bg-emerald-50 text-emerald-600",
  "Top SQL": "bg-blue-50 text-blue-500",
  Cache: "bg-red-50 text-red-500",
  Ubiquitous: "bg-amber-50 text-amber-600",
  Essential: "bg-sky-50 text-sky-500",
  Robust: "bg-blue-50 text-blue-500",
  Modern: "bg-cyan-50 text-cyan-600",
  Containers: "bg-sky-50 text-sky-500",
};

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  const badgeClass =
  badgeColorMap[technology.badge ?? ""] ?? "bg-slate-100 text-slate-600";

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

        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${badgeClass}`}
        >
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

      {/* Add to Stack */}
      <button
        onClick={() => onAdd(technology)}
        className={`mt-auto h-9 w-full rounded-lg text-xs font-semibold transition-all ${
          isAdded
            ? "bg-slate-100 text-slate-400 hover:bg-slate-200"
            : "brand-gradient-bg text-white hover:opacity-95"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;