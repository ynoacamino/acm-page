import { PAST_EVENTS } from '@/data/events';
import {Images} from "@/components/events/Images";



export default function PastEvents() {
    return (
        <section className="mx-15% mb-4"  id="past-events">
            <div className="w-full flex flex-col items-center gap-4 max-w-6xl">
                <h1 className="text-primary-title font-bold text-5xl text-center">
                    Eventos pasados
                </h1>
                <p className="text-xl text-center w-full max-w-2xl mb-24">
                    Revive los eventos que ya han pasado, y si te los perdiste, no te preocupes, siempre
                    habrá más.
                </p>
                <Images PHOTOS={PAST_EVENTS.slice(0, 3)} id="pastEvents" />
            </div>
        </section>
    );
}