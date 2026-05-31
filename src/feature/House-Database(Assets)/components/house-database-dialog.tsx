import { useState } from "react";
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
import type {
  HouseDatabaseDialogProps,
  HouseFormData,
} from "../house-database-type";

export default function HouseDatabaseDialogField({
  open,
  onOpenChange,
  defaultValues = {},
  nationOptions = [],
  managerOptions = [],
  onSubmit,
}: HouseDatabaseDialogProps) {

  const [form, setForm] = useState<HouseFormData>({
    houseName: defaultValues.houseName ?? "",
    houseLocation: defaultValues.houseLocation ?? "",
    propertyId: defaultValues.propertyId ?? "",
    tenantName: defaultValues.tenantName ?? "",
    tenantNumber: defaultValues.tenantNumber ?? "",
    householdItems: defaultValues.householdItems ?? "",
    nationName: defaultValues.nationName ?? "",
    houseManager: defaultValues.houseManager ?? "",
    photos: defaultValues.photos ?? [],
  });

  const [previews, setPreviews] = useState<string[]>([]);

  function handleChange(field: keyof HouseFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handlePhotos(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    setForm((prev) => ({ ...prev, photos: [...prev.photos, ...files] }));
    setPreviews((prev) => [
      ...prev,
      ...files.map((f) => URL.createObjectURL(f)),
    ]);
    e.target.value = "";
  }

  function removePhoto(index: number) {
    setForm((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  }

  function handleSubmit() {
    onSubmit?.(form);
    onOpenChange?.(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
    {/* <Dialog > */}
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add house database (Assets)</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {(
            [
              "houseName",
              "houseLocation",
              "propertyId",
              "tenantName",
              "tenantNumber",
            ] as const
          ).map((field) => (
            <div key={field} className="space-y-1.5">
              <Label htmlFor={field}>
                {
                  {
                    houseName: "House name/ID",
                    houseLocation: "House location",
                    propertyId: "Property ID",
                    tenantName: "Tenant name",
                    tenantNumber: "Tenant number",
                  }[field]
                }
              </Label>
              <Input
                id={field}
                value={form[field] as string}
                onChange={(e) => handleChange(field, e.target.value)}
              />
            </div>
          ))}

          <div className="space-y-1.5">
            <Label htmlFor="householdItems">Household items</Label>
            <Textarea
              id="householdItems"
              rows={5}
              value={form.householdItems}
              onChange={(e) => handleChange("householdItems", e.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <Label>Nation name</Label>
            <Select
              value={form.nationName}
              onValueChange={(v) => handleChange("nationName", v)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select nation" />
              </SelectTrigger>
              <SelectContent>
                {nationOptions.map((n) => (
                  <SelectItem key={n} value={n}>
                    {n}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label>House manager</Label>
            <Select
              value={form.houseManager}
              onValueChange={(v) => handleChange("houseManager", v)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select manager" />
              </SelectTrigger>
              <SelectContent>
                {managerOptions.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label>Upload photos</Label>
            <div className="flex flex-wrap gap-2">
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

          <Button onClick={handleSubmit} className="w-full">
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
