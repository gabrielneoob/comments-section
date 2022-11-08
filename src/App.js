import React, { useState, useEffect, useRef } from "react";
import dataJson from './data.json';
import CommentList from "./CommentList";

function App() {
  const [dados, setDados] = useState(dataJson);



  useEffect(() => {
    console.log(dados)

  }, [])

  return (
    <div className="app">
      <CommentList dados={dados} />
    </div>
  );
}

export default App;
