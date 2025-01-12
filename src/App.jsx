import { useState } from 'react'

function App() {
  const [color, setColor] = useState("green")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap flex-row justify-center bottom-12 px-2 right-2'>
        <div className='flex flex-col justify-center gap-5 shadow-lg rounded-xl px-5 py-5 bg-white'>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500'>Green</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-500'>yellow</button>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500'>red</button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-500'>purple</button>
          <button  onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-500'>blue</button>
          <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-500'>pink</button>
          <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-500'>orange</button>
          <button onClick={() => setColor("lightblue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-sky-500'>sky</button>
          <button onClick={() => setColor("#AF7AD5")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-[#AF7AD5]'>lavender</button>
          <button onClick={() => setColor("#000")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-[#000]'>black</button>
          <button onClick={() => setColor("#fff")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-[#fff]'>White</button>
          <button onClick={() => setColor("cyan")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-cyan-500'>cyan</button>
        </div>
      </div>
    </div>
  )
}

export default App
