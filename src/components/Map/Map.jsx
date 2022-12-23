import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import './map.css'


// let location = {
//   address: '501 Mariner Way, Coquitlam, BC',
//   lat: 49.25,
//   lng: -122.82,
// }

export default function Map(props){
  const defaultProps = {
    center: {
      lat: 49.25281175491787, 
      lng: -122.81645190370614
    },
    zoom: 10
  };

  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{props.title}</p>
    </div>
  )


  return (
    // Important! Always set the container height explicitly
    <div className="map" style={{ height: '30rem', width: '20rem', overflow: 'hidden' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAPSKEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <LocationPin
          lat={props.lat}
          lng={props.lng}
          text={props.title}
        />
      </GoogleMapReact>
    </div>
  );
}

// const defaultProps = {
//   center: {
//     lat: 10.99835602,
//     lng: 77.01502627
//   },
//   zoom: 11
// };

// const Map = ({ location, zoomLevel }) => (
//   <div className="map-stuff" style={{ height: '500px', width: '500px' }}>
//     <h2 className="map-h2">Mundy Park</h2>

//     <div className="google-map" style={{ height: '500px', width: '500px' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAPSKEY}}
//         zoom={14}
//         center={location}
//       >
//         <LocationPin
//           lat={location.lat}
//           lng={location.lng}
//           text={location.address}
//         />
//       </GoogleMapReact>
//     </div>
//   </div>
// )
