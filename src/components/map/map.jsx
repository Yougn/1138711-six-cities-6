import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {propCard} from '../../common/propTypes';


import 'leaflet/dist/leaflet.css';

const Map = ({elements, offer}) => {

  const mapRef = useRef();
  const mapCenter = {
    lat: elements[0].city.location.latitude,
    lng: elements[0].city.location.longitude,
    zoom: elements[0].city.location.zoom
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
        lat: element.location.latitude,
        lng: element.location.longitude,
        zoom: element.location.zoom
      },
      {
        icon: customIcon
      })
        .addTo(mapRef.current);
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
      lat: offer.location.latitude,
      lng: offer.location.longitude,
      zoom: offer.location.zoom},
    {icon: currentOffer})
    .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, [elements]);

  useEffect(() => {
    mapRef.current.setView(mapCenter, 13);
  }, [mapCenter]);

  return (
    <div></div>
  );
};

Map.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape(propCard)).isRequired,
  offer: PropTypes.shape(propCard)
};

export default Map;
