"use client";

import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// Import the InfoIcon from lucid react
import { InfoIcon } from "lucide-react";

type ReadMoreTooltipButtonProps = {
  content: React.ReactNode;
  className?: string;
  buttonClassName?: string;
};

const ReadMoreTooltipButton: React.FC<ReadMoreTooltipButtonProps> = ({
  content,
  className,
  buttonClassName,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={[
              "cursor-pointer items-start flex flex-row justify-center rounded-md bg-black text-white px-3 py-2 text-sm font-medium hover:bg-black/90 transition-colors",
              buttonClassName ?? "",
            ].join(" ")}
            aria-label="Read more"
          >
            Read more
            <InfoIcon className="h-5 w-5 ml-1" aria-hidden="true" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="top" align="center" className={["w-[22rem] sm:w-[28rem] lg:w-[32rem] max-w-[90vw]", className ?? ""].join(" ")}>
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ReadMoreTooltipButton;
