import Link from 'next/link'

export default function Announcement() {
    return (
        <Link 
            href="https://discord.gg/your-discord-link" 
            className="bg-[#2eb7ff] text-white px-4 py-2 text-center block hover:opacity-90 transition-opacity group"
        >
            <span className="flex items-center justify-center gap-2">
                Join our Discord community for events, workshops, and more!
                <svg 
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                </svg>
            </span>
        </Link>
    )
}
