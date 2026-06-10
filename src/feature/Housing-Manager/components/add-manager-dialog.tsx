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
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Info, type LucideIcon } from "lucide-react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import type { HouseManagerSchemaType } from "../schema/house-manager.schema";
import ErrorMsg from "@/shared/error-message";

interface AddManagerDialogType {
  open?: boolean;
  onOpenChange?: (boolean) => void;
  title?: string;
  variant?: any;
  Icon?: LucideIcon;
}

export function AddManagerDialog({
  open,
  onOpenChange,
  title,
  variant,
  Icon,
}: AddManagerDialogType) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<HouseManagerSchemaType>();

  const submitHandler: SubmitHandler<HouseManagerSchemaType> = (data) => {
    onOpenChange?.(false);
    console.log("house-manager", data);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant={variant}>
          {Icon && <Icon />} {title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit(submitHandler)}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name">Name</Label>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: { value: true, message: "Name are required !!!" },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    className={`${errors.name && "border-red-700"}`}
                  />
                )}
              />
              {errors.name && <ErrorMsg error={errors.name.message} />}
            </Field>
            <Field>
<<<<<<< HEAD
              <Label htmlFor="username-1">E-mail</Label>
=======
              <Label htmlFor="username-1">Gmail</Label>
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
              <Controller
                name="email"
                control={control}
                rules={{
<<<<<<< HEAD
                  required: { value: true, message: "E-mail are required !!!" },
=======
                  required: { value: true, message: "Gmail are required !!!" },
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    className={`${errors.email && "border-red-700"}`}
                  />
                )}
              />
              {errors.email && <ErrorMsg error={errors.email.message} />}
            </Field>
            <Field>
              <Label htmlFor="name">Community Name *</Label>
              <Controller
                name="communityName"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Select Community Name !!!",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <Select value={value} onValueChange={onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Community Name" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Riad">Riad</SelectItem>
                        <SelectItem value="Shamim">Shamim</SelectItem>
                        <SelectItem value="Tamim">Tamim</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.communityName && (
                <ErrorMsg error={errors.communityName.message} />
              )}
            </Field>
            <hr />
            <h1 className="text-lg">Login Credential</h1>
<<<<<<< HEAD
            <section className="flex justify-between gap-2 mb-4">
              <Field>
                <Label htmlFor="username-1">E-mail</Label>
=======
            <section className="flex justify-between gap-2">
              <Field>
                <Label htmlFor="username-1">Gmail</Label>
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: {
                      value: true,
<<<<<<< HEAD
                      message: "E-mail are required !!!",
=======
                      message: "Gmail are required !!!",
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      className={`${errors.email && "border-red-700"}`}
                    />
                  )}
                />
                {errors.email && <ErrorMsg error={errors.email.message} />}
              </Field>
              <Field>
                <Label htmlFor="username-1">Password</Label>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Password are required !!!",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      className={`${errors.password && "border-red-700"}`}
                    />
                  )}
                />
                {errors.password && (
                  <ErrorMsg error={errors.password.message} />
                )}
              </Field>
            </section>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
<<<<<<< HEAD
          <section className="flex gap-2 mt-4">
=======
          <section className="flex gap-2">
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
            <span>
              <Info size={"22px"} />
            </span>
            <span>
<<<<<<< HEAD
              Login credentials will be sent to the employee's E-mail address
=======
              Login credentials will be sent to the employee's Gmail address
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
              upon saving.
            </span>
          </section>
        </form>
      </DialogContent>
    </Dialog>
  );
}
