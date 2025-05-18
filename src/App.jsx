import {Route, Routes} from "react-router-dom";
import Registration from "./view/registration/registration";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default App;
