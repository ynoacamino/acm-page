import { PAST_EVENTS } from '@/data/events';
import {Images} from "@/components/events/Images";



export default function PastEvents() {
    return (
        <section className="w-full py-32 border-t border-section flex items-center justify-center px-6"  id="past-events">
            <div className="w-full flex flex-col items-center gap-4 max-w-6xl">
                <h1 className="font-serif font-bold text-5xl text-center">
                    Eventos pasados
                </h1>
                <p className="text-xl text-center w-full max-w-2xl mb-24">
                    Eventos realizados anteriormente
                </p>
                <Images PHOTOS={PAST_EVENTS.slice(0, 3)} id="pastEvents" />
            </div>
        </section>
    );
}