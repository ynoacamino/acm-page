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
        title: 'Metologias agiles',
        date: ['10-05-2024'],
        description: '¡Descubre el mundo de la agilidad con nuestra exposición centrada en Scrum! Aprende cómo esta ' +
            'metodología revoluciona la forma en que los equipos trabajan, entregan valor y se adaptan al cambio en un ' +
            'entorno empresarial dinámico. Únete a nosotros para explorar los principios, roles y prácticas que hacen de' +
            ' Scrum una herramienta poderosa para impulsar la innovación y la eficiencia en tu organización. ¡No te lo pierdas!',
        poster: {
            full: '/images/events/Metodologias_agiles.png',
            thumbnail: '/images/events/Metodologias_agiles.webp',
            width: 1080,
            height: 1080,
        },

        time: '7:00 PM',
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