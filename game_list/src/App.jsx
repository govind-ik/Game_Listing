import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      {/* Full-page background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black to-gray-900 -z-10" />
      
      {/* Main content */}
      <div className="min-h-screen w-full flex flex-col relative">
        <Header />
        <div className="flex-grow pt-24">
          
        </div>
      </div>
    </>
  )
}

export default App