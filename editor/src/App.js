import "./App.css";

import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import ExampleDocument from "./utils/ExampleDocument";
import Navbar from "react-bootstrap/Navbar";

function App() {
  const [document, updateDocument] = useState(ExampleDocument);
  useEffect(() => console.log(document), [document]);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">
          <img
            alt=""
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          WYSIWYG EDITOR
        </Navbar.Brand>
      </Navbar>
      <div className="App">
        <Editor document={document} onChange={updateDocument}/>
      </div>
    </>
  );
}

export default App;
