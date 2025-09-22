import './Body.css'
function Body(props) {
    const {name, location} = props; // 비구조화 할당 또는 destructuring 또는 구조 분해 할당
    const numA = 1;
    const numB = 2;
    const strA = "안녕";
    const strB = "리액트";
    const objA = {a:1, b:2};

    return (
        <div className="body">
            <h1>{name}은 {location}에 삽니다.</h1>
            <h2>{numA + numB}</h2>
            <h2>{strA + strB}</h2>
            <h3>objA.a: {objA.a}</h3>
            <h3>objA.b: {objA.b}</h3>
        </div>
    );
}

export default Body;

