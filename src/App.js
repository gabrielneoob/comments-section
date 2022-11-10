import React, { useState, useEffect, useRef } from "react";
import dataJson from './data.json';
import CommentList from "./CommentList";
import CurrentUserComment from "./CurrentUserComment";

function App() {

  const [dados, setDados] = useState(dataJson);
  const LOCAL_STORAGE_KEY = 'app.comment';


  useEffect(() => {
    const storagedDados = localStorage.getItem(LOCAL_STORAGE_KEY);
    setDados(JSON.parse(storagedDados))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dados))
  }, [dados])



  return (
    <div className="app">
      <CommentList dados={dados} setDados={setDados} />
      <CurrentUserComment dados={dados} setDados={setDados} />
    </div>
  );
}

export default App;
