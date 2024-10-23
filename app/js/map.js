import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import Graphic from "@arcgis/core/Graphic"
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"

import markers from "./data"
import "../css/style.css";


const map = new Map({basemap: "topo-vector"})
const graphicsLayer = new GraphicsLayer()

async function draw() {
    const points = await markers.populate('rainfall')

    for (let point of points) {
        graphicsLayer.add(new Graphic({
            geometry: {
                type: "point",
                longitude: point.location.longitude,
                latitude: point.location.latitude
            },
            symbol: {
                type: "simple-marker",
                color: [226, 119, 40],  // Orange
                outline: {
                    color: [255, 255, 255], // White
                    width: 1
                }
            },
            attributes: {
                station: point.name,
                description: `${point.value} ${point.unit} ${point.reading} at ${point.timestamp}`
            },
            popupTemplate: {title: "{station}", content: "{description}"}
        }))
    }

    map.add(graphicsLayer)
    return map
}

await draw()
export default new MapView({
    container: "viewDiv",
    map: map,
    zoom: 4,
    center: [15, 65] // longitude, latitude
})
