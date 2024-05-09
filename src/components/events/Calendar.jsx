
export default function Calendar() {
    return (
        <div className="lg:mx-10% mb-10 mt-4">
            <p className="text-4xl font-serif mb-5 text-center font-bold">Calendario de eventos</p>
            <div className="">
                <iframe className="w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[450px] xl:h-[600px]"
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLima&bgcolor=%234285F4&src=Y2hhcHRlci5hY20uZXBpc0B1bnNhLmVkdS5wZQ&color=%23039BE5"></iframe>
            </div>
        </div>
    );
}