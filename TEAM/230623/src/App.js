import Login from "components/Login";
import Todo from "components/Todo";
import RandomNumber from "components/RandomNumber";
import ImageSlider from "components/ImageSlider";

function App() {
  return (
    <>
      <Login />
      <Todo />
      <RandomNumber min={1} max={100} />
      {/* <RandomNumber min={50} max={100} />
      <RandomNumber min={90} max={100} /> */}
      <ImageSlider />
    </>
  );
}

export default App;
