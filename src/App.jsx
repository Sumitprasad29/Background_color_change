import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 rounded-2xl shadow-lg bg-white px-3 py-2'>
          <button onClick ={() => {setColor('red')}} className='outline-none rounded-full shadow-lg bg-red-600 text-white py-1 px-4'>Red</button>  
          <button onClick ={() => {setColor('yellow')}} className='outline-none rounded-full shadow-lg bg-yellow-300 text-black py-1 px-4'>Yellow</button>  
          <button onClick ={() => {setColor('blue')}} className='outline-none rounded-full shadow-lg bg-blue-600 text-white py-1 px-4'>Blue</button>  
          <button onClick ={() => {setColor('green')}} className='outline-none rounded-full shadow-lg bg-green-600 text-white py-1 px-4'>Green</button>  
          <button onClick ={() => {setColor('pink')}} className='outline-none rounded-full shadow-lg bg-pink-300 text-black py-1 px-4'>Pink</button>  
          <button onClick ={() => {setColor('olive')}} className='outline-none rounded-full shadow-lg bg-lime-700 text-white py-1 px-4'>Olive</button>  
          <button onClick ={() => {setColor('grey')}} className='outline-none rounded-full shadow-lg bg-gray-500 text-black py-1 px-4'>Grey</button>  
          <button onClick ={() => {setColor('orange')}} className='outline-none rounded-full shadow-lg bg-orange-600 text-white py-1 px-4'>Orange</button>  
          <button onClick ={() => {setColor('purple')}} className='outline-none rounded-full shadow-lg bg-purple-600 text-black py-1 px-4'>Purple</button>  
          <button onClick ={() => {setColor('white')}} className='outline-none rounded-full shadow-lg bg-white text-black py-1 px-4'>White</button>  
          <button onClick ={() => {setColor('rgb(68 64 60)')}} className='outline-none rounded-full shadow-lg bg-stone-600 text-white py-1 px-4'>Brown</button>  
        </div>  
      </div>
    </div>
  )
}

export default App
