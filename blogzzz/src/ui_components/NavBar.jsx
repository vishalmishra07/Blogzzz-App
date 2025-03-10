import { Switch } from "@/components/ui/switch"
import { FaHamburger } from "react-icons/fa";
import ResponsiveNavBar from "./ResponsiveNavBar";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({darkMode,handleDarkMode}) => {

    const[ showNavBar, setShowNavBar] = useState(false);
    //by smarth
    const scroll=()=>{
      window.scrollTo(0,0);
    }

  return (
    //fragments
    <>  
      <nav className=" w-full padding-x py-6 flex justify-between items-center m-0  gap-6 sticky top-0 z-10 bg-gray-400 dark:bg-[#141624]">
        <Link to="/" onClick={scroll} className=" cursor-pointer text-[#141624] text-2xl dark:text-[#FFFFFF]">
          Blogzzz
        </Link>
        <ul className="flex items-center  justify-end gap-9 text-[#3B3C4A] lg:flex-1 max-md:hidden dark:text-[#FFFFFF] ">
          <li>

          <NavLink   
          to ="/profile"
          className={({isActive})=> (isActive ? "active" : "" )}> Hi, Vishal</NavLink>

          </li>
          <li>Logout</li>
          <li>Login</li>
          <li>Register</li>
          <li className="font-semibold">Create post</li>
        </ul>

        <Switch onCheckedChange={handleDarkMode} checked={darkMode}/>
        <FaHamburger className="text-2xl cursor-pointer hidden max-md:block dark:text-white" onClick={()=> setShowNavBar(curr => !curr)}/>
      </nav>
      {showNavBar && <ResponsiveNavBar />}
    </>   
  )
}

export default NavBar
