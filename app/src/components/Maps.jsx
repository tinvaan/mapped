
import Graphic from "@arcgis/core/Graphic"
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"

import { useEffect, useRef } from "react"


const route = '/v2/real-time/api/'
const host = 'https://api-open.data.gov.sg'

const map = new Map({basemap: "hybrid"})
const graphicsLayer = new GraphicsLayer()


async function populate(property) {
  const transformed = []

  if (property === 'rainfall' || property === 'relative-humidity') {
      let rs = await fetch(host + route + property)
      rs = await rs.json()

      const time = rs.data.readings[0].timestamp
      const unit = rs.data.readings[0].readingUnit == "percentage" ? "%" : "mm"

      for (let reading of rs.data.readings[0].data) {
          const station = rs.data.stations.find((stn => stn.id == reading.stationId))
          station.value = reading.value
          station.unit = unit
          station.timestamp = time
          station.reading = (property === 'rainfall') ? "rainfall" : "humidity"

          transformed.push(station)
      }
  }

  return transformed
}

async function draw(points) {
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

export default function MapArea() {
  const mapDiv = useRef(null)
  useEffect(() => {
    if (mapDiv.current) {
      const view = new MapView({
        container: mapDiv.current,
        map: map,
        zoom: 11,
        center: [103.8666, 1.30105] // longitude, latitude -- {Nicoll Highway}
      })
      return () => view
    }
  }, [])

  return (
    <>
      <div
        ref={mapDiv}
        className="mapDiv"
        style={{height: '100vh', width: "100%"}}
      />
    </>
  )
}
