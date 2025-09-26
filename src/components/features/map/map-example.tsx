"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { JSX } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { MapExampleProps } from "@/types/map-types";
import { TILE_PROVIDERS } from "@/const/map";
import { MapUpdater } from "@/hooks/use-update-map";


export const MapExample = ({
    zoom,
    posix,
    tileStyle,
    textMarker,
}: MapExampleProps): JSX.Element => {
    const tileProvider = TILE_PROVIDERS[tileStyle];

    return (
        <MapContainer
            center={posix}
            zoom={zoom}
            scrollWheelZoom
            style={{
                height: "100%",
                width: "100%",
                borderRadius: "12px",
                zIndex: ""
            }}
            zoomControl
            dragging
            className="leaflet-container-custom z-0"
        >
            <MapUpdater center={posix} zoom={zoom} />

            <TileLayer attribution={tileProvider.attribution} url={tileProvider.url} />

            <Marker position={posix} draggable={false}>
                <Popup className="custom-popup">
                    <div className="text-center p-2">
                        <div className="w-6 h-6 bg-blue-600 rounded-full mx-auto mb-2"></div>
                        <h3 className="font-bold text-gray-800">{textMarker}</h3>
                        <div className="mt-2 text-xs text-gray-500">
                            <p> Coordenadas: {posix.toString()}</p>
                        </div>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    );
};
