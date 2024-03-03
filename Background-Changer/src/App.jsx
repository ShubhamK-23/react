import { useState } from "react"

function App() {
  const [color, setColor] = useState ('black')

  return (
    <>
    <div className="w-full h-screen duration-200" style={{'backgroundColor': color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <button type="button" onClick={()=> setColor('white')} className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
           White
          </button>
          <button type="button"onClick={()=> setColor('yellow')} className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">
          Yellow
          </button>
          <button type="button" onClick={()=> setColor('red')} className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
          Red
          </button>
          <button type="button" onClick={()=> setColor('green')} className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
          Green
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
