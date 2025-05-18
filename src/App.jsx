import {Route, Routes} from "react-router-dom";
import Registration from "./view/registration/registration";
import Quiz from "./view/quiz/quiz";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
};

export default App;
