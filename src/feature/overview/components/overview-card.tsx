

export default function OverviewCard({ 
    Icon,
  title = "Active nations", 
  value = 47, 
  comparisonLabel = "vs last 30d", 
  percentage = "+8.8%" 
}) {
  return (
    <div className="relative  p-5 pt-12 rounded-3xl bg-[#e9ecf0] font-sans overflow-hidden">
      
      {/* --- Inverted Corner Icon Badge Container --- */}
      <div className="absolute top-0 left-0 flex items-start">
        {/* The Icon Badge itself */}
        <div className="flex items-center justify-center w-14 h-14 bg-[#e1e6eb] border-white rounded-br-2xl text-[#1e293b]">
          {/* Map/Nation Icon */}
          <Icon />
        </div>
        
        {/* The Magic Inverted Corner Radius Right */}
        <div className="w-4 h-4 bg-transparent rounded-tl-2xl shadow-[-8px_-8px_0_0_#e1e6eb]" />
      </div>
      
      {/* The Magic Inverted Corner Radius Bottom */}
      <div className="absolute top-14 left-0 w-4 h-4 bg-transparent rounded-tl-2xl shadow-[-8px_-8px_0_0_#e1e6eb]" />
      
      {/* --- Card Content --- */}
      <div className="flex flex-col gap-1 mt-2">
        <span className="text-gray-700 text-base font-medium tracking-wide">
          {title}
        </span>
        <h1 className="text-5xl font-semibold text-[#3b82f6] tracking-tight my-1">
          {value}
        </h1>
      </div>

      {/* --- Footer (Label & Mini Sparkline Trend) --- */}
      <div className="flex items-end justify-between mt-4">
        <span className="text-gray-500 text-sm font-medium">
          {comparisonLabel}
        </span>
        
        <div className="flex items-center gap-3">
          <span className="text-black font-bold text-sm tracking-tight">
            {percentage}
          </span>
          
          {/* Sparkline Visual (Represented via clean CSS gradient mask) */}
          <div className="relative w-20 h-10 overflow-hidden">
            <svg viewBox="0 0 100 50" className="w-full h-full">
              <defs>
                <linearGradient id="sparkline-grad" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {/* Shaded Area */}
              <path d="M 0 50 L 0 45 Q 25 10 45 20 T 85 30 L 100 15 L 100 50 Z" fill="url(#sparkline-grad)" />
              {/* Trend Line */}
              <path d="M 0 45 Q 25 10 45 20 T 85 30 L 100 15" fill="none" stroke="#3b82f6" strokeWidth="2" />
              {/* Interactive/Data Nodes */}
              <circle cx="45" cy="20" r="3" fill="#fff" stroke="#3b82f6" strokeWidth="1.5" />
              <circle cx="82" cy="29" r="3" fill="#fff" stroke="#3b82f6" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
}