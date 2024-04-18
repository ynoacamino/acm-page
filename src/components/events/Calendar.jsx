import "./Calendar.css";
export default function Calendar() {
    return (
        <div>
            <p>
                <iframe className="w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[450px] xl:h-[600px]"
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLima&bgcolor=%234285F4&src=Y2hhcHRlci5hY20uZXBpc0B1bnNhLmVkdS5wZQ&color=%23039BE5"></iframe>
            </p>
        </div>
    );
}