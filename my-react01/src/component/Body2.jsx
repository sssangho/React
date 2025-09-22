import {useState} from 'react'
import './Body.css'

function Body(props) {
    const [count, setCount] = useState(0);

    const onIncrement = () => {
        setCount(count + 1);
    }

    function handleOnClick(e) {
        console.log(e.target.name)
    }

    function handleOnClick2(e1) {
        console.log(e1.target.value)
    }


    return (
        <div className="body">
            <input type="text" onChange={handleOnClick2} />
            <h1>{props.name}은 {props.location}에 삽니다.</h1>
            <h2>{count}</h2>
            <button onClick={onIncrement}>카운트 증가</button>
            <button onClick= {handleOnClick} name = "A버튼">클릭</button>
        </div>
    );
}

export default Body;

