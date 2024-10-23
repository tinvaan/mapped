
const route = '/v2/real-time/api/'
const host = 'https://api-open.data.gov.sg'

const markers = {}
markers.populate = async function (property) {
    const transformed = []

    if (property === 'rainfall' || property === 'relative-humidity') {
        let rs = await fetch(host + route + property)
        rs = await rs.json()
        console.log(JSON.stringify(rs, null, 2))

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

export default markers