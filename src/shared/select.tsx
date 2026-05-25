import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MoreVertical, type LucideIcon } from "lucide-react"; // Default fallback icon

interface SelectType {
  label?: string;
  name: string;
  selectHandler: (name: string, value: string) => void;
  defaultValue?: string;
  items: string[];
  Icon?: LucideIcon | React.ComponentType<{ className?: string }>; // Optional icon prop
}

export function SelectField({
  label,
  name,
  selectHandler,
  defaultValue,
  items,
  Icon = MoreVertical, 
}: SelectType) {
  return (
    <div className="space-y-2">
      {label ? (
        <Label htmlFor={`${name}-select`}>{label}</Label>
      ) : (
        <span className="sr-only">Toggle options</span>
      )}

      <Select
        name={name}
        defaultValue={defaultValue}
        onValueChange={(value) => selectHandler(name, value)}
      >

        <SelectTrigger
          id={`${name}-select`}
          className="w-10 h-10 p-0 flex items-center justify-center rounded-xl bg-transparent text-gray-700 hover:bg-gray-100 [&>svg]:hidden cursor-pointer transition-colors duration-150"
        >

          <span>
            <Icon className="w-5 h-5 shrink-0" />
          </span>

          <div className="hidden">
            <SelectValue />
          </div>
        </SelectTrigger>

        <SelectContent align="end" className="bg-white border border-gray-200 shadow-md">
          {items &&
            items.map((item, i) => (
              <SelectItem
                key={i}
                value={item}
                className="text-gray-900 cursor-pointer focus:bg-gray-100 focus:text-gray-900 w-10"
              >
                {item}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
}