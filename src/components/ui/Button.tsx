import Link from "next/link";

const variantes = {
  navy: "bg-navy text-white hover:bg-navy-soft",
  outline: "border border-gold text-navy hover:bg-gold hover:text-navy",
  outlineDark: "border border-gold text-white hover:bg-gold hover:text-navy",
};

export function Button({
  href,
  variant = "navy",
  children,
  className = "",
}: {
  href: string;
  variant?: keyof typeof variantes;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors ${variantes[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
