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
import ErrorMsg from "@/shared/error-message";
import type { LucideIcon } from "lucide-react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import {z} from 'zod'

interface AddIssueType {
  variant?: any;
  Icon?: LucideIcon;
  text: string;
}

const AddIssueSchema = z.object({
  category: z.string(),
  status: z.string()
})
type AddIssueSchemaType = z.infer<typeof AddIssueSchema>

export function AddIssue({ variant = "default", Icon, text }: AddIssueType) {
  
  const {control, handleSubmit, formState: {errors}} = useForm<AddIssueSchemaType>()

  const onHandleSubmit: SubmitHandler<AddIssueSchemaType> = (data) => {
    console.log(data);
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
        <form onSubmit={handleSubmit(onHandleSubmit)} className="space-y-6 pt-2">
          <div className="grid grid-cols-2 gap-4">
            
            {/* Issue Category Select */}
            <div className="space-y-2">
              <Label htmlFor="issue-type" className="text-sm font-medium text-muted-foreground">
                Issue Category
              </Label>
              <Controller
                name="category"
                control={control}
                rules={{required: {value: true, message: 'Select Category !!!'}}}
                render={({ field: { onChange, value } }) => (
                  <Select value={value} onValueChange={onChange}>
                    <SelectTrigger className="w-full max-w-48">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Category</SelectLabel>
                        <SelectItem value="ACTIVE">ACTIVE</SelectItem>
                        <SelectItem value="PENDING">PENDING</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.category && <ErrorMsg error={errors.category.message} />}
            </div>

            {/* Status Select */}
            <div className="space-y-2">
              <Label htmlFor="issue-status" className="text-sm font-medium text-muted-foreground">
                Initial Status
              </Label>
              <Controller
                name="status"
                control={control}
                rules={{required: {value: true, message: 'Select Status !!!'}}}
                render={({ field: { onChange, value } }) => (
                  <Select value={value} onValueChange={onChange}>
                    <SelectTrigger className="w-full max-w-48">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="ACTIVE">ACTIVE</SelectItem>
                        <SelectItem value="PENDING">PENDING</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.status && <ErrorMsg error={errors.status.message} />}
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