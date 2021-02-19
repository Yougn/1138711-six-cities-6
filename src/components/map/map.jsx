import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {propCard} from '../../common/propTypes';

import 'leaflet/dist/leaflet.css';

const Map = ({offers}) => {

  const mapRef = useRef();

  useEffect(() => {
    const city = [52.38333, 4.9];
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city[0],
        lng: city[1]
      },
      zoom: 12,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    const customIcon = leaflet.icon({
      iconUrl: `./img/pin.svg`,
      iconSize: [30, 30]
    });

    offers.forEach((offer) => {
      leaflet.marker({
        lat: offer.city.location.latitude,
        lng: offer.city.location.longitude
      },
      {
        icon: customIcon
      })
        .addTo(mapRef.current);

      return () => {
        mapRef.current.remove();
      };
    });
  }, [offers]);

  return (
    <div id="map" style={{height: `750px`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(propCard)).isRequired
};

export default Map;
