import PropTypes from "prop-types";
import { useMousePosition, usePosition } from "./hooks.js";

const CONSTANTS = {
  assetPath: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/184729",
};

const ASSETS = {
  head: `${CONSTANTS.assetPath}/head.svg`,
  waiting: `${CONSTANTS.assetPath}/hand.svg`,
  stalking: `${CONSTANTS.assetPath}/hand-waiting.svg`,
  grabbing: `${CONSTANTS.assetPath}/hand.svg`,
  grabbed: `${CONSTANTS.assetPath}/hand-with-cursor.svg`,
  shaka: `${CONSTANTS.assetPath}/hand-surfs-up.svg`,
};

// Preload images
Object.keys(ASSETS).forEach((key) => {
  const img = new Image();
  img.src = ASSETS[key];
});

const Grabber = ({ state, gameOver, extended, onCursorGrabbed }) => {
  const mousePos = useMousePosition();
  const [ref, position] = usePosition();
  //   const hasCursor = false;

  // Calculate rotation of armWrapper
  const x = position.left + position.width * 0.5;
  const y = position.top + position.height * 0.5;
  const angle = gameOver
    ? 0
    : Math.atan2(mousePos.x - x, -(mousePos.y - y)) * (180 / Math.PI);

  // Ensure value is within acceptable range (-75 to 75)
  const rotation = Math.min(Math.max(parseInt(angle), -79), 79);

  const grabberClass = `grabber grabber--${state} ${
    extended && "grabber--extended"
  }`;
  const wrapperStyle = { transform: `rotate(${rotation}deg)` };

  let handImageSrc = ASSETS[state];

  return (
    <div className={grabberClass}>
      <div className="grabber__body"></div>
      <img className="grabber__face" src={ASSETS.head} />
      <div className="grabber__arm-wrapper" ref={ref} style={wrapperStyle}>
        <div className="grabber__arm">
          <img
            className="grabber__hand"
            src={handImageSrc}
            onMouseEnter={onCursorGrabbed}
          />
        </div>
      </div>
    </div>
  );
};

Grabber.propTypes = {
  state: PropTypes.oneOf([
    "waiting",
    "stalking",
    "grabbing",
    "grabbed",
    "shaka",
  ]).isRequired,
  gameOver: PropTypes.bool.isRequired,
  extended: PropTypes.bool.isRequired,
  onCursorGrabbed: PropTypes.func.isRequired,
};

export default Grabber;
