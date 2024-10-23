import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import Graphic from "@arcgis/core/Graphic"
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"

import "../css/style.css";

const map = new Map({basemap: "topo-vector"})
const graphicsLayer = new GraphicsLayer()

graphicsLayer.add(new Graphic({
    geometry: {
        type: "point",
        longitude: -118.80657463861,
        latitude: 34.0005930608889
    },
    symbol: {
        type: "simple-marker",
        color: [226, 119, 40],  // Orange
        outline: {
            color: [255, 255, 255], // White
            width: 1
        }
    },
    attributes: {Name: "Random Point", Description: "This is a random point on a map"},
    popupTemplate: {title: "{Name}", content: "{Description}"}
}))
map.add(graphicsLayer)

export default new MapView({
    container: "viewDiv",
    map: map,
    zoom: 4,
    center: [15, 65] // longitude, latitude
})
