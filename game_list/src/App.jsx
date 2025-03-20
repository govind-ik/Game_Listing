import { useState,useEffect } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import { Themecolor } from './context/Theme.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [toggle,setToggle]=useState(true);
  const [theme,setTheme]=useState("light")
  //let's try to do with theme only
  // useEffect(() => {
  //   setTheme(
  //     toggle 
  //       ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700" 
  //       : "bg-gradient-to-b from-blue-100 via-blue-50 to-white"
  //   );
  // }, [toggle]);
  
  return (
    <>
      {/* Full-page background */}
      <Themecolor.Provider value={{theme,setTheme}}>
      <div className={`fixed inset-0 ${theme} ${theme==='light'?"bg-gradient-to-b from-blue-100 via-blue-50 to-white":"bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700"}   -z-10`} />
      
      {/* Main content */}
      <div className="min-h-screen w-full flex flex-col relative">
        <Header />
        <div className="flex-grow pt-24">
          <Home/>
          
        </div>
      </div>
      </Themecolor.Provider>
    </>
  )
}

export default App