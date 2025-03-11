import { useContext } from "react";
import { EditorContext } from "../context/EditorContext";

export default function Panel({ title }: { title: string }) {
  const { wordCount, charCount } = useContext(EditorContext)!;

  return (
    <section className="w-full flex h-[5rem] justify-center  items-center  md:h-[7.5rem] flex-row">
      <h2
        className={`!text-[2.5rem] flex-1  ${
          title === "Editor" ? "font-incosonsolata" : "font-space-mono"
        }`}
      >
        {title}
      </h2>
      {title === "Editor" && (
        <div className="stats-wrapper flex-row flex gap-[1rem] font-incosonsolata">
          <p className="text-[1.8rem]">Words: {wordCount}</p>
          <p className="text-[1.8rem]">Chracters: {charCount}</p>
        </div>
      )}
    </section>
  );
}
