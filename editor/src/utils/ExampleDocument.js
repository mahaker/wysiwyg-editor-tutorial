const ExampleDocument = [
  {
    type: "h1",
    children: [{ text: "Heading1" }],
  },
  {
    type: "h2",
    children: [{ text: "Heading2" }],
  },
  {
    type: "h3",
    children: [{ text: "Heading3" }],
  },
  {
    type: "h4",
    children: [{ text: "Heading4" }],
  },
  {
    type: "paragraph",
    children: [{ text: "paragraph" }],
  },
  {
    type: "paragraph",
    children: [
      { text: "Hello World! This is my paragraph inside a sample document." },
      { text: "Italic text.", italic: true },
      { text: "Bold and underlined text.", bold: true, underline: true },
      { text: "variableFoo", code: true },
      { text: "Bold text.", bold: true, code: true },
    ],
  }
];

export default ExampleDocument;
