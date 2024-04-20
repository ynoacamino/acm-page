'use client'
import {UPCOMING_EVENTS} from "@/data/events";
import Image from 'next/image';
import { CalendarDays, Clock, Presentation } from 'lucide-react';
import {useGallery} from "@/lib/hooks";
export default function UpcomingEvents(){
    useGallery({ id: 'UpcomingEvents' });
    return(

        <section className="mx-15%" id="upcoming-events">
            <div className="w-full flex flex-col items-center gap-4 max-w-6xl">
                <h1 className="font-serif font-bold text-5xl text-center">
                    Eventos próximos
                </h1>
                <p className="text-xl text-center w-full max-w-2xl mb-24">
                    Puede unirse a cualquiera de nuestros eventos
                </p>
                <div className="flex flex-col gap-x-10 gap-y-16 md:gap-y-10 mb-3" id="UpcomingEvents">
                    {
                        UPCOMING_EVENTS.slice(0, 4).map(({
                                                             date, description, title,
                                                             poster, time, link
                                                         }) => (
                            <>
                                <article key={crypto.randomUUID()}
                                         className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8">

                                    <a
                                        href={poster.full}
                                        data-pswp-width={poster.width}
                                        data-pswp-height={poster.height}
                                        key={crypto.randomUUID()}
                                        target="_blank"
                                        rel="noreferrer"
                                        className=""
                                    >
                                        <Image
                                            className="w-full aspect-square bg-web-gray-100 rounded-lg object-cover"
                                            src={poster.thumbnail}
                                            alt={title}
                                            width={600}
                                            height={600}
                                        />
                                    </a>
                                    <div className="flex flex-col gap-2 col-span-1 md:col-span-2 max-w-2xl">
                                        <h2 className="font-bold text-2xl text-start text-primary-title">
                                            {title}
                                        </h2>
                                        <p className="text-xl text-start mb-6">
                                            {description}
                                        </p>
                                        <div className="flex flex-col gap-4 text-lg pl-4">
                                            {
                                                date.map((date) => (
                                                    <div key={crypto.randomUUID()} className="flex gap-4 items-center">
                                                        <CalendarDays className="w-8 h-8 "/>
                                                        <h4 className="">{date}</h4>
                                                    </div>
                                                ))
                                            }
                                            {
                                                time && (
                                                    <div className="flex gap-4 items-center">
                                                        <Clock className="w-8 h-8"/>
                                                        <h4 className="">{time}</h4>
                                                    </div>
                                                )
                                            }
                                            {
                                                link && (
                                                    <div className="flex gap-4 items-center">
                                                        <Presentation className="w-8 h-8 "/>
                                                        <a href={link} target="_blank" rel="noreferrer"
                                                           className="text-blue-500 hover:underline">
                                                            Enlace de Google Meet
                                                        </a>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="flex gap-4 items-center">


                                        </div>
                                    </div>
                                </article>
                                <div className="w-full max-w-4xl h-[3px] bg-accent mx-auto"/>
                            </>
                        ))
                    }
                </div>
            </div>
        </section>
    );

}