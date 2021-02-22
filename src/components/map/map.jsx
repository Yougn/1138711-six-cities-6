import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {propCard} from '../../common/propTypes';

import 'leaflet/dist/leaflet.css';

const Map = ({city, elements, offer}) => {

  const mapRef = useRef();
  useEffect(() => {
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

    elements.forEach((element) => {
      leaflet.marker({
        lat: element.city.location.latitude,
        lng: element.city.location.longitude
      },
      {
        icon: customIcon
      })
        .addTo(mapRef.current);

      return () => {
        mapRef.current.remove();
      };
    });

    const currentOffer = leaflet.icon({
      iconUrl: `./img/pin-active.svg`,
      iconSize: [30, 30]
    });

    if (offer === null) {
      return;
    }

    leaflet.marker({lat: offer.city.location.latitude, lng: offer.city.location.longitude},
        {icon: currentOffer})
    .addTo(mapRef.current);

  }, [elements]);

  return (
    <div ref={mapRef}></div>
  );
};

Map.propTypes = {
  city: PropTypes.array.isRequired,
  elements: PropTypes.arrayOf(PropTypes.shape(propCard)).isRequired,
  offer: PropTypes.shape(propCard)
};

export default Map;
