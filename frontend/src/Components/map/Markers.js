import React from "react";

const Markers = ({ onClick, children, feature }) => {
  const _onClick = (e) => {
    onClick({
      coord: feature.geometry.coordinates,
      properties: feature.properties,
    });
  };

  return (
    <button onClick={_onClick} className="marker">
      {children}
    </button>
  );
};
export default Markers;
