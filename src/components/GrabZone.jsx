import { useState, useEffect } from "react";
import { useHover } from "./hooks.js";
import Grabber from "./Grabber.jsx";
import PropTypes from "prop-types";

const GrabZone = ({ cursorGrabbed, gameOver, onCursorGrabbed }) => {
  const [outerRef, outerHovered] = useHover();
  const [innerRef, innerHovered] = useHover();
  const [isExtended, setExtendedArm] = useState(false);

  let state = "waiting";
  if (outerHovered) {
    state = "stalking";
  }
  if (innerHovered) {
    state = "grabbing";
  }
  if (cursorGrabbed) {
    state = "grabbed";
  }
  if (gameOver) {
    state = "shaka";
  }

  // If state is grabbing for a long time, they're being clever!
  useEffect(() => {
    let timer;
    if (state === "grabbing") {
      timer = setTimeout(() => {
        // Not so clever now, are they?
        setExtendedArm(true);
        timer = null;
      }, 2000);
    }
    return () => {
      setExtendedArm(false);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [state]);

  return (
    <div className="grab-zone" ref={outerRef}>
      <div className="grab-zone__debug">
        <strong>Debug info:</strong>
        <p>Current state: {state}</p>
        <p>Extended arm: {isExtended ? "Yes" : "No"}</p>
      </div>
      <div className="grab-zone__danger" ref={innerRef}>
        <Grabber
          state={state}
          gameOver={gameOver}
          extended={isExtended}
          onCursorGrabbed={onCursorGrabbed}
        />
      </div>
    </div>
  );
};

GrabZone.propTypes = {
  cursorGrabbed: PropTypes.bool.isRequired,
  gameOver: PropTypes.bool.isRequired,
  onCursorGrabbed: PropTypes.func.isRequired,
};

export default GrabZone;
