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
import ErrorMsg from "@/shared/error-message";
import type { LucideIcon } from "lucide-react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

interface AddFAQType {
  Icon?: LucideIcon;
  variant?: any;
<<<<<<< HEAD
  text?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
=======
  text: string;
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
}

const AddFAQSchema = z.object({
  question: z.string(),
  answer: z.string(),
  status: z.enum(["ACTIVE", "PENDING"]),
  forWho: z.enum(["MANAGER", "CONTRACTOR"]),
});
type AddFAQSchemaType = z.infer<typeof AddFAQSchema>;

<<<<<<< HEAD
export function AddFAQ({
  Icon,
  variant = "custom",
  text,
  onOpenChange,
  open,
}: AddFAQType) {
=======
export function AddFAQ({ Icon, variant = "custom", text }: AddFAQType) {
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddFAQSchemaType>();

  const onSubmitHandler: SubmitHandler<AddFAQSchemaType> = (data) => {
    console.log("add faq data", data);
  };

<<<<<<< HEAD
  function handleOpenChange(val: boolean) {
    onOpenChange?.(val);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {text && (
          <Button variant={variant}>
            {Icon && <Icon />}
            {text}
          </Button>
        )}
=======
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant}>
          {Icon && <Icon />}
          {text}
        </Button>
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <DialogHeader>
            <DialogTitle>FAQ</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="question">Question *</Label>
              <Controller
                name="question"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Question are required !!!",
                  },
                }}
<<<<<<< HEAD
                render={({ field }) => (
                  <Input
                    {...field}
                    className={`${errors.question && "border-red-700"}`}
                  />
                )}
=======
                render={({ field }) => <Input {...field} className={`${errors.question && 'border-red-700'}`}/>}
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
              />
              {errors.question && <ErrorMsg error={errors.question.message} />}
            </Field>
            <Field>
              <Label htmlFor="answer">Answer *</Label>
              <Controller
                name="answer"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Answer are required !!!",
                  },
                }}
<<<<<<< HEAD
                render={({ field }) => (
                  <Textarea
                    {...field}
                    className={`${errors.answer && "border-red-700"}`}
                  />
                )}
=======
                render={({ field }) => <Textarea {...field} className={`${errors.answer && 'border-red-700'}`}/>}
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
              />
              {errors.answer && <ErrorMsg error={errors.answer.message} />}
            </Field>
            <Field>
              <Label htmlFor="status">Status *</Label>
              <Controller
                name="status"
                control={control}
<<<<<<< HEAD
                rules={{
                  required: { value: true, message: "Select Status !!!" },
                }}
=======
                rules={{required: {value: true, message: 'Select Status !!!'}}}
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
                render={({ field: { onChange, value } }) => (
                  <Select value={value} onValueChange={onChange}>
                    <SelectTrigger className="w-full max-w-48">
                      <SelectValue placeholder="Pending" />
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
            </Field>
            <Field>
              <Label htmlFor="forWho">For who *</Label>
              <Controller
                name="forWho"
                control={control}
<<<<<<< HEAD
                rules={{
                  required: { value: true, message: "Select For Who !!!" },
                }}
=======
                rules={{required: {value: true, message: 'Select For Who !!!'}}}
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
                render={({ field: { onChange, value } }) => (
                  <Select value={value} onValueChange={onChange}>
                    <SelectTrigger className="w-full max-w-48">
                      <SelectValue placeholder="Pending" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="MANAGER">MANAGER</SelectItem>
                        <SelectItem value="CONTRACTOR">CONTRACTOR</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.forWho && <ErrorMsg error={errors.forWho.message} />}
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
