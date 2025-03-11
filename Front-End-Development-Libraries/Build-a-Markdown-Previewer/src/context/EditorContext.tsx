import React, { createContext, useState, ReactNode, useEffect } from "react";

type EditorContextType = {
  input: string | null;
  wordCount: number;
  charCount: number;
  setInput: React.Dispatch<React.SetStateAction<string | null>>;
  setWordCount: React.Dispatch<React.SetStateAction<number>>;
  setCharCount: React.Dispatch<React.SetStateAction<number>>;
};

export const EditorContext = createContext<EditorContextType | undefined>(
  undefined
);

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [input, setInput] = useState<string | null>("");
  const [wordCount, setWordCount] = useState<number>(0);
  const [charCount, setCharCount] = useState<number>(0);

  useEffect(() => {
    setCharCount(() => (input ? input?.length : 0));
    setWordCount(() => (input ? input.trim().split(" ").length - 1 : 0));
  }, [input]);

  return (
    <EditorContext.Provider
      value={{
        input,
        wordCount,
        charCount,
        setInput,
        setCharCount,
        setWordCount,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};
