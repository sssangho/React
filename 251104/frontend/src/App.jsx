import { useState, useEffect } from "react";
import { getMemos, addMemo } from "./api";
import MemoInput from "./molecules/MemoInput";
import MemoList from "./organisms/MemoList";

function App() {
  const [memos, setMemos] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    getMemos().then(setMemos);
  }, []);

  const handleAdd = async () => {
    if (!content.trim()) return;
    const newMemo = await addMemo(content);
    setMemos((prev) => [...prev, newMemo]);
    setContent("");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", textAlign: "center" }}>
      <h1>📘 Spring Boot + React (Atomic Demo)</h1>

      <MemoInput content={content} setContent={setContent} onAdd={handleAdd} />
      <MemoList memos={memos} />
    </div>
  );
}

export default App;
