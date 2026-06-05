import { useState } from "react";
import { type LucideIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddCommunityDialog } from "./add-community-dialog";

interface ActionBtnFieldProps {
  Icon: LucideIcon;
  label?: string;
  open?: boolean; 
  onOpenChange?: (open: boolean) => void;
  onValueChange?: (value: string) => void;
}

export function ActionBtnField({
  Icon,
  label = "Options",
  onValueChange,
}: ActionBtnFieldProps) {
  const [editOpen, setEditOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="w-10 h-10 p-0 flex items-center justify-center rounded-xl bg-transparent text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-150">
            <Icon className="w-5 h-5" />
            <span className="sr-only">Toggle dropdown</span>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="center">
          {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}
          <DropdownMenuItem onSelect={() => onValueChange?.("action")}>
            Active
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => onValueChange?.("suspend")}>
            Suspend
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setEditOpen(true)}>
            Edit
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AddCommunityDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        variantType="customOutline"
        text="Edit"
      />
    </>
  );
}
