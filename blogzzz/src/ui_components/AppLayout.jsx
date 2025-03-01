import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import NavBar from "./NavBar"
import { useEffect, useState } from "react"



const AppLayout = () => {

useEffect()


  const [darkMode , setDarkMode]=useState(false)

  const handleDarkMode = ()=>{
    setDarkMode(curr =>!curr)
  }

  return (

    <div className={darkMode ? "dark" : " "}>

    <main className="w-full bg-[#ffffff] dark:bg-[#181A2A]">
     <NavBar darkMode={darkMode} handleDarkMode={handleDarkMode}/>

     <Outlet/>
     
     <Footer/>


    </main>
    </div>
  )
}

export default AppLayout
