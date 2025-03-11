import Markdown from "react-markdown";
import { EditorContext } from "../context/EditorContext";
import { useContext } from "react";

import Panel from "./Panel";

export default function Preview() {
  const { input } = useContext(EditorContext)!;
  return (
    <div className="preview-wrapper flex-1 flex-col p-[1.5rem] lg:p-[3rem]  hidden lg:flex ">
      <Panel title="Preview" />
      <hr></hr>
      <div id="preview" className="mt-[2rem] font-space-mono">
        <Markdown>{input}</Markdown>
      </div>
    </div>
  );
}
