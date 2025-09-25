import { Post } from "@/types/feed-types";
import { v4 as uuidv4 } from 'uuid';
export const FeedFake: Post[] = [
    {
        id: uuidv4(),
        title: "Un café para empezar el día",
        content: "Nada como un buen café caliente para arrancar con energía y buena onda.",
        author: "Ana Martínez",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
        date: new Date("2024-09-10"),
    },
    {
        id: uuidv4(),
        title: "Explorando la ciudad",
        content: "Recorriendo las calles antiguas y descubriendo rincones llenos de historia.",
        author: "Carlos Gómez",
        image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800&h=600&fit=crop",
        date: new Date("2024-09-12"),
    },
    {
        id: uuidv4(),
        title: "Naturaleza en su máximo esplendor",
        content: "Un respiro verde entre montañas y lagos que parecen sacados de un sueño.",
        author: "Lucía Fernández",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
        date: new Date("2024-09-15"),
    },
];
