// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import hello from "../results-summary-component-main/assets/images/icon-memory.svg"


function App() {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="lg:flex lg:w-1/3 lg:h-1/2 sm:w-screen sm:h-screen sm:grid" >
          <div className="lg:w-1/2 rounded-2xl shadow-2xl flex justify-center items-center" style={{backgroundColor: "hsl(252, 100%, 67%)"}}>
            <div className="h-1/3 w-1/2 rounded-full bg-slate-700"></div>
          </div>
          <div className="lg:w-1/2 rounded-e-2xl shadow-2xl"></div>
        </div>
      </div>
    </>
  )
}

export default App
