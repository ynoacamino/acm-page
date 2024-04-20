import Calendar from "@/components/events/Calendar";
import UpcomingEvents from "@/components/events/UpcomingEvents";

export default function EventsPage() {
  return (
    <div>
        <Calendar />
        <UpcomingEvents />
    </div>
  );
}