import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { LucideIcon } from "lucide-react";

interface IconDropDownType {
  Icon: LucideIcon;
  items?: { label: string; value: string }[];
  onSelect?: (value: string) => void;
}

<<<<<<< HEAD
export function IconDropDown({ Icon, items = [], onSelect }: IconDropDownType) {
=======
export function IconDropDown({ Icon }: IconDropDownType) {
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-10 h-10 p-0 flex items-center justify-center rounded-xl bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-150">
        <span>
          <Icon className="w-5 h-5" />
        </span>
        <span className="sr-only">Toggle dropdown</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
<<<<<<< HEAD
        {items.map((item) => (
          <DropdownMenuItem
            key={item.value}
            className="cursor-pointer"
            onClick={() => onSelect?.(item.value)}
          >
            {item.label}
          </DropdownMenuItem>
        ))}
=======
        <DropdownMenuItem className="cursor-pointer">Active</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Suspend</DropdownMenuItem>
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
