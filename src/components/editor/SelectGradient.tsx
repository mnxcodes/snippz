import React, { ComponentProps } from "react";
import { Label } from "../ui/label";
const Dot = ({ className, ...props }: ComponentProps<"div">) => (
  <div {...props} className={twMerge("h-4 w-4 rounded-full mr-2", className)} />
);
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { gradients } from "@/config";
import { camelize } from "@/lib/utils";
import { twMerge } from "tailwind-merge";
type Props = {
  value: string;
  onChange: (val: string) => void;
};

function SelectGradient({ onChange, value }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <Label>Background</Label>
      <Select onValueChange={(value) => onChange(value)} value={value}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Background" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(gradients).map(([key, val]) => (
            <SelectItem key={key} value={key}>
              <div className="flex items-center gap-x-2">
                <Dot
                  style={{
                    background: val,
                  }}
                />
                <span className="">{camelize(key)}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectGradient;
