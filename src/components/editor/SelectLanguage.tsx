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
import { langNames } from "@/config";
import { camelize } from "@/lib/utils";
import { Label } from "../ui/label";
function SelectLanguage({ onChange, value }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <Label>Language</Label>
      <Select value={value} onValueChange={(value) => onChange(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(langNames).map(([key, value]) => (
            <SelectItem key={key} value={value}>
              <div className="flex items-center gap-x-2">
                <span className="">{camelize(value)}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectLanguage;
