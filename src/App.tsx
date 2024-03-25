// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/tauri";
// import { useState } from "react";
import "./App.css";
import MonacoEditor from "./shared/monaco-editor";

// import { Button } from "@/components/index";
// import { AlertDialogDemo } from "@/src/shared/alert-dialog-demo";

function App() {
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   const info = "rust";
  //   const msg = await invoke("greet", { info });
  //   console.log(msg);
  // }
  // const [open, setOpen] = useState(false);

  // const openChange = () => {
  //   setOpen((open) => !open);
  // };

  return (
    <div className="size-full">
      {/* <Button variant={"destructive"} onClick={openChange}>
        测试
      </Button>
      <AlertDialogDemo open={open} openChange={openChange}></AlertDialogDemo> */}
      <MonacoEditor></MonacoEditor>
    </div>
  );
}

export default App;
