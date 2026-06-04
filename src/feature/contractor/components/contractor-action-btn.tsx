import { useState } from "react";
import { type LucideIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddContractorDialog } from "./add-contractor-dialog";


interface ContractorActionBtnProps {
  Icon: LucideIcon;
  label?: string;
  onValueChange?: (value: string) => void;
}

export function ContractorActionBtn({
  Icon,
  label = "Options",
  onValueChange,
}: ContractorActionBtnProps) {
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

        <DropdownMenuContent align="end">
          {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}
          <DropdownMenuItem onSelect={() => onValueChange?.("action")}>
            Active
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => onValueChange?.("suspend")}>
            Suspend
          </DropdownMenuItem>
          <AddContractorDialog title="Edit" variant={'customOutline'} />
        </DropdownMenuContent> 
      </DropdownMenu>

    </>
  );
}
