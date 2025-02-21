import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const Grid = () => {
  return (
    <section id="services">
      <BentoGrid>
        {[
          {
            title: "Consultation",
            description:
              "Helping with architecture, optimization, and system development",
            id: 0,
          },
          {
            title: "Frontend Development",
            description: "Building modern, high-performance user interfaces",
            id: 1,
          },
          {
            title: "Backend Development",
            description: "Scalable and efficient APIs for web applications",
            id: 2,
          },
          {
            title: "Fullstack Development",
            description: "Developing complete systems from frontend to backend",
            id: 3,
          },
        ].map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
