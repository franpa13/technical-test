import React from "react";

export const ProfileCover = ({ cover }: { cover: string }) => {
    return (
        <div
            className="h-48 sm:h-56 md:h-64 bg-center bg-cover"
            style={{ backgroundImage: `url(${cover})` }}
            aria-hidden
        />
    );
}
