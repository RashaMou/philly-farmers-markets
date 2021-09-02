import qs from "qs";

export const arcGisPostRequest = {
  method: "post",
  url: "https://services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/Farmers_Markets/FeatureServer/0/query",
  data: qs.stringify({
    f: "json",
    where: "1=1",
    outSr: "4326",
    outFields: "*",
  }),
  headers: {
    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
  },
};
