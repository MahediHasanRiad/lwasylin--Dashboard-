
export default function HouseCard({ imageUrl, propertyId, location, beds, baths }) {

  return (
    // Outer card container with exact background color and border radius
    <div className="w-full max-w-[480px] p-4 bg-[#e6eaef] rounded-[24px] shadow-lg font-sans overflow-hidden">
      
      {/* Top Image Section (Dynamic URL and optimized aspect ratio) */}
      <div className="w-full aspect-[16/9] rounded-[20px] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`Property at ${location}`}
          className="w-full h-full object-cover object-center" 
        />
      </div>

      {/* Text Details Section */}
      <div className="flex flex-col gap-2.5 p-1 mt-6 text-[#1e293b]">
        
        {/* Dynamic Property ID Line */}
        <p className="text-[17px] leading-tight">
          <span className="font-bold">Property ID:</span>{" "}
          <span className="font-normal text-[#576b81]">{propertyId}</span>
        </p>

        {/* Dynamic Property Location Line */}
        <p className="text-[17px] leading-tight">
          <span className="font-bold">Property location:</span>{" "}
          <span className="font-normal text-[#576b81]">{location}</span>
        </p>

        {/* Dynamic Details (Beds and Baths) Line */}
        <p className="text-[17px] leading-tight">
          <span className="font-bold">Details:</span>{" "}
          <span className="font-normal text-[#576b81]">{beds} Bedrooms | {baths} Bathrooms</span>
        </p>

      </div>
    </div>
  );
}