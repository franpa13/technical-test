"use client";

import dynamic from "next/dynamic";
import { Map } from "lucide-react";
import { useMemo, useState } from "react";
import { Title } from "../../../components/common/title";
import { LoadMap } from "@/components/features/map/load-map";


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { MapExampleProps, MapStyle } from "@/types/map-types";



export default function Page() {

    const [mapStyle, setMapStyle] = useState<MapStyle>("standard");

    // Lzazyy load
    const MapLazy = useMemo(
        () =>
            dynamic<MapExampleProps>(
                () =>
                    import("@/components/features/map/map-example").then(
                        (mod) => mod.MapExample || mod
                    ),
                {
                    loading: () => <LoadMap />,
                    ssr: false,
                }
            ),
        []
    );

    return (
        <div className="min-h-screen  bg-gradient-to-br ">
            <div className=" mx-auto">
                <div className="text-center mb-6">
                    <div className="flex justify-center items-center lg:px-6 mt-6 lg:mt-0 gap-2">
                        <Title subtitle="Ubicación: Jujuy, Argentina" icon={<Map className="mt-1" />} title="Mapa Personalizado" />

                    </div>

                </div>

                {/* Selector con shadcn */}
                <div className="flex justify-start mb-4">
                    <Select
                        defaultValue={mapStyle}
                        onValueChange={(value: MapStyle) => setMapStyle(value)}
                    >
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Selecciona estilo" />
                        </SelectTrigger>
                        <SelectContent className="z-[9999]">
                            <SelectItem value="standard">Estándar</SelectItem>
                            <SelectItem value="light">Claro</SelectItem>
                            <SelectItem value="satellite">Satélite</SelectItem>
                            <SelectItem value="outdoors">Exteriores</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Contenedor del mapa */}
                <div className="bg-white  rounded-2xl shadow-2xl overflow-hidden border border-gray-200 mx-auto w-full h-[600px]">
                    <MapLazy

                        textMarker="Yo estudio aqui!"
                        posix={[-24.189100881627, -65.29336743207986]}
                        zoom={16}
                        tileStyle={mapStyle}
                    />
                </div>
            </div>
        </div>
    );
}
