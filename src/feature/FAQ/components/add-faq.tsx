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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { LucideIcon } from "lucide-react";

interface AddFAQType {
  Icon?: LucideIcon;
  variant?: any;
  text: string;
}

export function AddFAQ({ Icon, variant = "custom", text }: AddFAQType) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant={variant}>
            {Icon && <Icon />}
            {text}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>FAQ</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Question</Label>
              <Input id="question" name="question" defaultValue="" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Answer</Label>
              <Textarea id="answer" name="answer" defaultValue="" />
            </Field>
            <Field>
              <Label htmlFor="status">Status</Label>
              <Select>
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Pending" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <Label htmlFor="status">For who</Label>
              <Select>
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="House Manager" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>For who</SelectLabel>
                    <SelectItem value="houseManager">House Manager</SelectItem>
                    <SelectItem value="contractor">Contractor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
