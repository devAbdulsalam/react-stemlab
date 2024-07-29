import PropTypes from "prop-types";

const TAGS = [
  "Innovate",
  "Enterprenuer",
  "Build",
  "Creative",
  "Distrupt",
  "Science",
  "Technology",
  "Engeneering",
  "Mathematic",
  "Empowerment",
  "Product",
  "Sustainability",
  "Inclusion",
  "collaboration",
  "Values",
  "Lunch",
  "Scale",
  "UI/UX",
  "Software",
  "MobileApp",
  "Web dev",
  "Motivation",
];

const DURATION = 150000;
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
    <div className="card-texture"></div>
    <div className="head">
      <h1> OUR MISSION & VISION</h1>
      <div className="text-lg mt-4 max-w-xl mx-auto leading-relaxed">
        <p className="">
          Our mission at StemLab is to help empower women, youth, and
          marginalized communities through innovative educational programs and
          entrepreneurial support.
        </p>
        <p className="my-6">
          Our vision is to be a catalyst for technological innovation in
          Northern Nigeria, creating opportunities and fostering continuous
          growth through STEM education.
        </p>
      </div>
    </div>
    <div className="tag-list">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 5000, DURATION + 5000)}
          reverse={!!(i % 2)}
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
