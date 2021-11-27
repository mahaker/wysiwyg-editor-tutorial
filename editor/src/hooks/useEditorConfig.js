import { DefaultElement } from "slate-react";

export default function useEditorConfig(editor) {
  return { renderElement }
}

// traverse node and render
function renderElement(props) {
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

