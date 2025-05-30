import QuizQuestions from "../../components/quizQuestions/QuizQuestions";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
const Quiz = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Header />
        <QuizQuestions />
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;
