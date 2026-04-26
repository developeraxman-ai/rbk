"use client";

import { useMemo, useState } from "react";

import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const filters = [
  { label: "All", value: "all" },
  { label: "Event", value: "event" },
  { label: "Celebrity", value: "celebrity" },
  { label: "Wedding", value: "wedding" },
  { label: "Commercial", value: "commercial" },
];

export default function PortfolioGrid({ projects }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <div className="space-y-8 sm:space-y-10">
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:gap-3 sm:px-0 sm:pb-0">
        {filters.map((filter) => (
          <Button
            key={filter.value}
            variant={activeFilter === filter.value ? "default" : "outline"}
            size="sm"
            className={
              activeFilter === filter.value
                ? "shrink-0"
                : "shrink-0 border-white/10 bg-white/[0.02]"
            }
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
        {filteredProjects.map((project) => (
          <div key={project._id} className="break-inside-avoid">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
