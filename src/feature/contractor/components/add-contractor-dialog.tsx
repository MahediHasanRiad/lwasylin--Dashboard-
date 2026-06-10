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
import { Info, type LucideIcon } from "lucide-react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import type { ContractorSchemaType } from "../schema/contractor.schema";
import ErrorMsg from "@/shared/error-message";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContractorSchemaType>();


  const submitHandler: SubmitHandler<ContractorSchemaType> = (data) => {
    onOpenChange?.(false);
    console.log(data)
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
            <DialogTitle className="mb-4">{title}</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name *</Label>
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
              <Label htmlFor="username-1">Gmail *</Label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: { value: true, message: "email are required !!!" },
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
              <Label htmlFor="services">Services *</Label>
              <Controller
                name="services"
                control={control}
                rules={{
                  required: { value: true, message: "select a service !!!" },
                }}
                render={({ field: { onChange, value } }) => (
                  <Select value={value} onValueChange={onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service !!!" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Plumbing">Apple</SelectItem>
                        <SelectItem value="services">Services</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.services && <ErrorMsg error={errors.services.message} />}
            </Field>
            <hr />
            <h1 className="text-lg">Login Credential</h1>
            <section className="flex justify-between gap-2">
              <Field>
                <Label htmlFor="email">Gmail *</Label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "email are required !!!",
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
                <Label htmlFor="password">Password</Label>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "password are required !!!",
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
          <DialogFooter className="mt-4 mb-2">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
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
        </form>
      </DialogContent>
    </Dialog>
  );
}
