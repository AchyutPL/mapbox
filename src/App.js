/** @format */
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
function App() {
  const [viewport, setViewport] = useState({
    width: 700,
    height: 500,
    latitude: 27.708727,
    longitude: 85.316536,
    zoom: 15,
    pitch: 50,
  });

  return (
    <div className="main">
      <h1>Mapbox Demo</h1>

      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={
          "pk.eyJ1IjoiYWNoeXV0cGF1ZGVsIiwiYSI6ImNrc2E2dzA5MDBmN2kydW55cWJkdWhxanEifQ.f9qNFGsdO5gFMvcpvjiMjw"
        }
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}>
        <Marker
          latitude={27.708727}
          longitude={85.316536}
          offsetLeft={-20}
          offsetTop={-10}>
          <img src="pin.png" style={{ height: "40px" }} alt="img" />
        </Marker>
        <Marker
          latitude={27.708729}
          longitude={85.316536}
          offsetLeft={-90}
          offsetTop={-10}>
          <img src="pin.png" style={{ height: "40px" }} alt="img" />
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default App;
