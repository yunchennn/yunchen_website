import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import { csv } from "d3-fetch";
import { schemeBuPu } from "d3-scale-chromatic";
import 'motion-ui';
import 'motion-ui/dist/motion-ui.css';
import markersData from "../data/np.json"



const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas/states-10m.json";
// const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const Map = () => {
  const [data, setData] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null); // Track the currently selected marker
  const [markers, setMarkers] = useState(markersData);

  useEffect(() => {
    csv("/np_2024.csv").then(counties => {
      setData(counties);
    });
  }, []);
  

  const colorScale = scaleQuantize()
  .domain([Math.min(...data.map(d => d.np_rate)), Math.max(...data.map(d => d.np_rate))])
  .range(schemeBuPu[9]); // Dynamic color scale based on data
  
  const [hoveredState, setHoveredState] = useState(null);

    return (
        <div style={{ display: "flex", width: "80vw", height: "100vh", margin: "1.5rem"}}>
          {/* Map Container */}
          
          <div style={{ flex: 7, position: "relative" }}> {/* 70% width */}
            
            <ComposableMap projection="geoAlbersUsa">
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const cur = data.find((s) => s.id === geo.id);
                    const isHovered = hoveredState === geo.id;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={cur ? colorScale(cur.np_rate) : "#EEE"}
                        style={{
                          fillOpacity: isHovered ? 0.9 : 0.7, // Change opacity on hover
                          stroke: "#FFF",
                          strokeWidth: 0.5,
                          cursor: "pointer"
                        }}
                        onMouseEnter={() => setHoveredState(geo.id)}
                        onMouseLeave={() => setHoveredState(null)}
                      />
                    );
                  })
                }
              </Geographies>
              {/* Render Markers */}
              {markers.map((marker, index) => (
                <Marker
                  key={index}
                  coordinates={marker.coordinates}
                  onMouseEnter={() => setSelectedMarker(marker)}
                >
                  <image
                    href={
                      marker.arrived === true
                        ? "/image/np/np_Arrived.png"
                        : "/image/np/np_notArrive.png"
                    }
                    width={selectedMarker === marker ? "30" : "20"}
                    height={selectedMarker === marker ? "30" : "20"}
                    transform={`translate(-${selectedMarker === marker ? 15 : 10}, -${
                      selectedMarker === marker ? 15 : 10
                    })`}
                  />
                </Marker>
              ))}
            </ComposableMap>

          </div>
      
          {/* Card Display */}
          <div style={{ flex: 3, display: "flex", justifyContent: "center", alignItems: "center" }}> {/* 30% width */}
            {selectedMarker ? (
              <div
                style={{
                  width: "90%",
                  height: "80%",
                  padding: "15px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "white",
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                {/* Image at the top */}
                <img
                  src={selectedMarker.image}
                  alt={selectedMarker.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
      
                {/* Title */}
                <h3 style={{ margin: "10px 0 5px" }}>{selectedMarker.name} National Park</h3>
      
                {/* Coordinates and Status */}
                <p style={{ margin: "5px 0", textAlign: "center" }}></p>
                <p style={{ margin: "5px 0", textAlign: "center" }}>
                  Status:{" "}
                  <span
                    style={{
                      color: selectedMarker.arrived === true ? "green" : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {selectedMarker.arrived === true ? "Visited" : "Not Visited"}
                  </span>
                </p>
      
                {/* Additional Text */}
                <p style={{ marginTop: "10px", textAlign: "center", fontSize: "14px" }}>
                  {selectedMarker.comment}
                </p>
              </div>
            ) : (
              <div
                style={{
                  width: "90%",
                  height: "90%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "white",
                  color: "gray",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                Select a marker to view details
              </div>
            )}
          </div>
        </div>
      );
};

export default Map;
