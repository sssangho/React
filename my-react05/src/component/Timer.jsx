import { useEffect, useState } from "react";

export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(interval); // 컴포넌트가 사라질 때 타이머 제거
        };
    }, []);

    return <p>타이머: {seconds}초</p>
}