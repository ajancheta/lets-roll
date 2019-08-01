import React from 'react';
import LocationSummary from './LocationSummary';
import { Container } from '@material-ui/core';

const LocationList = ({locations}) => {

    return (
        <div>
            { locations && locations.map(location => {
               return (
                    <LocationSummary location={location} key={location.id} />
               )
            })}
        </div>
    )
}

export default LocationList;