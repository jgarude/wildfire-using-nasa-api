import {useState} from 'react';

import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationVolcanoes from "./LocationVolcanoes";
import LocationInfo from "./LocationInfo";

const Map = ({eventData, center, zoom}) => {
    const [locationInfoData, setLocationInfo] = useState(null);
    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8){
            return <LocationMarker key={ev.id} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({id: ev.id, title: ev.title})}/>
        }
        return null
    })
    return (
        <div className="map">
            <GoogleMapReact 
                bootstrapURLKeys={{key:'AIzaSyBIk7jWfFWtqSFCUJt7NWxMD74Skmz8K3k'}}
                defaultCenter = {center}
                defaultZoom = {zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfoData && <LocationInfo info = {locationInfoData} onClick={() => {setLocationInfo(false)}}/>}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
