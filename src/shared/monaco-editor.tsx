import Editor from "@monaco-editor/react";
const MonacoEditor = () => {
  return (
    <Editor
      defaultLanguage="typescript"
      defaultValue="// some comment"
      theme="vs-dark"
    ></Editor>
  );
};

export default MonacoEditor;
