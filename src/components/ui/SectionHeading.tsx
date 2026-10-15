import React from 'react';
import { cn } from './Button';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false, className, light = false }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col space-y-3 mb-12", centered && "items-center text-center", className)}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-display font-semibold tracking-tight text-balance",
        light ? "text-background" : "text-foreground"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "max-w-[700px] text-lg",
          light ? "text-gray-600" : "text-muted"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
