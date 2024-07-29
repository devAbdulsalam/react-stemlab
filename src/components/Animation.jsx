import PropTypes from "prop-types";
// const COLORS = [
//   "#bbf7d0",
//   "#99f6e4",
//   "#bfdbfe",
//   "#ddd6fe",
//   "#f5d0fe",
//   "#fed7aa",
//   "#fee2e2",
// ];
const TAGS = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "Tailwind",
  "React",
  "Next.js",
  "Node.Js",
  "Git",
  "Angular",
  "TypeScript",
  "Nuxt.js",
  "Gatsby",
  "Vue",
  "MongoDB",
  "UI/UX",
  "SVG",
  "animation",
  "webdev",
];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

InfiniteLoopSlider.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number.isRequired,
  reverse: PropTypes.bool,
};

const Tag = ({ text }) => (
  <div className="tag">
    <span>#</span> {text}
  </div>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

const Animation = () => (
  <div className="animation">
    <div className="head">
      <h1>Master the Modern Web Development Stack</h1>
      <p>
        Empower Your Skills with Leading Technologies in Frontend, Backend, and
        Design
      </p>
    </div>
    <div className="tag-list">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 5000, DURATION + 5000)}
          reverse={i % 2}
        >
          {shuffle(TAGS)
            .slice(0, TAGS_PER_ROW)
            .map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
        </InfiniteLoopSlider>
      ))}
      <div className="fade" />
    </div>
  </div>
);

export default Animation;
