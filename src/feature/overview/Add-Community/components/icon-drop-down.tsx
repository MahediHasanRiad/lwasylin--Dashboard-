import React from "react";
import { type LucideIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IconDropDownProps {
  Icon: LucideIcon | React.ComponentType<{ className?: string }>;
  label?: string;
  items?: { value: string; label: string }[];
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}

export function IconDropDown({ 
  Icon, 
  label = "Options", 
  items = [], 
  onValueChange, 
  defaultValue 
}: IconDropDownProps) {
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

      <SelectContent align="end">
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          
          {items.length > 0 ? (
            items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))
          ) : (
            /* Disabled placeholder item so users can't pick the error text */
            <SelectItem value="none" disabled className="w-10">
              No Items Found
            </SelectItem>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}