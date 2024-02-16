"use client";
import React from "react";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

type Props = {
  value: number;
  onChange: (val: number) => void;
};
function SelectPadding({ onChange, value }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <Label>Padding</Label>
      <div className="flex gap-x-3 items-center">
        {[16, 32, 64, 128].map((val) => (
          <button
            className={cn({
              "bg-gray-900 text-white": value === val,
              " text-gray-500": value !== val,
              "rounded-md  focus:outline-none px-1.5 ": true,
            })}
            key={val}
            onClick={() => onChange(val)}
          >
            {val}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectPadding;
