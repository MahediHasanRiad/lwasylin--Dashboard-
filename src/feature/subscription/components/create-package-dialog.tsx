import { useState, useRef } from "react";
import { X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { LucideIcon } from "lucide-react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import type { SubscriptionSchemaType } from "../schema/subscription.schema";
import ErrorMsg from "@/shared/error-message";

interface PackagesDialogProps {
  Icon?: LucideIcon;
  text?: string;
  title: string;
  variant?: any;
}

const DEFAULT_FEATURES = ["Unlimited access to 8,000+ series", "Download"];

export function PackagesDialog({
  Icon,
  text,
  title,
  variant,
}: PackagesDialogProps) {

  
  const [features, setFeatures] = useState<string[]>(DEFAULT_FEATURES);
  const [newBenefit, setNewBenefit] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchemaType>();

  const addFeature = () => {
    const trimmed = newBenefit.trim();
    if (!trimmed) return;
    setFeatures((prev) => [...prev, trimmed]);
    setNewBenefit("");
    inputRef.current?.focus();
  };

  const removeFeature = (index: number) => {
    setFeatures((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmitHandler: SubmitHandler<SubscriptionSchemaType> = (data) => {
    console.log("subscription", data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant}>
          {Icon && <Icon className="mr-2 h-4 w-4" />}
          {text && text}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl">
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              Configure membership tiers and benefits for users.
            </DialogDescription>
          </DialogHeader>

          {/* <div className="grid grid-cols-2 gap-4"> */}
          <div className="">
            {/* Left: Plan Details */}
            <div className="rounded-lg border bg-muted/40 p-4 space-y-4">
              <p className="font-medium text-sm">Plan Details</p>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-xs">Package ID *</Label>
                  <Controller
                    name="packageId"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Package Id are required !!!",
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        className={`${errors.packageId && "border-red-700"}`}
                      />
                    )}
                  />
                  {errors.packageId && (
                    <ErrorMsg error={errors.packageId.message} />
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Package Name *</Label>
                  <Controller
                    name="name"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Package Name are required !!!",
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        className={`${errors.name && "border-red-700"}`}
                      />
                    )}
                  />
                  {errors.name && <ErrorMsg error={errors.name.message} />}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs">Package Price *</Label>
                <Controller
                  name="price"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Price are required !!!",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      className={`${errors.price && "border-red-700"}`}
                    />
                  )}
                />
                {errors.price && <ErrorMsg error={errors.price.message} />}
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs">Package Type *</Label>
                <Controller
                  name="planType"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Plan Type are required !!!",
                    },
                  }}
                  render={({ field: {onChange, value} }) => (
                    <Select value={value} onValueChange={onChange}>
                      <SelectTrigger className="text-sm">
                        <SelectValue placeholder="select package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic</SelectItem>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.planType && <ErrorMsg error={errors.planType.message} />}
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs">Duration *</Label>
                <Controller
                  name="duration"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Plan Type are required !!!",
                    },
                  }}
                  render={({ field: {onChange, value} }) => (
                    <Select value={value} onValueChange={onChange}>
                      <SelectTrigger className="text-sm">
                        <SelectValue placeholder="select package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="month">Month</SelectItem>
                        <SelectItem value="quarter">Quarter</SelectItem>
                        <SelectItem value="year">Yearly</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.duration && <ErrorMsg error={errors.duration.message} />}
              </div>
            </div>

            {/* Right: Features */}
            <div className="rounded-lg border bg-muted/40 p-4 flex flex-col mt-4">
              <p className="font-medium text-sm mb-3">Features *</p>

              <div className="flex gap-2 mb-3">
                <Input
                  ref={inputRef}
                  placeholder="Add a benefit..."
                  value={newBenefit}
                  onChange={(e) => setNewBenefit(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addFeature()}
                  className="text-sm"
                />
                <Button
                  type="button"
                  size="icon"
                  onClick={addFeature}
                  className="shrink-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-2 max-h-48">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-md border bg-background px-3 py-2"
                  >
                    <span className="text-sm">{feature}</span>
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`Remove ${feature}`}
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Create New Package</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
