import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { LucideIcon } from "lucide-react";

interface IconDropDownType {
  Icon: LucideIcon;
  items: string[];
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}

export function IconDropDown({
  Icon,
  items,
  onValueChange,
  defaultValue,
}: IconDropDownType) {
  return (
    <Select defaultValue={defaultValue} onValueChange={onValueChange}>
      <SelectTrigger className="w-10 h-10 p-0 flex items-center justify-center rounded-xl bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 [&>svg]:hidden cursor-pointer transition-colors duration-150">
        <span>
          <Icon />
        </span>

        <span className="sr-only">Toggle dropdown</span>
        <div className="hidden">
          <SelectValue />
        </div>
      </SelectTrigger>

      <SelectContent align="center">
        <SelectGroup>
          {items.length > 0 ? (
            items.map((item) => (
              <SelectItem
                key={item}
                value={item}
                className="text-gray-900 cursor-pointer focus:bg-gray-100 focus:text-gray-900"
              >
                {item}
              </SelectItem>
            ))
          ) : (
            <SelectItem value="" disabled>
              No items found
            </SelectItem>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
