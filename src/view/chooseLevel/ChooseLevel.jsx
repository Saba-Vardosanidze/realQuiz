import {Link} from "react-router-dom";

const ChooseLevel = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-[20px] bg-[var(--heroBgColor)] shadow m-auto mt-[150px] border border-[var(--oldPrice)] rounded-[15px] w-full max-w-[300px] min-h-[400px]">
        <Link to={"/quiz"}>
          <button className="flex justify-center items-center hover:bg-green-50 border border-green-700 rounded-[10px] w-[150px] h-[60px] text-[21px] text-green-700 transition-all duration-300 ease-in-out cursor-pointer">
            Easy
          </button>
        </Link>
        <Link to={"/mediumquiz"}>
          <button className="flex justify-center items-center hover:bg-blue-50 border border-blue-700 rounded-[10px] w-[150px] h-[60px] text-[21px] text-blue-700 transition-all duration-300 ease-in-out cursor-pointer">
            Medium
          </button>
        </Link>
        <Link to={"/hardQuiz"}>
          <button className="flex justify-center items-center hover:bg-red-50 border border-red-700 rounded-[10px] w-[150px] h-[60px] text-[21px] text-red-700 transition-all duration-300 ease-in-out cursor-pointer">
            Hard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChooseLevel;
