import { useState, useEffect } from "react";
import { getMemos, addMemo } from "./api";

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
      <h1>📘 Spring Boot + React (Insert Demo)</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="메모를 입력하세요"
          style={{ padding: "8px", width: "70%" }}
        />
        <button onClick={handleAdd} style={{ padding: "8px 12px", marginLeft: "8px" }}>
          추가
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {memos.map((memo) => (
          <li key={memo.id} style={{ marginBottom: "8px" }}>
            📝 {memo.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
