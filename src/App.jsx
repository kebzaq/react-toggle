import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(false);
  const toggle = () => {
    setValue(!value);
  };
  return (
    <>
      <div className="wrapper">
        <h1>r: Toggle</h1>
        <hr />
        <div className="toggle d-flex flex-column">
          <button
            onClick={toggle}
            className={value ? "btn btn-info" : "btn btn-success"}
          >
            {!value ? "Hide Element Below" : "Show Element Below"}
          </button>
          <button
            style={{ display: value ? "none" : "" }}
            className="btn btn-warning flex-column"
          >
            Toggle Challenge
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
