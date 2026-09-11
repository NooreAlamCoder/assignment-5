import logo from "../assets/logo-text.png";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-base-100/90 navbar border-b border-gray-100 px-4 md:px-12 py-3 container mx-auto">
      {/* Start: NvBer Section */}
      <div className="navbar-start gap-2">
        {/* Mobile ar jonno */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} role="button" className="btn btn-ghost btn-circle -ml-2 text-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 font-medium">
            <li><a className="text-pink-600">Home</a></li>
            <li><a>Technologies</a></li>
            <li><a>Projects</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        {/* 1st Place: Desktop ar jonno Logo */}
        <a href="#" className="hidden lg:flex items-center">
          <img src={logo} alt="DevStack Logo" className="h-8 w-auto object-contain" />
        </a>
      </div>

      <div className="navbar-center">
        {/* 2nd Place: Mobile ar jonno Logo */}
        <a href="#" className="flex lg:hidden items-center">
          <img src={logo} alt="DevStack Logo" className="h-8 w-auto object-contain" />
        </a>

        {/* Desktop ar Menu Links list */}
        <ul className="menu menu-horizontal px-1 gap-6 text-sm font-semibold hidden lg:flex">
          <li><a href="#" className="text-pink-600 hover:text-pink-700 p-0 focus:bg-transparent active:bg-transparent">Home</a></li>
          <li><a href="#" className="text-slate-600 hover:text-slate-900 p-0 focus:bg-transparent active:bg-transparent">Technologies</a></li>
          <li><a href="#" className="text-slate-600 hover:text-slate-900 p-0 focus:bg-transparent active:bg-transparent">Projects</a></li>
          <li><a href="#" className="text-slate-600 hover:text-slate-900 p-0 focus:bg-transparent active:bg-transparent">About</a></li>
          <li><a href="#" className="text-slate-600 hover:text-slate-900 p-0 focus:bg-transparent active:bg-transparent">Contact</a></li>
        </ul>
      </div>

      {/* Ses ar: Button Sign In & Sign Up */}
      <div className="navbar-end gap-3 sm:gap-5">
        <a href="#" className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900">
          Sign In
        </a>
        <a href="#" className="btn btn-xs sm:btn-sm bg-pink-600 hover:bg-pink-700 border-none text-white rounded-full px-4 sm:px-6 normal-case font-semibold shadow-sm">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default NavBar;