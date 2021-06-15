import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import { doctors } from "./mapInfo";
import Markers from "./Markers";
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxpc2hhc2FuIiwiYSI6ImNrcHdwbTFnbjB5djIyd3A5OXFhcnF4ZXgifQ.-3dy9JgsGxqUFEJXmorTWg";

const Map = ({ getCoordinates, type }) => {
  const mapContainerRef = useRef(null);
  const [location, setLocation] = useState();

  const saveLocation = (e) => {
    e.preventDefault();
    getCoordinates(location);
  };

  const markerClicked = (info) => {
    alert(info.properties.doctorName);
  };
  const addMarkers = (map) => {
    doctors.features.forEach((feature) => {
      const ref = React.createRef();
      ref.current = document.createElement("div");
      ReactDOM.render(
        <Markers onClick={markerClicked} feature={feature} />,
        ref.current
      );
      new mapboxgl.Marker(ref.current)
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
    });
  };

  let zoom = 12;
  if (type === "signup") zoom = 8;
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [36.3, 33.5],
      zoom,
    });

    if (type !== "signup") addMarkers(map);
    else {
      map.on("click", (e) => {
        let coordinates = e.lngLat;
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(
            "if you're sure of this location click save location under the map"
          )
          .addTo(map);
        setLocation(coordinates);
      });
    }

    return () => map.remove();
  }, []);

  return (
    <div className={`map ${type === "signup" && "map__small"}`}>
      <div className="map-container" ref={mapContainerRef} />
      {type === "signup" && (
        <button className="map__saveLocation" onClick={saveLocation}>
          Save Location
        </button>
      )}
    </div>
  );
};

export default Map;
