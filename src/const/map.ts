import { MapStyle } from "@/types/map-types";

export const TILE_PROVIDERS: Record<
    MapStyle,
    { url: string; attribution: string }
> = {
    light: {
        url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>',
    },
    satellite: {
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        attribution: '&copy; <a href="https://www.esri.com/">Esri</a>',
    },
    outdoors: {
        url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://opentopomap.org">OpenTopoMap</a>',
    },
    standard: {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
};