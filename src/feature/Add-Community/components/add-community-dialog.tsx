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

type variantTypeO =
  | "custom"
  | "link"
  | "default"
  | "outline"
  | "secondary"
  | "ghost"
  | "destructive"
  | "customOutline";

interface AddCommunityDialogProps {
  variantType?: variantTypeO;
  Icon?: LucideIcon;
  text: string;
}

interface AddCommunityType {
  variantType?: variantTypeO;
  communityName: string;
  location: string;
  status: string;
  houseManager: string;
}

const initialValue = {
  communityName: "",
  location: "",
  status: "",
  houseManager: "",
};

export function AddCommunityDialog({
  variantType = "custom",
  Icon,
  text,
}: AddCommunityDialogProps) {
  const [community, setCommunity] = useState<AddCommunityType>(initialValue);

  const selectHandler = (name, selectedValues) => {
    setCommunity((prev) => ({
      ...prev,
      [name]: selectedValues,
    }));
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setCommunity((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = () => {
    console.log("value", community);
  };

  return (
    <Dialog>
      <form className="">
        <DialogTrigger asChild>
          <Button variant={variantType}>
            {" "}
            {Icon && <Icon />} {text}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add Community</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Community Name</Label>
              <Input
                id="name-1"
                name="communityName"
                defaultValue=""
                onChange={onChangeHandler}
              />
            </Field>
            <Field>
              <Label htmlFor="username-1">Location</Label>
              <Input
                id="username-1"
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
                defaultValue={""}
                items={["A", "B", "C"]}
              />
            </Field>
            <Field>
              <SelectField
                label="House Manager"
                name="houseManager"
                selectHandler={selectHandler}
                defaultValue={""}
                items={["Riad", "Shamim", "Tamim"]}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={submitHandler}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
