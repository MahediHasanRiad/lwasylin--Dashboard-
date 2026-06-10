<<<<<<< HEAD
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HouseCardProps {
  imageUrl: string;
  propertyId: string;
  location: string;
  type: string;
  name?: string;
  isOccupied?: boolean;
}

export default function HouseCard({
  imageUrl,
  propertyId,
  location,
  type,
  name,
  isOccupied = true,
}: HouseCardProps) {
  return (
    <div className="w-full bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">

      {/* Image */}
      <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
        <img
          src={imageUrl}
          alt={`Property at ${location}`}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-black/40 text-white text-[11px] font-medium px-3 py-1 rounded-full tracking-wide">
          {type.toUpperCase()}
        </span>
      </div>

      <div className="px-4 pt-3.5 pb-4">
        {/* Name + status */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-[15px] font-medium text-gray-900 leading-tight">{name ?? propertyId}</p>
            <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {location}
            </p>
          </div>
          <Badge
            className={
              isOccupied
                ? "bg-green-100 text-green-700 hover:bg-green-100 rounded-full text-[11px]"
                : "bg-red-100 text-red-600 hover:bg-red-100 rounded-full text-[11px]"
            }
          >
            {isOccupied ? "Occupied" : "Vacant"}
          </Badge>
        </div>

        {/* Info chips */}
        <div className="flex gap-2 pt-3 border-t border-gray-100">
          <div className="flex-1 bg-gray-50 rounded-xl px-3 py-2.5">
            <p className="text-[10px] text-gray-400 mb-0.5">Property ID</p>
            <p className="text-[13px] font-medium text-gray-800">{propertyId}</p>
          </div>
          <div className="flex-1 bg-gray-50 rounded-xl px-3 py-2.5">
            <p className="text-[10px] text-gray-400 mb-0.5">Type</p>
            <p className="text-[13px] font-medium text-gray-800">{type}</p>
          </div>
        </div>
      </div>

=======

export default function HouseCard({ imageUrl, propertyId, location, beds, baths }) {

  return (
    // Outer card container with exact background color and border radius
    <div className="w-full max-w-[480px] p-4 my-4 bg-[#e6eaef] rounded-[24px] shadow-lg font-sans overflow-hidden">
      
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
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
    </div>
  );
}