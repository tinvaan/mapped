import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import Graphic from "@arcgis/core/Graphic"
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"

import markers from "./data"
import "../css/style.css";


const map = new Map({basemap: "hybrid"})
const graphicsLayer = new GraphicsLayer()

async function draw(points) {
    // const points = await markers.populate('rainfall')

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

export async function populate(airTemp, humidity, rainfall) {
    const points = []
    let ats, hmd, rfall

    if (airTemp) {
        ats = await markers.populate('air-temperature')
    }

    if (humidity) {
        hmd = await markers.populate('relative-humidity')
    }

    if (rainfall) {
        rfall = await markers.populate('rainfall')
    }

    points.push(...ats)
    points.push(...hmd)
    points.push(...rfall)
    return points
}

export async function onSubmit() {
    const points = await populate(
        document.getElementById('airTemp'),
        document.getElementById('humidity'),
        document.getElementById('rainfall')
    )
    await draw(points)
}

window.onSubmit = onSubmit
export default new MapView({
    container: "viewDiv",
    map: map,
    zoom: 11,
    center: [103.8666, 1.30105] // longitude, latitude -- {Nicoll Highway}
})
