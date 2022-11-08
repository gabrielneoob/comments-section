import React, { useState, useEffect, useRef } from "react";
import dataJson from './data.json';

function App() {
  const [dados, setDados] = useState(dataJson);



  useEffect(() => {
    console.log()

  }, [])

  return (
    <div className="app">
    </div>
  );
}

export default App;
