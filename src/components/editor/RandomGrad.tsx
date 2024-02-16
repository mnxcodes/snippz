"use client";

import React from "react";
import { Button } from "../ui/button";
import { Dice1 } from "lucide-react";

function RandomGrad({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="outline" size="icon" onClick={onClick}>
      <Dice1 className="w-4 h-4" />
    </Button>
  );
}

export default RandomGrad;
