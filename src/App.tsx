import './App.css'
import { Hero } from './components/Hero'
import { Upload } from './components/Upload'
import { Retrieve } from './components/Retrieve'

export const button = "h-12 border-black border-2 p-2.5 bg-white font-bold border-neo-brutalism-sm active:bg-[#00E1EF] rounded-[18px]"
function App() {
  const elements = [<Upload />, <Retrieve />]
  return (
    <div className='bg-black text-white'>
      <Hero />

      <div className="h-min-[100vh] w-[100%] p-4">
        <div className="h-[100vh]  w-[100%] grid grid-cols-12 gap-4">
          {elements.map((ele, index) => (
            <div key={index} className="col-span-12 lg:col-span-6 bg-white rounded-[20px] p-4 flex flex-col h-full">
              {ele}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
