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
import { AddCommunityDialog } from "./add-community-dialog";

interface IconDropDownProps {
  Icon: LucideIcon | React.ComponentType<{ className?: string }>;
  label?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}

export function ActionBtnField({
  Icon,
  label = "Options",
  onValueChange,
  defaultValue,
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

          <SelectItem value="action">Active</SelectItem>
          <SelectItem value="suspend">Suspend</SelectItem>
          <SelectItem value="edit">
            <AddCommunityDialog />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
