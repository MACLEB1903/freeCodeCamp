import { ReactNode } from "react";

export default function Display({ children }: { children: ReactNode }) {
  return (
    <div className="editor-preview-wrapper flex flex-col  gap-[1rem] lg:flex-row w-full h-[100svh] bg-[#0d0d0d] lg:gap-[3rem] relative">
      {children}
    </div>
  );
}
