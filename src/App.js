import React, {useState} from "react";
import moment from "moment";
import Calendar from "./app/calendar";
import "./app/styles.css";

function App() {
  const [value, setValue] = useState(moment());

  return (
    <div className="App">
      <Calendar value={value} onChange={setValue} />
    </div>
  );
}

export default App;
