import React from "react";
import LocationText from "./LocationText";

interface CardProps {
    imageUrl: string;
    location: string;
    googleMapsUrl: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
  }


  export default function Card({
    imageUrl,
    location,
    googleMapsUrl,
    title,
    startDate,
    endDate,
    description,
  }: CardProps): JSX.Element {
    return (
      <div className="card">
        <img src={imageUrl} alt="Location" className="cardimage" />
        <div className="cardtext">
          <LocationText location={location} googleMapsUrl={googleMapsUrl} />
          <div className="triptitle">{title}</div>
          <div className="dates">
            {startDate} - {endDate}
          </div>
          <div className="description">{description}</div>
        </div>
      </div>
    );
  }