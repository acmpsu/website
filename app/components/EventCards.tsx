import eventsData from "@/app/data/events.json";

type Committee = 'explore' | 'ai' | 'web';

interface Event {
    location: string;
    date: string;
    time: string;
    title: string;
    link?: string;
    presenter: string;
    committee?: string;
}

export function EventCards({ 
    committee, 
    textColor = "text-black", 
    maxCards 
}: { 
    committee?: Committee, 
    textColor?: string,
    maxCards?: number 
}) {
    const events: Event[] = eventsData.events;
    
    // Define committee colors
    const committeeColors = {
        'explore': {
            bg: 'bg-green-600',
            hover: 'hover:bg-green-700',
            header: 'bg-green-600'
        },
        'ai': {
            bg: 'bg-blue-600',
            hover: 'hover:bg-blue-700',
            header: 'bg-blue-600'
        },
        'web': {
            bg: 'bg-purple-600',
            hover: 'hover:bg-purple-700',
            header: 'bg-purple-600'
        }
    };

    // Filter events and optionally limit them
    const filteredEvents = committee 
        ? events.filter(event => event.committee === committee)
        : events;
    
    const displayEvents = maxCards 
        ? filteredEvents.slice(0, maxCards) 
        : filteredEvents;

    // Show message if no events
    if (displayEvents.length === 0) {
        return (
            <div className="text-center py-8">
                <p className={`${textColor} text-lg`}>No upcoming events at this time.</p>
            </div>
        );
    }

    // Determine grid columns based on number of events
    const gridCols = displayEvents.length === 1 
        ? 'grid-cols-1' 
        : displayEvents.length === 2 
            ? 'grid-cols-1 md:grid-cols-2' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';

    return (
        <div className={`grid ${gridCols} gap-4`}>
            {displayEvents.map((event) => {
                // Get colors based on event's committee
                const eventColors = event.committee ? committeeColors[event.committee as Committee] : {
                    bg: 'bg-[#004ab0]',
                    hover: 'hover:bg-blue-700',
                    header: 'bg-[#004ab0]'
                };

                return (
                    <div 
                        key={`${event.date}-${event.title}`}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow w-[300px] mx-auto"
                    >
                        <div className={`h-40 ${eventColors.header} relative`}>
                            <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm text-black font-medium">
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
                                    className={`inline-block mt-4 px-4 py-2 ${eventColors.bg} ${eventColors.hover} text-white rounded-full transition-colors text-sm`}
                                >
                                    Join Event
                                </a>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}