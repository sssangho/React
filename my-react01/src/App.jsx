import Header1 from "./component/Header1";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Body2 from "./component/Body2"


const Header2 = () => {
  return (
    <header>
      <h1>header2</h1>
    </header>
  );
}

function App() {
  const name = "홍길동";
  const BodyProps = {name : "이길동", location: "서울시"}
  return (
    <div>
      <Header1/>
      {/* <Body name = {name} location={"성남시"}/> */}
      <Body2 {...BodyProps} />
      <Footer/>
    </div>
   
  )
}

export default App;
