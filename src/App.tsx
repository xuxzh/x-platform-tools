// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

import { Button } from '@shadcn/ui';
import { RhSafeAny } from "@model";

function App() {
  const a:RhSafeAny={};
  async function greet(e:React.MouseEvent<HTMLButtonElement,MouseEvent>) {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    // const msg=await invoke("greet",( e.nativeEvent as any).pointerType);
    alert(`hello :${JSON.stringify(a)}`);
  }

  function test(msg:string){
    console.log(msg);
    alert(msg)
  }

  return (
    <div className="container">
      <Button onClick={e=>greet(e)} variant={'destructive'}>测试</Button>
      <button onClick={()=>test('hello')}>测试</button>
    </div>
  );
}

export default App;
