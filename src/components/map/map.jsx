import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {propCard} from '../../common/propTypes';

import 'leaflet/dist/leaflet.css';

const Map = ({elements, offer}) => {

  const mapRef = useRef();
  const mapCenter = {
    lat: elements[0].city.location.latitude,
    lng: elements[0].city.location.longitude
  };

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: mapCenter,
      zoomControl: false,
      marker: true,
      layers: [
        leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
      ]
    });

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

    if (offer === null) {
      return () => {
        mapRef.current.remove();
      };
    }

    const currentOffer = leaflet.icon({
      iconUrl: `./img/pin-active.svg`,
      iconSize: [30, 30]
    });

    leaflet.marker({
      lat: offer.city.location.latitude,
      lng: offer.city.location.longitude},
    {icon: currentOffer})
    .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, [elements]);

  useEffect(() => {
    mapRef.current.setView(mapCenter, 12);
  }, [mapCenter]);

  return (
    <div></div>
  );
};

Map.propTypes = {
  city: PropTypes.array.isRequired,
  elements: PropTypes.arrayOf(PropTypes.shape(propCard)).isRequired,
  offer: PropTypes.shape(propCard)
};

export default Map;
