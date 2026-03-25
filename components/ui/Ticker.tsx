"use client";

const items = [
  {
    name: "Melbourne Cafe",
    stat: "+400 Followers in 24h",
    image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
  },
  {
    name: "Tattoo Studio",
    stat: "Fully Booked Weekend",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
  },
  {
    name: "Streetwear Brand",
    stat: "$2k+ in Sales",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
  },
  {
    name: "Local Event",
    stat: "Sold Out Fast",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
  },
  {
    name: "Skincare Line",
    stat: "50+ New Inquiries",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
  },
  {
    name: "Fitness Coach",
    stat: "12 New Client Leads",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
  },
];

export function Ticker() {
  // Quadruple items for a robust seamless loop on wide screens
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full max-w-5xl mx-auto py-12 flex flex-col items-center">
      <span className="text-white/40 text-sm font-medium tracking-wide mb-8 ">
        Driving real results for Australian brands
      </span>
      <div className="relative w-full overflow-hidden flex items-center py-4">
        {/* Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>

        <div className="flex space-x-20 md:space-x-26 items-center whitespace-nowrap pl-12 md:pl-16 w-max animate-marquee [animation-duration:80s]">
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 transition-opacity hover:opacity-100 cursor-default opacity-90">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
              <div className="flex flex-col">
                <span className="text-lg md:text-lg text-white font-bold leading-none mb-0.5">
                  {item.name}
                </span>
                <span className="text-sm text-white/50 leading-none">
                  {item.stat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
