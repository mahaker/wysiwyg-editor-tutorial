import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";
import { useRef } from "react";
import useEditorConfig from "../hooks/useEditorConfig";

export default function Editor({ document, onChange }) {
  // see https://stackoverflow.com/questions/65852411/slate-js-throws-an-error-when-inserting-a-new-node-at-selected-region
  const editorRef = useRef();
  if (!editorRef.current) editorRef.current = withReact(createEditor());
  const editor = editorRef.current;
  const { renderElement, renderLeaf } = useEditorConfig(editor);

  return (
    <Slate editor={editor} value={document} onChange={onChange}>
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
    </Slate>
  );
}
