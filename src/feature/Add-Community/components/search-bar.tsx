import { Filter } from "lucide-react";
import { IconDropDown } from "./icon-drop-down";

<<<<<<< HEAD
interface SearchPartType {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleStatus: (value: string) => void;
  filterValue?: any;
  placeholder?: string;
}
=======
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1

export default function SearchPart({
  value,
  onChange,
<<<<<<< HEAD
  handleStatus,
  filterValue,
  placeholder = "Search by name, location",
}: SearchPartType) {
=======
  placeholder = "Search by name, location",
}) {

>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
  return (
    <div className="w-full  font-sans">
      <div className="relative flex items-center w-full">
        <div className="absolute left-4 text-[#1e293b] pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.601Z"
            />
          </svg>
        </div>

<<<<<<< HEAD
=======
        {/* Dynamic HTML Input Field */}
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full h-14 pl-12 pr-16 bg-white text-[#1e293b] text-base placeholder-[#576b81] rounded-2xl border border-transparent focus:outline-none focus:border-[#3b82f6] focus:bg-white transition-all duration-200"
        />

<<<<<<< HEAD
        {/* Right Filter Button */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {/* Filter Icon */}
          <IconDropDown
            Icon={Filter}
            items={
              filterValue ?? [
                { label: "Active", value: "active" },
                { label: "Suspend", value: "suspend" },
              ]
            }
            onSelect={handleStatus}
=======
        {/* Right Filter Button Container */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {/* Filter Funnel Icon */}
          <IconDropDown
            Icon={Filter}
            items={[
              { label: "Active", value: "active" },
              { label: "Suspend", value: "suspend" },
              { label: "Edit", value: "edit" },
            ]}
            onSelect={(value) => console.log(value)}
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
          />
        </div>
      </div>
    </div>
  );
}
