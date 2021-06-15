import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import "./Map.css";
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxpc2hhc2FuIiwiYSI6ImNrcHdwbTFnbjB5djIyd3A5OXFhcnF4ZXgifQ.-3dy9JgsGxqUFEJXmorTWg";

var stores = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [36.3, 33.5],
      },
      properties: {
        phoneFormatted: "(202) 234-7336",
        phone: "2022347336",
        address: "1471 P St NW",
        city: "Washington DC",
        country: "United States",
        crossStreet: "at 15th St NW",
        postalCode: "20005",
        state: "D.C.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [36.23, 33.45],
      },
      properties: {
        phoneFormatted: "(202) 507-8357",
        phone: "2025078357",
        address: "2221 I St NW",
        city: "Washington DC",
        country: "United States",
        crossStreet: "at 22nd St NW",
        postalCode: "20037",
        state: "D.C.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [36.22, 33.43],
      },
      properties: {
        phoneFormatted: "(202) 387-9338",
        phone: "2023879338",
        address: "1512 Connecticut Ave NW",
        city: "Washington DC",
        country: "United States",
        crossStreet: "at Dupont Circle",
        postalCode: "20036",
        state: "D.C.",
      },
    },
  ],
};

const Marker = ({ onClick, children, feature }) => {
  const _onClick = (e) => {
    onClick(feature.properties.address);
  };

  return (
    <button onClick={_onClick} className="marker">
      {children}
    </button>
  );
};

const Map = () => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [36, 33],
      zoom: 12,
    });

    // Render custom marker components
    stores.features.forEach((feature) => {
      // Create a React ref
      const ref = React.createRef();
      // Create a new DOM node and save it to the React ref
      ref.current = document.createElement("div");
      // Render a Marker Component on our new DOM node
      ReactDOM.render(
        <Marker onClick={markerClicked} feature={feature} />,
        ref.current
      );

      // Create a Mapbox Marker at our new DOM node
      new mapboxgl.Marker(ref.current)
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("click", (e) => {
      let coordinates = e.lngLat;
      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(
          "if you sure of your location click save under the map" + coordinates
        )
        .addTo(map);
    });
    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const markerClicked = (title) => {
    window.alert(title);
  };

  return (
    <div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default Map;
