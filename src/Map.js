import React from "react";
import Styled from "styled-components";

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MapContainer = Styled.div`    
    margin: 10px 0 0 0;
    height: 400px;
`;

// FIXME hook up this placeholder MAP

const GettingStartedGoogleMap = withGoogleMap(props =>
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={4}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  />
);

class Map extends React.Component {
  state = {
    markers: [
      {
        position: {
          lat: 25.0112183,
          lng: 121.52067570000001
        },
        key: `Taiwan`,
        defaultAnimation: 2
      }
    ]
  };

  handleMapLoad = this.handleMapLoadHandler.bind(this);
  handleMapClick = this.handleMapClickHandler.bind(this);
  handleMarkerRightClick = this.handleMarkerRightClickHandler.bind(this);

  handleMapLoadHandler(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClickHandler(event) {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now() // Add a key property for: http://fb.me/react-warning-keys
      }
    ];
    this.setState({
      markers: nextMarkers
    });

    if (nextMarkers.length === 3) {
      this.props.toast(
        `Right click on the marker to remove it`,
        `Also check the code!`
      );
    }
  }

  handleMarkerRightClickHandler(targetMarker) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter(
      marker => marker !== targetMarker
    );
    this.setState({
      markers: nextMarkers
    });
  }
  render() {
    return (
      <MapContainer>
        <GettingStartedGoogleMap
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      </MapContainer>
    );
  }
}

export default Map;
