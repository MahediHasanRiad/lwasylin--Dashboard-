import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectField } from "@/shared/select";
import { Info, type LucideIcon } from "lucide-react";

interface AddManagerDialogType {
  open?: boolean;
  onOpenChange?: (boolean) => void;
  title?: string;
  variant?: any;
  Icon?: LucideIcon;
}

export function AddContractorDialog({
  open,
  onOpenChange,
  title,
  variant,
  Icon,
}: AddManagerDialogType) {

  const selectHandler = (data) => {
    console.log(data);
  };

  const submitHandler = () => {
    onOpenChange?.(false)
  }

  return (
    <Dialog  open={open} onOpenChange={onOpenChange}>
      <form>
        <DialogTrigger asChild>
          <Button variant={variant}>
            {Icon && <Icon />} {title}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Full Name</Label>
              <Input id="name-1" name="fullName" defaultValue="" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Gmail</Label>
              <Input id="username-1" name="gmail" defaultValue="" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Services</Label>
              <SelectField
                items={["A", "B", "C"]}
                name="communityName"
                selectHandler={selectHandler}
              />
            </Field>
            <hr />
            <h1 className="text-lg">Login Credential</h1>
            <section className="flex justify-between gap-2">
              <Field>
                <Label htmlFor="username-1">Gmail</Label>
                <Input id="username-1" name="gmail" defaultValue="" />
              </Field>
              <Field>
                <Label htmlFor="username-1">Password</Label>
                <Input id="username-1" name="gmail" defaultValue="" />
              </Field>
            </section>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={submitHandler}>Save changes</Button>
          </DialogFooter>
          <section className="flex gap-2">
            <span>
              <Info size={"22px"} />
            </span>
            <span>
              Login credentials will be sent to the employee's Gmail address
              upon saving.
            </span>
          </section>
        </DialogContent>
      </form>
    </Dialog>
  );
}
