"use client";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import React from "react";

export default function PrimaryHeader() {
  const { setTheme } = useTheme();
  return (
    <header className="border-b-[1px] py-3">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h2>PrimaryHeader</h2>
          <div>
            <Switch
              onCheckedChange={(value) => setTheme(value ? "dark" : "light")}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
