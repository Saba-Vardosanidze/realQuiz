import {Route, Routes} from "react-router-dom";
import Registration from "./view/registration/registration";
import Quiz from "./view/quiz/Quiz";
import PrivateRoute from "./routes/PrivateRoute";
import ChooseLevel from "./view/chooseLevel/ChooseLevel";
import QuizMedium from "./view/quiz/QuizMedium";
import QuizHardPage from "./view/quiz/QuizHardPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route
          path="/quiz"
          element={
            <PrivateRoute>
              <Quiz />
            </PrivateRoute>
          }
        />
        <Route
          path="/chooselevel"
          element={
            <PrivateRoute>
              <ChooseLevel />
            </PrivateRoute>
          }
        />
        <Route
          path="/mediumquiz"
          element={
            <PrivateRoute>
              <QuizMedium />
            </PrivateRoute>
          }
        />
        <Route
          path="/hardQuiz"
          element={
            <PrivateRoute>
              <QuizHardPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
