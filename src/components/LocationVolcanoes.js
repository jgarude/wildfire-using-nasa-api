import {Icon} from "@iconify/react";
import locationountain from "@iconify/icons-mdi/mountain"

const LocationVolcanoes = ({lat, lng, onClick}) => {
    return (
        <div>
            <div className="location-volcanos" onClick = {onClick}>
                <Icon icon ={locationountain} className="location-icon"/>
            </div>
        </div>
    )
}

export default LocationVolcanoes
