// App.js
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Route from "../../routes";

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}

export default App;
