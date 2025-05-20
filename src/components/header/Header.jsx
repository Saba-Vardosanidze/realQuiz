import {motion} from "motion/react";
import {useState} from "react";
import {PiCaretDownLight} from "react-icons/pi";
import {CgProfile} from "react-icons/cg";
import {CiSearch} from "react-icons/ci";
import {TfiClose} from "react-icons/tfi";
import {Link} from "react-router-dom";
const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const inputCleaner = () => {
    setSearchValue("");
  };

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
    setIsPagesOpen(false);
  };

  const toggleBurgerMenu = () => {
    setIsBurgerOpen((prev) => !prev);
  };

  return (
    <header className="flex justify-center items-center bg-[var(--grayColorForInput)] w-full min-h-[64px] lg:min-h-[96px]">
      <div className="flex justify-between items-center lg:gap-[40px] px-[16px] lg:px-[100px] w-full lg:max-w-[1440px]">
        <div className="flex items-center gap-[16px] w-[166px] lg:w-[160px] h-[24px] lg:h-[22px] object-contain shrink-0">
          <button className="lg:hidden" onClick={toggleBurgerMenu}>
            <img
              className="w-[24px] h-[24px] object-contain shrink-0"
              src="/images/svg/burgerMenu.svg"
              alt="burgerMenu Button"
            />
          </button>
          <img
            src="/images/svg/Logo.svg"
            alt="site Logo"
            className="w-[126px] lg:w-[160px] h-[18px] lg:h-[22px] object-contain shrink-0"
          />
        </div>
        <ul className="hidden lg:flex gap-[24px]">
          <li className="hover:text-[var(--paragraph-color)] transition duration-300 ease-in-out cursor-pointer">
            <div
              onClick={toggleServices}
              className="flex lg:flex items-center lg:gap-[7px]"
            >
              <a to="#">Change the difficulty</a>
              <motion.div
                animate={isServicesOpen ? "open" : "closed"}
                variants={{
                  open: {
                    rotate: 180,
                    filter: "brightness(1.2)",
                  },
                  closed: {
                    rotate: 0,
                    filter: "brightness(1)",
                  },
                }}
                transition={{duration: 0.3}}
              >
                <PiCaretDownLight />
              </motion.div>
            </div>
            <div>
              {isServicesOpen ? (
                <motion.div
                  initial={{opacity: 0, y: -10}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.3}}
                  className="absolute flex flex-col justify-center bg-[var(--color-white)] shadow-[2px_4px_30px_rgba(0,0,0,0.1)] mt-[13px] pl-[32px] rounded-[16px] w-[100%] max-w-[126px] min-h-[150px] font-medium"
                >
                  <ul className="flex flex-col lg:gap-[20px]">
                    <Link to="/quiz">
                      <li className="text-[var(--paragraph-color)] hover:text-[var(--colorBlack)] transition duration-300 ease-in-out cursor-pointer">
                        <a href="#footer">Easy</a>
                      </li>
                    </Link>
                    <Link to="/mediumquiz">
                      <li className="text-[var(--paragraph-color)] hover:text-[var(--colorBlack)] transition duration-300 ease-in-out cursor-pointer">
                        <a href="#footer">Medium</a>
                      </li>
                    </Link>
                    <Link to={"/hardQuiz"}>
                      <li className="text-[var(--paragraph-color)] hover:text-[var(--colorBlack)] transition duration-300 ease-in-out cursor-pointer">
                        <a href="#footer">Hard</a>
                      </li>
                    </Link>
                  </ul>
                </motion.div>
              ) : (
                ""
              )}
            </div>
          </li>
        </ul>
        <div className="relative w-full max-w-[577px]">
          <input
            onChange={(event) => setSearchValue(event.target.value)}
            value={searchValue}
            type="search"
            className="hidden [&::-webkit-search-cancel-button]:hidden lg:flex bg-[var(--colorWhiteHover)] px-[52px] border border-[var(--paragraph-color)] rounded-[62px] outline-none w-full max-w-[470px] focus:max-w-[577px] min-h-[48px] transition-all duration-600 ease-in-out appearance-none"
            placeholder="Search for products..."
          />
          <div
            className={`top-[12px] left-[16px] absolute hidden lg:flex lg:${
              searchValue ? "hidden" : "flex"
            }`}
            src="/images/svg/search-icon.svg"
            alt="search icon"
          >
            <CiSearch className="w-[26px] h-[26px]" />
          </div>

          <button
            onClick={inputCleaner}
            className="top-[15px] left-[16px] absolute cursor-pointer"
          >
            <div
              className={`w-[20px] h-[20px]  ${
                searchValue ? "block" : "hidden"
              }`}
              src="/images/svg/xIcon.svg"
              alt="close icon"
            >
              <TfiClose className="w-[23px] h-[23px]" />
            </div>
          </button>
        </div>
        <div className="flex gap-[12px] lg:gap-[14px] w-[96px] lg:w-[62px] h-[24px] object-contain shrink-0">
          <button className="lg:hidden cursor-pointer">
            <img
              src="/images/svg/searchIcon.svg"
              alt="search Button"
              className="w-[24px] h-[24px] object-contain shrink-0"
            />
          </button>
          <button className="cursor-pointer">
            <CgProfile className="w-7 h-7" />
          </button>
        </div>
      </div>
      {isBurgerOpen && (
        <motion.div
          initial={{x: "-100%"}}
          animate={{x: 0}}
          exit={{x: "-100%"}}
          transition={{duration: 0.3}}
          className="top-0 left-0 z-50 fixed flex flex-col gap-6 bg-white shadow-lg p-[24px] w-2/3 h-full"
        >
          <button onClick={toggleBurgerMenu} className="w-[24px] h-[24px]">
            <img src="/images/svg/CloseBTN.svg" alt="close menu" />
          </button>

          <nav className="flex flex-col gap-4 mt-8">
            <ul className="flex flex-col gap-[32px]">
              <li className="font-medium text-[var(--paragraph-color)] hover:text-[var(--colorBlack)]">
                <a href="#">Home</a>
              </li>
              <li className="font-medium text-[var(--paragraph-color)] hover:text-[var(--colorBlack)]">
                <a href="#">About</a>
              </li>
              <li className="font-medium text-[var(--paragraph-color)] hover:text-[var(--colorBlack)]">
                <a href="#">Services</a>
              </li>
              <li className="font-medium text-[var(--paragraph-color)] hover:text-[var(--colorBlack)]">
                <div onClick={toggleServices} className="flex flex-col">
                  <div className="flex gap-[7px]">
                    <a to="#">Shop</a>
                    <motion.div
                      animate={isServicesOpen ? "open" : "closed"}
                      variants={{
                        open: {
                          rotate: 180,
                          filter: "brightness(1.2)",
                        },
                        closed: {
                          rotate: 0,
                          filter: "brightness(1)",
                        },
                      }}
                      transition={{duration: 0.3}}
                    />
                  </div>
                  {isServicesOpen && (
                    <motion.ul
                      initial={{opacity: 0, height: 0}}
                      animate={{opacity: 1, height: "auto"}}
                      exit={{opacity: 0, height: 0}}
                      transition={{duration: 0.3}}
                      className="flex flex-col gap-[24px] mt-[24px] ml-[16px]"
                    >
                      <li className="font-medium text-[var(--paragraph-color)] hover:text-[var(--colorBlack)]">
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li className="font-medium text-[var(--paragraph-color)] hover:text-[var(--colorBlack)]">
                        <a href="#">About Company</a>
                      </li>
                    </motion.ul>
                  )}
                </div>
              </li>
              <li className="font-medium text-[var(--paragraph-color)] hover:text-[var(--colorBlack)]">
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </nav>
          <button className="bg-[var(--colorBlack)] mt-[62px] rounded-[10px] w-full max-w-[165px] min-h-[52px] text-[var(--colorWhite)]">
            Sign Up Now
          </button>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
