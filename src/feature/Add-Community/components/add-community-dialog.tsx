import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectField } from "@/shared/select";
import { type LucideIcon } from "lucide-react";
import { useState } from "react";

type VariantType =
  | "custom"
  | "link"
  | "default"
  | "outline"
  | "secondary"
  | "ghost"
  | "destructive"
  | "customOutline";

interface AddCommunityDialogProps {
  variantType?: VariantType;
  Icon?: LucideIcon;
  text: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface CommunityFormData {
  communityName: string;
  location: string;
  status: string;
  houseManager: string;
}

const initialValue: CommunityFormData = {
  communityName: "",
  location: "",
  status: "",
  houseManager: "",
};

export function AddCommunityDialog({
  variantType = "custom",
  Icon,
  text,
  open: controlledOpen,
  onOpenChange,
}: AddCommunityDialogProps) {

  const [internalOpen, setInternalOpen] = useState(false);
  const [community, setCommunity] = useState<CommunityFormData>(initialValue);

  const isOpen = controlledOpen ?? internalOpen;

  function handleOpenChange(val: boolean) {
    setInternalOpen(val);
    onOpenChange?.(val);
  }

  function selectHandler(name: string, value: string) {
    setCommunity((prev) => ({ ...prev, [name]: value }));
  }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCommunity((prev) => ({ ...prev, [name]: value }));
  }

  function submitHandler() {
    console.log("value", community);
    handleOpenChange(false);
  }
console.log('community', community)
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {controlledOpen === undefined && (
        <DialogTrigger asChild>
          <Button variant={variantType}>
            {Icon && <Icon />} {text}
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Add Community</DialogTitle>
        </DialogHeader>

        <form>
          <FieldGroup>
            <Field>
              <Label htmlFor="communityName">Community Name</Label>
              <Input
                id="communityName"
                name="communityName"
                defaultValue=""
                onChange={onChangeHandler}
              />
            </Field>
            <Field>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                defaultValue=""
                onChange={onChangeHandler}
              />
            </Field>
            <Field>
              <SelectField
                label="Status"
                name="status"
                selectHandler={selectHandler}
                defaultValue=""
                items={["A", "B", "C"]}
              />
            </Field>
            <Field>
              <SelectField
                label="House Manager"
                name="houseManager"
                selectHandler={selectHandler}
                defaultValue=""
                items={["Riad", "Shamim", "Tamim"]}
              />
            </Field>
          </FieldGroup>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="button" onClick={submitHandler}>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}