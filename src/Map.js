import React from "react";

import Styled from "styled-components";

const MapContainer = Styled.div`    
    margin: 10px 0 0 0;
    height: 400px;
`;

class Map extends React.Component {
  render() {
    return <MapContainer>Map</MapContainer>;
  }
}

export default Map;
