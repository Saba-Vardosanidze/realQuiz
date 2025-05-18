const Registration = () => {
  return (
    <div className="m-auto mt-[54px] w-full max-w-[390px]">
      <div>
        <p className="mb-[12px] font-bold text-[#4280EF] text-[42px]">
          Sign in
        </p>
        <p className="font-semibold">Please log in into your account</p>
      </div>
      <form className="mt-[43px]">
        <div className="flex flex-col gap-[9px]">
          <label className="text-[14px] cursor-pointer" htmlFor="email">
            Email
          </label>
          <input
            className="px-[16px] border border-[#E1E1E1] focus:border-[#4280EF] rounded-[8px] outline-none w-full max-w-[342px] min-h-[48px]"
            type="email"
            placeholder="example@gmail.com"
            id="email"
          />
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
          />
        </div>
        <p className="flex justify-end my-[15px] w-full max-w-[342px] text-[#4280EF] cursor-pointer">
          Forgot password?
        </p>
        <button
          type="submit"
          className="bg-[#4280EF] rounded-[8px] w-full max-w-[342px] min-h-[48px] text-white cursor-pointer"
        >
          Sing in
        </button>
      </form>
      <div className="flex flex-col gap-[16px] mt-[42px]">
        <button className="hover:bg-[#4281ef4d] border border-[#4280EF] rounded-[8px] w-full max-w-[342px] min-h-[48px] text-[#4280EF] transition-all duration-300 ease-in-out cursor-pointer">
          Sign in with Google
        </button>
        <button className="hover:bg-[#4281ef4d] border border-[#4280EF] rounded-[8px] w-full max-w-[342px] min-h-[48px] text-[#4280EF] transition-all duration-300 ease-in-out cursor-pointer">
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default Registration;
