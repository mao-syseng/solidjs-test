import { createSignal } from "solid-js";
import Window from "./Window";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <Window title="Hello, world!">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </Window>
    </>
  );
}

export default App;
