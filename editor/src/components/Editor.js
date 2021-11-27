import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";
import { useMemo } from "react";
import useEditorConfig from "../hooks/useEditorConfig";

export default function Editor({ document, onChange }) {
  const editor = useMemo(() => withReact(createEditor()), []);
  const { renderElement } = useEditorConfig(editor);
  return (
    <Slate editor={editor} value={document} onChange={onChange}>
      <Editable renderElement={renderElement} />
    </Slate>
  );
}