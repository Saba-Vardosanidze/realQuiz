import {useQuery} from "@tanstack/react-query";
import {catOrDogApi} from "../../api/quiz";
import {useState} from "react";
const QuizQuestions = () => {
  const [score, setScore] = useState(0);
  const {isLoading, data, error, refetch} = useQuery({
    queryKey: ["catOrDogApi"],
    queryFn: catOrDogApi,
  });
  const scoreGenerator = (isDog) => {
    if (isDog) {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 1);
    }
    refetch();
  };
  if (isLoading) return <p>Loading ... </p>;
  if (error) return <p>server Error</p>;
  return (
    <div className="flex flex-col justify-between items-center gap-[80px] m-auto mt-[40px] lg:mt-[140px] w-full max-w-[880px]">
      <div className="flex lg:flex-row flex-col justify-center gap-[50px]">
        {data.map((res, index) => (
          <div key={index}>
            <div className="flex justify-center items-center hover:shadow border-[1px] hover:border-green-700 border-blue-950 rounded-[15px] w-[415px] h-[415px] overflow-hidden">
              <img
                onClick={() => scoreGenerator(res.isDog)}
                className="blur-sm w-full lg:w-[400px] h-full lg:h-[400px] cursor-pointer"
                src={res.url}
                alt="catOrDogImg"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center w-full max-w-[880px]">
        <div
          className={`flex justify-center items-center gap-[10px] ${
            score < 1 ? "border  border-red-700" : "border  border-green-700"
          } rounded-[10px] w-[150px] h-[60px]`}
        >
          <p className="text-[18px]">score:</p>
          <p
            className={`${
              score < 1 ? "text-red-700" : "text-green-700"
            } font-medium text-[24px]`}
          >
            {score}
          </p>
        </div>
        <div className="flex justify-center items-center hover:bg-blue-50 border border-blue-700 rounded-[10px] w-[150px] h-[60px] text-[14px] text-blue-700 transition-all duration-300 ease-in-out cursor-pointer">
          <p>Complete the quiz.</p>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestions;
