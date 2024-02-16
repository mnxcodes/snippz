"use client";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CodeEditor from "@/components/editor/CodeEditor";
import html2canvas from "html2canvas";

import React, { ComponentRef, useCallback, useRef, useState } from "react";
const demoCode = `function factorial(n) {
 if (n === 0) {
   return 1;
 } else {
   return n * factorial(n - 1);
 }
}

console.log(factorial(5)); // Outputs: 120
`;
import { useToast } from "@/components/ui/use-toast";
import SelectGradient from "@/components/editor/SelectGradient";
import SelectLanguage from "@/components/editor/SelectLanguage";
import SelectTheme from "@/components/editor/SelectTheme";
import RandomGrad from "@/components/editor/RandomGrad";
import SelectPadding from "@/components/editor/SelectPadding";
import { genRandGradient, gradients } from "@/config";
import { Button } from "@/components/ui/button";
import { ArrowUp, ImageDown, Link } from "lucide-react";
function Page() {
  const ref = useRef<ComponentRef<"div">>(null);

  const { toast } = useToast();
  const [title, setTitle] = useQueryState(
    "title",
    parseAsString.withDefault("hello")
  );
  const [gradient, setGradient] = useQueryState(
    "gradient",
    parseAsString.withDefault(Object.values(gradients)[0])
  );

  const [theme, setTheme] = useQueryState(
    "dark",
    parseAsString.withDefault("darcula")
  );
  const [code, setCode] = useState(demoCode);
  const [padding, setPadding] = useQueryState(
    "padding",
    parseAsInteger.withDefault(16)
  );
  const [language, setLanguage] = useQueryState(
    "language",
    parseAsString.withDefault("javascript")
  );
  const exportToPng = useCallback(async () => {
    const editor = ref.current;
    if (!editor) {
      return;
    }

    try {
      const canvas = await html2canvas(editor);
      const dataUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.download = "snippy.png";
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error exporting to PNG:", error);
    }
  }, []);
  const copyImage = useCallback(async () => {
    const editor = ref.current;
    if (!editor) {
      return;
    }

    try {
      const canvas = await html2canvas(editor);
      const dataUrl = canvas.toDataURL("image/png");

      navigator.clipboard
        .writeText(dataUrl)
        .then(() => {
          toast({ title: "Copied Image" });
        })
        .catch((error) => {
          console.log(error);
          toast({ title: "Something went wrong" });
        });
    } catch (error) {
      console.error("Error exporting to PNG:", error);
    }
  }, []);
  return (
    <div className="flex h-screen items-center justify-center flex-col w-full">
      <div ref={ref}>
        <CodeEditor
          padding={padding}
          gradient={gradient}
          theme={theme}
          setTitle={(e) => setTitle(e, { throttleMs: 1000 })}
          language={language!}
          title={title}
          code={code}
          setCode={(e) => setCode(e)}
        />
      </div>

      <div
        className="mt-6  flex gap-6 mx-auto p-5 absolute bottom-8
    z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md dark:text-white"
      >
        <div className="flex items-center gap-4">
          <SelectGradient value={gradient} onChange={(e) => setGradient(e)} />
          <SelectLanguage value={language} onChange={(e) => setLanguage(e)} />
          <SelectTheme value={theme} onChange={(e) => setTheme(e)} />
          <SelectPadding value={padding} onChange={(e) => setPadding(e)} />
          <RandomGrad onClick={() => setGradient(genRandGradient())} />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-3 py-2 px-3 bg-red-400 rounded-md text-sm text-red-400 
              font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all 
              duration-300"
              >
                <ArrowUp className="w-5 h-5 text-gray-300" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={exportToPng}>
                <ImageDown className="w-5 h-5 mr-4" />
                Save PNG
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ImageDown className="w-5 h-5 mr-4" />
                Save PNG
              </DropdownMenuItem>
              <DropdownMenuItem onClick={copyImage}>
                <Link className="w-5 h-5 mr-4" />
                Copy URL
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            onClick={exportToPng}
            className="flex items-center gap-3 py-2 px-3 bg-red-400 rounded-md text-sm text-red-400 
              font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all 
              duration-300"
          >
            Export
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
