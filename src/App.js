import React, { useState, useEffect, useRef } from "react";
import dataJson from './data.json';
import CommentList from "./CommentList";

function App() {
  const [dados, setDados] = useState(dataJson);
  const LOCAL_STORAGE_KEY = 'app.comment';

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dados))
    console.log(localStorage);
  }, [dados])



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
