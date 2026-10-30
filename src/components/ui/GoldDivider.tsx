export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <hr
      aria-hidden="true"
      className={`h-px w-16 border-0 bg-gold ${className}`}
    />
  );
}
