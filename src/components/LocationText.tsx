import React from "react"
import pin from '../images/pin.png';


interface LocationTextProps {
    location: string;
    googleMapsUrl: string;  
}

export default function LocationText({location, googleMapsUrl}: LocationTextProps){
    return(
        <div className="locationtext">
            <div className="countryimgt">
                <img src={pin} alt="pin" className="pinimg"/>
                <div className="country"> {location} </div>
            </div>
            <a href={googleMapsUrl} className="gmapurl"> View on Google Maps </a>
        </div>
        
    )
}