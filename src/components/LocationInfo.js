import {Icon} from "@iconify/react";
import closeCircle from "@iconify/icons-mdi/close-circle"

const LocationInfo = ({info, onClick}) => {
    return (
        <div className="info">
            <ul>
                <li>{info.id}</li>
                <li>{info.title}</li>
            </ul>
            <button className="close-icon" onClick={onClick}> <Icon icon ={closeCircle} /></button>
        </div>
    )
}

export default LocationInfo
