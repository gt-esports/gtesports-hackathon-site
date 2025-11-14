import React from "react";
import { CalendarDays, MapPin } from "lucide-react";

interface Event {
  date: string;
  title: string;
  location?: string;
  description?: string;
}

interface EventCardProps {
  event: Event;
  hidden?: boolean;
}

const EventTimeline: React.FC<{ events: Event[] }> = ({ events }) => {
  return (
    <section className="flex items-center justify-center min-h-[50vh] bg-medium-blue">
      <div className="max-w-6xl w-full px-4">

        <div className="text-center mb-12 font-pixel mt-7">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-4">
            Event Timeline
          </h2>
        </div>


        <div className="flex flex-row items-center gap-x-6 my-8 w-full justify-center">
          {events.map((event, index) => {
            const isTopCard = index % 2 === 0;

            return (
              <div key={index} className="flex flex-col items-center relative">

                <EventCard event={event} hidden={!isTopCard} />


                <div className="relative flex items-center my-4 w-[200px] md:w-[300px]">
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-500 -translate-y-1/2 rounded-full"></div>
                  <div className="relative z-10 flex justify-center w-full">
                    <Circle />
                  </div>
                </div>

                <EventCard event={event} hidden={isTopCard} />
              </div>
            );
          })}
        </div>

        <div className="text-center mb-12 font-pixel mt-5 text-white">Our workshop schedules and mini-events will be released closer to the day of competition</div>
      </div>
    </section>
  );
};

const Circle = () => (

  <div className="rounded-full w-5 h-5 bg-white shadow-lg flex-shrink-0"></div>
);

const EventCard: React.FC<EventCardProps> = ({ event, hidden = false }) => {
  const visibility = hidden ? "invisible" : "visible";

  return (
    <div
      className={`${visibility} flex flex-col items-center text-center bg-white text-medium-blue rounded-xl p-3 w-44 shadow-lg border border-white/20 cursor-pointer hover:scale-105 transition duration-300 ease-in-out`}
    >
      <p className="text-base font-semibold font-pixel">{event.title}</p>

      <p className="text-xs text-medium-blue/70 mt-1 flex justify-center items-center gap-1 font-sans">
        <CalendarDays className="w-3 h-3" /> {event.date}
      </p>

      {event.location && (
        <p className="text-xs text-medium-blue/70 flex justify-center items-center gap-1 mt-1 font-sans">
          <MapPin className="w-3 h-3" /> {event.location}
        </p>
      )}

      {event.description && (
        <p className="text-xs text-medium-blue/60 mt-2 font-sans">
          {event.description}
        </p>
      )}
    </div>
  );
};


const ScheduleTeaser: React.FC = () => {
  const events: Event[] = [
    {
      date: "Jan 20, 2025",
      title: "Opening Ceremony",
      location: "TBD",
      description: "Opening ceremony for Hackathon! Be ready!",
    },
    {
      date: "Jan 21, 2025",
      title: "Hacking Starts",
      location: "TBD",
      description: "Start hacking",
    },
    {
      date: "Jan 22, 2025",
      title: "Judging phase",
      location: "TBD",
      description: "Judges will judge your work! Show your results!",
    },
    {
      date: "Jan 23, 2025",
      title: "Closing Ceremony",
      location: "TBD",
      description: "Winners announced and event wrap-up.",
    },
  ];

  return <EventTimeline events={events} />;
};

export default ScheduleTeaser;
