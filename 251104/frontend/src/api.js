const API_BASE = "http://localhost:9991/api";

export async function fetchHello() {
  const response = await fetch(`${API_BASE}/hello`);
  return await response.text();
}

export async function getMemos() {
  const res = await fetch(`${API_BASE}/memos`);
  return await res.json();
}

export async function addMemo(content) {
  const res = await fetch(`${API_BASE}/memos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });
  return await res.json();
}
