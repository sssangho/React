function MemoList({ memos }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {memos.map((memo) => (
        <li key={memo.id} style={{ marginBottom: "8px" }}>
          📝 {memo.content}
        </li>
      ))}
    </ul>
  );
}

export default MemoList;
