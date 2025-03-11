import { EditorProvider } from "./context/EditorContext";

import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Display from "./components/Display";

function App() {
  return (
    <EditorProvider>
      <Display>
        <Editor />
        <Preview />
      </Display>
    </EditorProvider>
  );
}

export default App;
