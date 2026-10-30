import { GoldDivider } from "./GoldDivider";

export function SectionTitle({
  id,
  emoji,
  children,
  align = "center",
  tone = "light",
}: {
  id: string;
  emoji?: string;
  children: React.ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const centrado = align === "center";
  return (
    <div
      className={`mb-10 flex flex-col gap-4 ${centrado ? "items-center text-center" : ""}`}
    >
      <h2
        id={id}
        className={`max-w-3xl font-serif text-3xl leading-tight text-balance sm:text-4xl ${
          tone === "dark" ? "text-white" : "text-navy"
        }`}
      >
        {emoji && (
          <span aria-hidden="true" className="mr-2">
            {emoji}
          </span>
        )}
        {children}
      </h2>
      <GoldDivider className={centrado ? "mx-auto" : ""} />
    </div>
  );
}
