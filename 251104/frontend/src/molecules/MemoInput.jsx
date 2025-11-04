import Input from "@/atoms/Input1";
import Button from "@/atoms/Button1";

function MemoInput({ content, setContent, onAdd }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Input
        value={content}
        onChange={setContent}
        placeholder="메모를 입력하세요"
        style={{ padding: "8px", width: "70%" }}
      />
      <Button
        onClick={onAdd}
        style={{ padding: "8px 12px", marginLeft: "8px" }}
      >
        추가
      </Button>
    </div>
  );
}

export default MemoInput;
