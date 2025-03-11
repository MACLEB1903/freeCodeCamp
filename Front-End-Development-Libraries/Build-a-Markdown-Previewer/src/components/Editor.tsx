import Markdown from "react-markdown";
import { useContext, useState } from "react";
import { EditorContext } from "../context/EditorContext";

import Panel from "./Panel";
import HideIcon from "../assets/preview-hide.svg";
import ShowIcon from "../assets/preview-show.svg";

export default function Editor() {
  const [isShowingPreview, setIsShowingPreview] = useState(false);
  const { input, setInput } = useContext(EditorContext)!;
  return (
    <div className="editor-wrapper flex-1 flex flex-col p-[1.5rem] lg:p-[3rem] bg-[#1f1f1f] relative">
      <Panel title={!isShowingPreview ? "Editor" : "Preview"} />
      <hr className="h-[0.3rem] lg:h-[0.5rem]"></hr>

      {!isShowingPreview && (
        <textarea
          value={input ? input : ""}
          id="editor"
          className="flex-1 text-[1.8rem] lg:text-[2.2rem] font-incosonsolata 
      outline-none resize-none py-[2rem]"
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
      )}

      {isShowingPreview && (
        <div id="preview" className="mt-[2rem] font-space-mono overflow-auto">
          <Markdown>{input}</Markdown>
        </div>
      )}

      <div className=" lg:hidden fixed bottom-[1.5rem] right-[1.5rem]">
        {!isShowingPreview && (
          <button
            id="show-preview-btn"
            onClick={() => setIsShowingPreview((prev) => !prev)}
          >
            <img src={ShowIcon} alt="show-preview-icon" />
          </button>
        )}

        {isShowingPreview && (
          <button
            id="hide-preview-btn"
            onClick={() => setIsShowingPreview((prev) => !prev)}
          >
            <img src={HideIcon} alt="show-preview-icon" />
          </button>
        )}
      </div>
    </div>
  );
}
