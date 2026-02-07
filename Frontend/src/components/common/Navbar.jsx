import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import logo from "../../assets/logo.png.jpeg";

const navItems = [
  { name: "Student", path: "/student-login" }, // ✅ IMPORTANT
  { name: "Faculty", path: "/faculty-login" },
  { name: "Admin", path: "/admin-login" },
  { name: "Research", path: "/research" },
  { name: "Academics", path: "/academics" },
  { name: "Admission", path: "/admission" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        absolute top-0 left-0 w-full z-[999]
        backdrop-blur-md
      "
    >
      <div
        className="
          h-[70px]
          px-[40px]
          flex items-center justify-between
        "
      >
        {/* LOGO */}
        <div>
          <img
            src={logo}
            alt="Salok Logo"
            className="h-[150px] w-[150px] object-contain"
          />
        </div>

        {/* DESKTOP LINKS */}
        <ul className="hidden lg:flex gap-[25px] list-none text-white font-medium">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer transition hover:text-orange-400"
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* ACTIONS */}
        <div className="hidden lg:flex items-center">
          <ThemeToggle />

          {/* Common Login (unchanged) */}
          <Link
            to="/login"
            className="
              ml-4
              bg-orange-400
              text-black
              px-[18px] py-[8px]
              rounded-lg
              font-medium
              hover:bg-orange-500
              transition
            "
          >
            Login
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-black/80 backdrop-blur-md">
          <ul className="flex flex-col gap-5 px-8 py-6 text-white font-medium">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="cursor-pointer hover:text-orange-400 transition"
                onClick={() => setOpen(false)}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}

            <div className="flex items-center mt-4">
              <ThemeToggle />

              <Link
                to="/login"
                className="
                  ml-4
                  bg-orange-400
                  text-black
                  px-[18px] py-[8px]
                  rounded-lg
                  font-medium
                "
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
