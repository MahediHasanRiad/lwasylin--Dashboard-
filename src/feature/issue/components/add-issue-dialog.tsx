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
import type { LucideIcon } from "lucide-react";

interface AddIssueType {
  variant?: any;
  Icon?: LucideIcon;
  text: string;
}

export function AddIssue({ variant = "default", Icon, text }: AddIssueType) {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Handle form submission logic here
    console.log(Object.fromEntries(formData));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} className="gap-2">
          {Icon && <Icon className="h-4 w-4" />}
          {text}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Create New Issue</DialogTitle>
        </DialogHeader>

        {/* Form correctly moved inside DialogContent */}
        <form onSubmit={handleSubmit} className="space-y-6 pt-2">
          
          {/* Two-column layout for select elements */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Issue Category Select */}
            <div className="space-y-2">
              <Label htmlFor="issue-type" className="text-sm font-medium text-muted-foreground">
                Issue Category
              </Label>
              <Select name="issueType" defaultValue="plumbing">
                <SelectTrigger id="issue-type" className="w-full">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    <SelectItem value="plumbing">Plumbing</SelectItem>
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Status Select */}
            <div className="space-y-2">
              <Label htmlFor="issue-status" className="text-sm font-medium text-muted-foreground">
                Initial Status
              </Label>
              <Select name="status" defaultValue="open">
                <SelectTrigger id="issue-status" className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status Options</SelectLabel>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

          </div>

          {/* Footer Actions */}
          <DialogFooter className="gap-2 sm:gap-2">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>

        </form>
      </DialogContent>
    </Dialog>
  );
}