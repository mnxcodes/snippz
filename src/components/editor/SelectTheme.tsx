"use client";
type Props = {
  value: string;
  onChange: (val: string) => void;
};

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { themes } from "@/config";
import { camelize } from "@/lib/utils";
import { Label } from "../ui/label";
function SelectTheme({ onChange, value }: Props) {
  return (
    <div>
      <Label>Theme</Label>
      <Select onValueChange={(value) => onChange(value)} value={value}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Background" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(themes).map(([key]) => (
            <SelectItem key={key} value={key}>
              {camelize(key)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectTheme;
