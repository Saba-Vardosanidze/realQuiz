import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import QuizMediumQuestion from "../../components/QuizMediumQuestion/QuizMediumQuestion";
const QuizMedium = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Header />
        <QuizMediumQuestion />
      </main>
      <Footer />
    </div>
  );
};

export default QuizMedium;
