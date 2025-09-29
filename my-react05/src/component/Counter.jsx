import { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('count 값이 바뀜:', count);
    },[count]); // count가 변경될 때마다 실행

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>증가</button>
        </div>
    )
}