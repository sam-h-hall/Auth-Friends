import React from "react";
import "./App.css";
import { Login } from "./Components/Login";
import { FriendsList } from "./Components/FriendsList";

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <Login />
      <FriendsList />
    </div>
  );
}

export default App;
