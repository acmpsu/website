import eventsData from "@/app/data/events.json";

interface Event {
    location: string;
    date: string;
    time: string;
    title: string;
    link?: string;
    presenter: string;
  }
  

  export function EventCards() {
    const events: Event[] = eventsData.events;
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div 
            key={`${event.date}-${event.title}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-40 bg-[#004ab0] relative">
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm text-[#004ab0] font-medium">
                {new Date(event.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{event.title}</h3>
              {event.presenter && (
                <p className="text-gray-600 text-sm mb-3">
                  Presented by {event.presenter}
                </p>
              )}
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {event.time}
              </div>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </div>
              {event.link && (
                <a 
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-[#004ab0] text-white rounded-full hover:bg-blue-700 transition-colors text-sm"
                >
                  Join Event
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }