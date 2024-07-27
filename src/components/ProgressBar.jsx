import { useEffect } from "react";

const ProgressBar = () => {
  useEffect(() => {
    const progressPath = document.querySelector(".progress-wrap path");
    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = "none";
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scroll = window.pageYOffset;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    const offset = 50;

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > offset) {
        document
          .querySelector(".progress-wrap")
          .classList.add("active-progress");
      } else {
        document
          .querySelector(".progress-wrap")
          .classList.remove("active-progress");
      }
    });

    document
      .querySelector(".progress-wrap")
      .addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return false;
      });

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="progress-wrap">
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
};

export default ProgressBar;
