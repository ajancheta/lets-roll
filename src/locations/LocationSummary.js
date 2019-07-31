import React from 'react';

const LocationSummary = ({location}) => {
    return (
        <div>
            <div>
                <p>{location.name}</p>
                <p>{location.address}</p>
            </div>
        </div>
    )
}

export default LocationSummary;