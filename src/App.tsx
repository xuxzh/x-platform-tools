// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {

  async function greet(e:React.MouseEvent<HTMLButtonElement,MouseEvent>) {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    const info=JSON.stringify(e)
    const msg=await invoke("greet", { info});
    alert(msg);
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>
      <button className="bg-green-500 w-24 text-white" onClick={(e)=>greet(e)}>
        测试
      </button>
    </div>
  );
}

export default App;
