import { useState } from "react";
import { type LucideIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddManagerDialog } from "./add-manager-dialog";

interface HousingActionBtnProps {
  Icon?: LucideIcon;
  label?: string;
  onValueChange?: (value: string) => void;
}

export function HousingManagerActionBtn({
  Icon,
  label = "Options",
  onValueChange,
}: HousingActionBtnProps) {
  const [editOpen, setEditOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="w-10 h-10 p-0 flex items-center justify-center bg-transparent text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-150">
            {Icon && <Icon className="w-5 h-5" />}
            {label && <span className="sr-only">Toggle dropdown</span>}
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}
          <DropdownMenuItem onSelect={() => onValueChange?.("action")}>
            Active
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => onValueChange?.("suspend")}>
            Suspend
          </DropdownMenuItem>
<<<<<<< HEAD
          <DropdownMenuItem onSelect={() => setEditOpen(true)}>
            Edit
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AddManagerDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        variant={"customOutline"}
      />
=======
          <AddManagerDialog
            open={editOpen}
            onOpenChange={setEditOpen}
            title="Edit"
            variant={"customOutline"}
          />
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <AddManagerDialog  /> */}
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
    </>
  );
}
