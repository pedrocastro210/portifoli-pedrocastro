import React, { useRef, useEffect } from "react";
import "animate.css";

interface Props {
  elementId: string;
  project: any;
}

const AnimatedElement: React.FC<Props> = ({ elementId, project }) => {
  const meuElementoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const meuElemento = meuElementoRef.current;
    let direction = "";

    if (elementId === "left") {
      direction = "Left";
    } else {
      direction = "Right";
    }

    if (meuElemento) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("invisible");
              entry.target.classList.add(
                "animate__animated",
                `animate__fadeIn${direction}`
              );
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0 }
      );

      observer.observe(meuElemento);

      return () => {
        observer.unobserve(meuElemento);
      };
    }
  }, []);

  return (
    <div ref={meuElementoRef} id={elementId} className="invisible top-projects">
      {project}
    </div>
  );
};

export default AnimatedElement;
