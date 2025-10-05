"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

type TooltipProviderProps = React.ComponentProps<typeof TooltipPrimitive.Provider>;

export const TooltipProvider = TooltipPrimitive.Provider as React.FC<TooltipProviderProps>;

export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    className?: string;
  }
>(({ className, sideOffset = 8, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={[
      "z-50 overflow-hidden rounded-xl bg-black px-4 py-3 text-sm text-white shadow-2xl",
      "data-[state=delayed-open]:data-[side=top]:animate-in data-[state=delayed-open]:data-[side=top]:fade-in-0 data-[state=delayed-open]:data-[side=top]:slide-in-from-bottom-1",
      "data-[state=delayed-open]:data-[side=bottom]:animate-in data-[state=delayed-open]:data-[side=bottom]:fade-in-0 data-[state=delayed-open]:data-[side=bottom]:slide-in-from-top-1",
      "data-[state=delayed-open]:data-[side=left]:animate-in data-[state=delayed-open]:data-[side=left]:fade-in-0 data-[state=delayed-open]:data-[side=left]:slide-in-from-right-1",
      "data-[state=delayed-open]:data-[side=right]:animate-in data-[state=delayed-open]:data-[side=right]:fade-in-0 data-[state=delayed-open]:data-[side=right]:slide-in-from-left-1",
      className ?? ""
    ].join(" ")}
    {...props}
  />
));

TooltipContent.displayName = TooltipPrimitive.Content.displayName;


