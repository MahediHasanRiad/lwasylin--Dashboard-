<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useState } from "react";
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
import { X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
<<<<<<< HEAD
import type { HouseDatabaseDialogProps } from "../house-database-type";
=======
import type {
  HouseDatabaseDialogProps,
} from "../house-database-type";
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
import type { HouseDatabaseSchemaType } from "../schema/house-database.schema";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import ErrorMsg from "@/shared/error-message";
import { Field, FieldLabel } from "@/components/ui/field";

export default function HouseDatabaseDialogField({
  open,
  onOpenChange,
<<<<<<< HEAD
  defaultValues,
}: HouseDatabaseDialogProps) {
  const [previews, setPreviews] = useState(defaultValues?.[0].images ?? []);

=======
}: HouseDatabaseDialogProps) {
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
  const {
    control,
    setValue,
    getValues,
    handleSubmit,
<<<<<<< HEAD
    reset,
    formState: { errors },
  } = useForm<HouseDatabaseSchemaType>({
    defaultValues: {
      houseName: defaultValues?.[0]?.name ?? "",
      location: defaultValues?.[0]?.location ?? "",
      propertyCode: defaultValues?.[0]?.propertyCode ?? "",
      tenantName: defaultValues?.[0]?.tenantName ?? "",
      tenantNumber: defaultValues?.[0]?.tenantNumber ?? "",
      houseHoldItems: defaultValues?.[0]?.items ?? "",
      communityName: defaultValues?.[0]?.communityName ?? "",
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset({
        houseName: defaultValues?.[0]?.name ?? "",
        location: defaultValues?.[0]?.location ?? "",
        propertyCode: defaultValues?.[0]?.propertyCode ?? "",
        tenantName: defaultValues?.[0]?.tenantName ?? "",
        tenantNumber: defaultValues?.[0]?.tenantNumber ?? "",
        houseHoldItems: defaultValues?.[0]?.items ?? "",
        communityName: defaultValues?.[0]?.communityName ?? "",
      });
    }

    setPreviews(defaultValues?.[0].images);
  }, [open, defaultValues]);

  // console.log("default", defaultValues);

  // console.log("default-image", previews);

  // ------------------------ image ----------------------------------

  function handlePhotos(e: React.ChangeEvent<HTMLInputElement>) {
    e.stopPropagation();
=======
    formState: { errors },
  } = useForm<HouseDatabaseSchemaType>();

  const [previews, setPreviews] = useState<string[]>([]);

  function handlePhotos(e: React.ChangeEvent<HTMLInputElement>) {
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
    const files = Array.from(e.target.files ?? []);
    e.target.value = "";

    const current: File[] = getValues("photos") ?? [];
    setValue("photos", [...current, ...files], { shouldDirty: true });
<<<<<<< HEAD
    setPreviews((prev) => [
      ...prev,
      ...files.map((f) => URL.createObjectURL(f)),
    ]);
=======
    setPreviews((prev) => [...prev, ...files.map((f) => URL.createObjectURL(f))]);
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
  }

  function removePhoto(index: number) {
    URL.revokeObjectURL(previews[index]);
    const current: File[] = getValues("photos") ?? [];
<<<<<<< HEAD
    setValue(
      "photos",
      current.filter((_, i) => i !== index),
      { shouldDirty: true },
    );
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  }

  // ------------------------ image ----------------------------------

  const onSubmitHandler: SubmitHandler<HouseDatabaseSchemaType> = async (
    data,
  ) => {
=======
    setValue("photos", current.filter((_, i) => i !== index), { shouldDirty: true });
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  }

  const onSubmitHandler: SubmitHandler<HouseDatabaseSchemaType> = async (data) => {
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
    const fd = new FormData();

    fd.append("houseName", data.houseName);
    fd.append("location", data.location);
    fd.append("propertyCode", data.propertyCode);
    fd.append("tenantName", data.tenantName);
    fd.append("tenantNumber", data.tenantNumber);
    fd.append("houseHoldItems", data.houseHoldItems);
    fd.append("nationName", data.nationName);
    fd.append("houseManager", data.houseManager);

    (data.photos ?? []).forEach((file: File) =>
<<<<<<< HEAD
      fd.append("photos", file, file.name),
    );

    // console.log("Submitting FormData...", fd);
=======
      fd.append("photos", file, file.name)
    );

    console.log("Submitting FormData...", fd);
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
    onOpenChange?.(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* <Dialog > */}
<<<<<<< HEAD
      <DialogContent className="md:min-w-[30%] max-h-[80vh] overflow-y-auto scrollbar-none">
        <DialogHeader >
          <DialogTitle>House database</DialogTitle>
=======
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add house database (Assets)</DialogTitle>
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="space-y-4">
            <Field>
              <FieldLabel htmlFor="houseName">House Name *</FieldLabel>
              <Controller
                name="houseName"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "House name are required !!!",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    className={`${errors.houseName && "border-red-600"}`}
                  />
                )}
              />
              {errors.houseName && (
                <ErrorMsg error={errors.houseName.message} />
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="location">Location *</FieldLabel>
              <Controller
                name="location"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Location are required !!!",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    className={`${errors.location && "border-red-600"}`}
                  />
                )}
              />
              {errors.location && <ErrorMsg error={errors.location.message} />}
            </Field>
            <Field>
              <FieldLabel htmlFor="propertyCode">Property Code *</FieldLabel>
              <Controller
                name="propertyCode"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Property Code are required !!!",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    className={`${errors.location && "border-red-600"}`}
                  />
                )}
              />
              {errors.propertyCode && (
                <ErrorMsg error={errors.propertyCode.message} />
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="tenantName">Tenant Name *</FieldLabel>
              <Controller
                name="tenantName"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "tenantName are required !!!",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    className={`${errors.tenantName && "border-red-600"}`}
                  />
                )}
              />
              {errors.tenantName && (
                <ErrorMsg error={errors.tenantName.message} />
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="tenantNumber">Tenant Number *</FieldLabel>
              <Controller
                name="tenantNumber"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Tenant Number are required !!!",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    className={`${errors.tenantNumber && "border-red-600"}`}
                  />
                )}
              />
              {errors.tenantNumber && (
                <ErrorMsg error={errors.tenantNumber.message} />
              )}
            </Field>

            <div className="space-y-1.5">
              <Label htmlFor="householdItems">Household items *</Label>
              <Controller
                name="houseHoldItems"
                rules={{
                  required: {
                    value: true,
                    message: "minimum 1 items required !!!",
                  },
                }}
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    className={`${errors.houseHoldItems && "border-red-500"}`}
                  />
                )}
              />
              {errors.houseHoldItems && (
                <ErrorMsg error={errors.houseHoldItems.message} />
              )}
            </div>

            <div className="space-y-1.5">
              <Label>Nation name *</Label>
              <Controller
                name="nationName"
                control={control}
                rules={{
                  required: { value: true, message: "Select your Nation !!!" },
                }}
                render={({ field: { onChange, value } }) => (
                  <Select onValueChange={onChange} value={value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select nation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                      <SelectItem value="India">India</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.nationName && (
                <ErrorMsg error={errors.nationName.message} />
              )}
            </div>

            <div className="space-y-1.5">
              <Label>House manager *</Label>
              <Controller
                name="houseManager"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Select your House Manager",
                  },
                }}
                render={({ field: { value, onChange } }) => (
                  <Select value={value} onValueChange={onChange}>
                    <SelectTrigger>
                      <SelectValue
                        placeholder="Select House Manager"
                        className={`${errors.houseManager && "border-red-600"}`}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="riad">Riad</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.houseManager && (
                <ErrorMsg error={errors.houseManager.message} />
              )}
            </div>

            <div className="space-y-1.5">
              <Label>Upload photos *</Label>
              <div className="flex flex-wrap gap-2">
<<<<<<< HEAD
                {previews?.map((src, i) => (
                  <div key={i} className="relative w-[72px] h-[72px]">
                    <img
                      src={src.image}
                      className="w-full h-full object-cover rounded-lg"
                      alt="images"
                    />
                    <Button
                      type="button"
                      onClick={() => removePhoto(i)}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}

                <label
                  htmlFor="photo-upload"
                  className="w-[72px] h-[72px] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-1 cursor-pointer text-gray-500 hover:bg-gray-50 text-xs"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add</span>
                </label>
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handlePhotos}
                />
              </div>
            </div>
          </div>
            <Button type="submit" className="w-full mt-6">
              Save Changes
            </Button>
=======
                {previews.map((src, i) => (
                  <div key={i} className="relative w-[72px] h-[72px]">
                    <img
                      src={src}
                      className="w-full h-full object-cover rounded-lg"
                      alt="images"
                    />
                    <button
                      onClick={() => removePhoto(i)}
                      aria-label="Delete community"
                      className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                <div className="flex flex-wrap gap-2">
                  {previews.map((src, i) => (
                    <div key={i} className="relative w-[72px] h-[72px]">
                      <img
                        src={src}
                        alt={`photo-${i}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <Button
                        type="button"
                        onClick={() => removePhoto(i)}
                        className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
                      >
                        <X className="w-3 h-3 text-white" />
                      </Button>
                    </div>
                  ))}

                  <label className="w-[72px] h-[72px] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-1 cursor-pointer text-gray-500 hover:bg-gray-50 text-xs">
                    <Plus className="w-5 h-5" />
                    <span>Add</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handlePhotos}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full mt-2">
            Save Changes
          </Button>
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
        </form>
      </DialogContent>
    </Dialog>
  );
}
