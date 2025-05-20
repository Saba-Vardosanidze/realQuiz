import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import QuizHard from "../../components/quizHard/QuizHard";
const QuizHardPage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Header />
        <QuizHard />
      </main>
      <Footer />
    </div>
  );
};

export default QuizHardPage;
