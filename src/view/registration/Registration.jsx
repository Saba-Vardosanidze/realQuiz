import {registrationUser} from "../../api/registration";
import {registrationSchema} from "../../schema/registrationSchema";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {zodResolver} from "@hookform/resolvers/zod";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";

const Registration = () => {
  const {login} = useAuth();
  const navigate = useNavigate();

  const {
    register,
    formState: {errors},
    setError,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const {mutate} = useMutation({
    mutationFn: registrationUser,
    onSuccess: (userData) => {
      login(userData);
      navigate("/quiz");
    },
    onError: () => {
      setError("root", {message: "something is wrong"});
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };
  return (
    <div className="m-auto mt-[54px] w-full max-w-[390px]">
      <div>
        <p className="mb-[12px] font-bold text-[#4280EF] text-[42px]">Login</p>
        <p className="font-semibold">Please log in into your account</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-[43px]">
        <div className="flex flex-col gap-[9px]">
          <label className="text-[14px] cursor-pointer" htmlFor="email">
            Email
          </label>
          <input
            className="px-[16px] border border-[#E1E1E1] focus:border-[#4280EF] rounded-[8px] outline-none w-full max-w-[342px] min-h-[48px]"
            type="email"
            placeholder="example@gmail.com"
            id="email"
            {...register("userName")}
          />
          <p className="text-[12px] text-red-600 italic">
            {errors.userName?.message}
          </p>
        </div>
        <div className="flex flex-col gap-[9px] mt-[20px]">
          <label className="text-[14px] cursor-pointer" htmlFor="Password">
            Password
          </label>
          <input
            className="px-[16px] border border-[#E1E1E1] focus:border-[#4280EF] rounded-[8px] outline-none w-full max-w-[342px] min-h-[48px]"
            type="Password"
            placeholder="password"
            id="Password"
            {...register("password")}
          />
          <p className="text-[12px] text-red-600 italic">
            {errors.password?.message}
          </p>
        </div>
        <p className="flex justify-end my-[15px] w-full max-w-[342px] text-[#4280EF] cursor-pointer">
          Forgot password?
        </p>
        <button
          type="submit"
          className="bg-[#4280EF] rounded-[8px] w-full max-w-[342px] min-h-[48px] text-white cursor-pointer"
        >
          Login
        </button>
      </form>
      <div className="flex flex-col gap-[16px] mt-[42px]">
        <button className="hover:bg-[#4281ef4d] border border-[#4280EF] rounded-[8px] w-full max-w-[342px] min-h-[48px] text-[#4280EF] transition-all duration-300 ease-in-out cursor-pointer">
          Login with Google
        </button>
        <button className="hover:bg-[#4281ef4d] border border-[#4280EF] rounded-[8px] w-full max-w-[342px] min-h-[48px] text-[#4280EF] transition-all duration-300 ease-in-out cursor-pointer">
          Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default Registration;
