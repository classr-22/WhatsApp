import HomePage from "./Components/HomePage";
import {Route,Routes} from "react-router-dom";
import Status from "./Components/Status/Status";

function App() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/status" element={<Status/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
