import Nav from "../components/Nav/Nav";
import Form from "../components/Form/Form";
import { useSelector } from "react-redux";

function App() {
  // redux
  const mode = useSelector((state) => state.mode.mode);
  return (
    <div className="app bg-center bg-cover bg-no-repeat bg-[url('./assets/mountain.jpg')] ">
      <div className={`${mode == true ? "dark" : "light"} bg-gradient h-full`}>
        <Nav />
        <Form />
        {/* Welcome */}
      </div>
    </div>
  );
}

export default App;
