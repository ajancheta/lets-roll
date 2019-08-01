import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationList from '../locations/LocationList';

class Dashboard extends React.Component {
    render(){
        const { locations } = this.props;
        
        return (
            <div>
                <LocationList />
            </div>
            
        )

    }

};

const mapStateToProps = (state) => {
    return {
        locations: state.location.locations
    }
}

export default connect(mapStateToProps)(Dashboard);
