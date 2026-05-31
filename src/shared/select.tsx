import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectType {
  label?: string;
  name: string;
  selectHandler: (name: string, value: string) => void;
  defaultValue?: string;
  items: string[];
}

export function SelectField({
  label,
  name,
  selectHandler,
  defaultValue,
  items,
}: SelectType) {
  return (
    <div className="space-y-2">
      {label ? (
        <Label htmlFor={`${name}-select`}>{label}</Label>
      ) : (
        <span className="sr-only">Toggle options</span>
      )}

      <Select
        name={name}
        defaultValue={defaultValue}
        onValueChange={(value) => selectHandler(name, value)}
      >
        <SelectTrigger
          id={`${name}-select`}
          className="w-full p-0 flex items-center justify-center rounded-xl bg-transparent text-gray-700 hover:bg-gray-100 [&>svg]:hidden cursor-pointer transition-colors duration-150"
        >
          <SelectValue />
        </SelectTrigger>

        <SelectContent
          align="end"
          className="bg-white border border-gray-200 shadow-md"
        >
          {items.map((item) => (
            <SelectItem
              key={item}
              value={item}
              className="text-gray-900 cursor-pointer focus:bg-gray-100 focus:text-gray-900"
            >
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}