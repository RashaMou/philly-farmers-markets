// import React, { useEffect, useContext } from "react";
// import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { MarketsContext } from "../contexts/MarketsContext";
// import getMarkets from "../utils/getMarkets";

// const PhillyMap = () => {
//   const {
//     setMasterMarketsArray,
//     setFilteredMarkets,
//     filteredMarkets,
//     selectedMarket,
//     setSelectedMarket,
//   } = useContext(MarketsContext);

//   //   useEffect(() => {
//   //     getMarkets(setMasterMarketsArray, setFilteredMarkets);
//   //     console.log("Philly Map");
//   //   }, [filteredMarkets, setFilteredMarkets, setMasterMarketsArray]);

//   useEffect(() => {
//     console.log("Philly Map");
//   }, []);

//   return (
//     <MapContainer center={[39.952414, -75.146301]} zoom={12}>
//       <TileLayer
//         url="https://api.mapbox.com/styles/v1/rjmh/ckkbqic0c4fzt17ntqcy6bc43/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmptaCIsImEiOiJja2ticWgyYngwZWduMndwY2RjZmhtMjltIn0.QOeHWiCR4DqKvx-l5nzUvQ"
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
//       />
//       {filteredMarkets.map((market, index) => {
//         return (
//           <Marker key={index}>
//             position={[market.geometry.y, market.geometry.x]}
//           </Marker>
//           //   <Marker
//           //     key={index}
//           //     position={{ lat: market.geometry.y, lng: market.geometry.x }}
//           //     onClick={() => {
//           //       setSelectedMarket(market);
//           //       setMapCenter({ lat: market.geometry.y, lng: market.geometry.x });
//           //     }}
//           //     icon={{
//           //       url: require("../assets/marker3.png"),
//           //       scaledSize: { width: 65, height: 65 },
//           //     }}
//           //   />
//         );
//       })}
//     </MapContainer>
//   );
// };

// export default PhillyMap;
