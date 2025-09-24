import { useState, useRef} from "react";

function Body() {
    const [text, setText] = useState("");
    const textRef = useRef();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handelOnClick =() => {
        if (text.length < 5) {
            textRef.current.focus();
        } else {
        alert(text);
        textRef.current.value = "";
        }
    }

    return (
        <div>
            <input ref={textRef} type="text" value={text} onChange={handleChange} />
            <button onClick={handelOnClick}>Alert Text</button>
        </div>
    );
}
export default Body;