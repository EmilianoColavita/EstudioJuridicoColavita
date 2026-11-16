import type { CSSProperties } from "react";

export function GoldDivider({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <hr
      aria-hidden="true"
      className={`h-px w-16 border-0 bg-gold ${className}`}
      style={style}
    />
  );
}
