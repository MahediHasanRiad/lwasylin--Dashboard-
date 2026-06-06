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
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type LucideIcon } from "lucide-react";
import { useState } from "react";
import type { AddCommunitySchemaType } from "../schema/add-community.schema";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

export function AddCommunityDialog({
  variantType = "custom",
  Icon,
  text,
  open: controlledOpen,
  onOpenChange,
}: AddCommunityDialogProps) {

  const [internalOpen, setInternalOpen] = useState(false);
  const { control, handleSubmit } = useForm<AddCommunitySchemaType>();

  const isOpen = controlledOpen ?? internalOpen;

  function handleOpenChange(val: boolean) {
    setInternalOpen(val);
    onOpenChange?.(val);
  }

  const submitHandler: SubmitHandler<AddCommunitySchemaType> = (data) => {
    console.log("value", data);
    handleOpenChange(false);
  };

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

        <form onSubmit={handleSubmit(submitHandler)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="input-demo-api-key">
                Community Name
              </FieldLabel>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Input {...field} />}
              />
            </Field>
            <Field>
              <Label htmlFor="location">Location</Label>
              <Controller
                name="location"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Input {...field} />}
              />
            </Field>
            <Field>
              <Label htmlFor="status">Status</Label>
              <Controller
                name="status"
                control={control}
                render={({ field: { value, onChange, disabled } }) => (
                  <Select
                    value={value}
                    onValueChange={onChange}
                    disabled={disabled}
                  >
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PENDING">PENDING</SelectItem>
                      <SelectItem value="ACTIVE">ACTIVE</SelectItem>
                      <SelectItem value="SUSPEND">SUSPEND</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>
            <Field>
              <Label htmlFor="houseManager">House Manager</Label>
              <Controller
                name="houseManager"
                control={control}
                render={({ field: { value, onChange, disabled } }) => (
                  <Select
                    value={value}
                    onValueChange={onChange}
                    disabled={disabled}
                  >
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select Manager" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PENDING">Riad</SelectItem>
                      <SelectItem value="ACTIVE">Shamim</SelectItem>
                      <SelectItem value="SUSPEND">Tamim</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>
          </FieldGroup>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
