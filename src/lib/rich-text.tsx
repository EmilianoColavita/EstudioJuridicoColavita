import { Fragment } from "react";

// Convierte los **negritas** del brief en <strong>, sin meter un parser de markdown.
export function RichText({ text }: { text: string }) {
  return text.split(/\*\*(.+?)\*\*/g).map((parte, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold">
        {parte}
      </strong>
    ) : (
      <Fragment key={i}>{parte}</Fragment>
    ),
  );
}
