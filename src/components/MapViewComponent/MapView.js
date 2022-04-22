import { useState } from 'react'

import './MapView.scss'

// truyền setMapUrl ra ngoài component
let pullData
MapView.pullData = (data) => {
    pullData(data)
}

function MapView() {
    const [mapUrl, setMapUrl] = useState(undefined)

    pullData = setMapUrl

    return (
        <>
            {mapUrl === undefined ? <p className='map-text'>Chọn tòa nhà để xem mô hình 3D</p> : (mapUrl === '' ? <p className='map-text'>Dữ liệu tòa nhà chưa được lấy</p> : <iframe src={mapUrl} className="map-view" loading='lazy' title={mapUrl}></iframe>)}
        </>
    )
}

export default MapView