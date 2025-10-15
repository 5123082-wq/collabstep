"use client";

import * as React from "react";
import { clsx } from "clsx";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "outline" | "solid" | "soft";
}

export const Badge = ({
  className,
  variant = "soft",
  ...props
}: BadgeProps) => (
  <span
    className={clsx(
      "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide",
      variant === "outline" && "border-border bg-transparent text-muted",
      variant === "soft" && "border-transparent bg-muted/20 text-muted",
      variant === "solid" && "border-transparent bg-primary text-primary-foreground",
      className
    )}
    {...props}
  />
);
