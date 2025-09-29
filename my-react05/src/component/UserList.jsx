import { useEffect, useState } from "react";

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // API 호출 (예: JSONPlaceholder)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    },[]); // 마운트 시 한 번 실행

    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}({user.email})</li>
                ))}
            </ul>
        </div>
    );
}