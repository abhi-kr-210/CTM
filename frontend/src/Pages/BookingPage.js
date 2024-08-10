import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

// Add your Mapbox access token here
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

function BookingPage() {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainerRef }) => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11', // Map style
        center: [-74.5, 40], // Initial coordinates [longitude, latitude]
        zoom: 9, // Initial zoom level
      });

      map.on('load', () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainerRef });

    return () => map && map.remove();
  }, [map]);
  return (
    <div>
    {/* The map container */}
    <div
      ref={mapContainerRef}
      style={{
        width: '100%',
        height: '500px',
      }}
    />
  </div>
  )
}

export default BookingPage


