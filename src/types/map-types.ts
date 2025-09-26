export type MapStyle = "standard" | "light" | "satellite" | "outdoors";
export interface MapExampleProps {
    textMarker: string;
    posix: [number, number];
    zoom: number;
    tileStyle: MapStyle;
}


