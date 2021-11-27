import { DefaultElement } from "slate-react";

export default function useEditorConfig(editor) {
  return { renderElement, renderLeaf }
}

// traverse node and render
// props type https://github.com/ianstormtaylor/slate/blob/fece5c157099b5ddef9f6dc8d070f2fdb3724b90/packages/slate-react/src/components/editable.tsx#L64
function renderElement(props) {
  // console.log("renderElement", props);

  const { attributes, element, children } = props;
  switch(element.type) {
    case "paragraph":
      return <p {...attributes}>{children}</p>;
    case "h1":
      return <h1 {...attributes}>{children}</h1>;
    case "h2":
      return <h2 {...attributes}>{children}</h2>;
    case "h3":
      return <h3 {...attributes}>{children}</h3>;
    case "h4":
      return <h4 {...attributes}>{children}</h4>;
    default:
      // use SlateJS default rendering;
      return <DefaultElement {...props}/>;
  }
}

// render leaf node
// props type https://github.com/ianstormtaylor/slate/blob/fece5c157099b5ddef9f6dc8d070f2fdb3724b90/packages/slate-react/src/components/editable.tsx#L80
function renderLeaf(props) {
  // console.log("renderLeaf", props);

  const {children, leaf, attributes} = props;
  let el = <>{children}</>;

  // bold, code, italic, underline are proprietary property
  if(leaf.bold) el = <strong>{el}</strong>;
  if(leaf.code) el = <code>{el}</code>;
  if(leaf.italic) el = <em>{el}</em>;
  if(leaf.underline) el = <u>{el}</u>;

  return <span {...attributes}>{el}</span>
}

