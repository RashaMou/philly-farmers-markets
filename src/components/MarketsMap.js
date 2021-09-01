// import React, { useContext, useEffect, useState } from "react";
// import {
//   GoogleMap,
//   withGoogleMap,
//   Marker,
//   InfoWindow,
// } from "react-google-maps";
// import LocationContext from "../contexts/LocationContext";
// import getMarkets from "../utils/getMarkets";

// const MarketsMap = () => {
//   const {
//     setMasterMarketsArray,
//     setFilteredMarkets,
//     filteredMarkets,
//     selectedMarket,
//     setSelectedMarket,
//   } = useContext(LocationContext);

//   const options = {
//     fullscreenControl: false,
//     mapTypeControl: false,
//   };

//   const [mapCenter, setMapCenter] = useState({
//     lat: 39.952583,
//     lng: -75.165222,
//   });

//   useEffect(() => {
//     getMarkets(setMasterMarketsArray, setFilteredMarkets);
//   }, []);

//   return (
//     <GoogleMap
//       defaultZoom={13}
//       center={mapCenter}
//       onClick={() => setSelectedMarket(null)}
//       options={options}
//     >
//       {filteredMarkets.map((market, index) => {
//         return (
//           <Marker
//             key={index}
//             position={{ lat: market.geometry.y, lng: market.geometry.x }}
//             onClick={() => {
//               setSelectedMarket(market);
//               setMapCenter({ lat: market.geometry.y, lng: market.geometry.x });
//             }}
//             icon={{
//               url: require("../assets/marker3.png"),
//               scaledSize: { width: 65, height: 65 },
//             }}
//           />
//         );
//       })}
//       {selectedMarket && (
//         <InfoWindow
//           position={{
//             lat: selectedMarket.geometry.y,
//             lng: selectedMarket.geometry.x,
//           }}
//           onCloseClick={() => {
//             setSelectedMarket(null);
//           }}
//           options={{ pixelOffset: new window.google.maps.Size(0, -62) }}
//         >
//           <div className="infobox">
//             <h2 className="title is-5">{selectedMarket.attributes.NAME}</h2>
//             <h3 className="infobox-subtitle">Address</h3>
//             <p>{selectedMarket.attributes.ADDRESS}</p>
//             <p>{selectedMarket.attributes.ZIP}</p>
//             <h3 className="infobox-subtitle">Neighborhood</h3>
//             <p>{selectedMarket.attributes.NEIGHBORHOOD}</p>
//             <h3 className="infobox-subtitle">Months Open</h3>
//             <p>{selectedMarket.attributes.MONTHS}</p>
//             <h3 className="infobox-subtitle">Day and time</h3>
//             <p>{selectedMarket.attributes.DAY}</p>
//             <p>{selectedMarket.attributes.TIME}</p>
//             {selectedMarket.attributes.ACCEPT_FMNP === "Y" ||
//             selectedMarket.attributes.ACCEPT_PHILLY_FOOD_BUCKS_ ||
//             selectedMarket.attributes.ACCEPT_SNAP_ACCESS === "Y" ? (
//               <h3 className="infobox-subtitle">Food Assistance</h3>
//             ) : null}
//             {selectedMarket.attributes.ACCEPT_FMNP === "Y" && (
//               <p>Farmers Market Nutrition Program</p>
//             )}
//             {selectedMarket.attributes.ACCEPT_PHILLY_FOOD_BUCKS_ === "Y" && (
//               <p>Philly Food Bucks</p>
//             )}
//             {selectedMarket.attributes.ACCEPT_SNAP_ACCESS === "Y" && (
//               <p>SNAP</p>
//             )}
//           </div>
//         </InfoWindow>
//       )}
//     </GoogleMap>
//   );
// };

// export default withGoogleMap(MarketsMap);
