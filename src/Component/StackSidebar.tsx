import type { Technology } from "../../types/technology";

type StackSidebarProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const StackSidebar = ({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) => {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-5">
      
      {/* Header */}
      <div>
        <h3 className="text-base font-bold text-slate-900">
          Your Stack
        </h3>

        <p className="mt-1 text-xs text-slate-400">
          {stack.length}{" "}
          {stack.length === 1 ? "Technology" : "Technologies"} Selected
        </p>
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="flex min-h-[180px] flex-col items-center justify-center text-center">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-slate-300 text-xl text-slate-400">
            +
          </div>

          <p className="text-xs text-slate-400">
            Your stack is empty
          </p>
        </div>
      ) : (
        /* Selected Technologies */
        <div className="mt-5 space-y-2">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-8 w-8 object-contain"
              />

              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-slate-900">
                  {technology.name}
                </p>

                <p className="text-[10px] text-slate-400">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="text-lg text-slate-400 transition hover:text-red-500"
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All */}
      <button
        onClick={onRemoveAll}
        disabled={stack.length === 0}
        className="mt-5 h-9 w-full rounded-lg border border-red-200 bg-white text-xs font-semibold text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Remove All
      </button>
    </aside>
  );
};

export default StackSidebar;