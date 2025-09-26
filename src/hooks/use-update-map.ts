import { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import { useMap } from 'react-leaflet';

// actualiza el mapa cuando cambian las props
export const MapUpdater = ({
    center,
    zoom,
}: {
    center: LatLngExpression;
    zoom: number;
}): null => {
    const map = useMap();

    useEffect(() => {
        map.setView(center, zoom);
    }, [center, zoom, map]);

    return null;
}