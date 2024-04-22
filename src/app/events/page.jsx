import Calendar from "@/components/events/Calendar";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import PastEvents from "@/components/events/PastEvents";

export default function EventsPage() {
  return (
    <div>
        
        <UpcomingEvents />
        <Calendar />
        <PastEvents/>
    </div>
  );
}