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
    <div className="space-y-1.5">
      {label ? (
        <Label
          htmlFor={`${name}-select`}
          className="text-xs font-medium text-muted-foreground"
        >
          {label}
        </Label>
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
          className="w-full h-9 px-3 rounded-lg border border-input bg-background text-sm text-foreground shadow-none transition-colors hover:bg-accent hover:text-accent-foreground focus:ring-1 focus:ring-ring"
        >
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>

        <SelectContent
          align="end"
          className="rounded-lg border border-border bg-popover shadow-md"
        >
          {items.map((item) => (
            <SelectItem
              key={item}
              value={item}
              className="rounded-md text-sm text-popover-foreground cursor-pointer transition-colors focus:bg-accent focus:text-accent-foreground"
            >
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}