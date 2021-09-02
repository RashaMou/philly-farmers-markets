import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMarketsState } from "../contexts/MarketsContext";
import axios from "axios";
import { arcGisPostRequest } from "../utils/arcGisPostRequest";
import marketIcon from "../assets/marker.png";

const PhillyMap = () => {
  let [state, dispatch] = useMarketsState();

  const marketMarker = L.icon({
    iconUrl: marketIcon,
    iconSize: [55, 55],
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  useEffect(() => {
    // TODO: handle errors
    const getMarkets = async () => {
      try {
        let res = await axios(arcGisPostRequest);
        if (res.status === 200) {
          dispatch({ type: "ON_SUCCESS", data: res.data.features });
          console.log(res.data.features);
        }
      } catch (error) {
        // this doesn't work
        dispatch({ type: "ON_FAILURE", data: error });
        alert(error);
      }
    };
    getMarkets();
  }, []);

  return (
    <MapContainer center={[39.952414, -75.146301]} zoom={12}>
      <TileLayer
        url="https://api.mapbox.com/styles/v1/rjmh/ckkbqic0c4fzt17ntqcy6bc43/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmptaCIsImEiOiJja2ticWgyYngwZWduMndwY2RjZmhtMjltIn0.QOeHWiCR4DqKvx-l5nzUvQ"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      {state.filteredMarkets.map((market, index) => {
        return (
          market.attributes.ACTIVE === "Y" && (
            <Marker
              key={index}
              position={[
                parseFloat(market.geometry.y),
                parseFloat(market.geometry.x),
              ]}
              icon={marketMarker}
            >
              <Popup>
                <h4>
                  <a href={market.attributes.MARKET_WEBSITE}>
                    {market.attributes.NAME}
                  </a>
                </h4>
                <div className="marketInfo">
                  <ul>
                    <li>
                      {market.attributes.ADDRESS}, {market.attributes.ZIP}
                    </li>
                    <li>{market.attributes.TIME}</li>
                    <li>{market.attributes.DAY}</li>
                    <li>{market.attributes.MONTHS}</li>
                  </ul>
                </div>
              </Popup>
            </Marker>
          )
        );
      })}
    </MapContainer>
  );
};

export default PhillyMap;
