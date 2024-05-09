export interface AcmEvent {
    title: string;
    date: string[];
    description: string;
    time?: string;
    poster: {
        full: string;
        thumbnail: string;
        width: number;
        height: number;
    };
}

export const UPCOMING_EVENTS: AcmEvent[] = [
    {
        title: 'Uso de herramientas para la seguridad ofensiva',
        date: ['26-03-2024'],
        description: 'Aprende el correcto uso de las herramientas de seguridad ofensiva con el experto en ciberseguridad',
        poster: {
            full: '/images/events/SeguridadOfensiva.png',
            thumbnail: '/images/events/SeguridadOfensiva.webp',
            width: 1080,
            height: 1080,
        },

        time: '3:00 PM',
    },
    {
        title: 'Uso de herramientas para la seguridad ofensiva',
        date: ['26-03-2024'],
        description: 'Aprende el correcto uso de las herramientas de seguridad ofensiva con el experto en ciberseguridad',
        poster: {
            full: '/images/events/SeguridadOfensiva.png',
            thumbnail: '/images/events/SeguridadOfensiva.webp',
            width: 1080,
            height: 1080,
        },

        time: '3:00 PM',
    },
    

];

export const PAST_EVENTS: AcmEvent[] =[
    {
        title: 'Uso de herramientas para la seguridad ofensiva',
        date: ['26-03-2024'],
        description: 'Aprende el correcto uso de las herramientas de seguridad ofensiva con el experto en ciberseguridad',
        poster: {
            full: '/images/events/SeguridadOfensiva.png',
            thumbnail: '/images/events/SeguridadOfensiva.webp',
            width: 1080,
            height: 1080,
        },
        time: '3:00 PM',
    },
    {
        title: 'Uso de herramientas para la seguridad ofensiva',
        date: ['26-03-2024'],
        description: 'Aprende el correcto uso de las herramientas de seguridad ofensiva con el experto en ciberseguridad',
        poster: {
            full: '/images/events/SeguridadOfensiva.png',
            thumbnail: '/images/events/SeguridadOfensiva.webp',
            width: 1080,
            height: 1080,
        },

        time: '3:00 PM',
    },

];