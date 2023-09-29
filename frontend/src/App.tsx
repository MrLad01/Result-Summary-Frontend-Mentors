import data from "./data"


function App() {

 var sum = 0
  for (let i = 0; i < data.length; i++) {
    sum = sum + data[i].score;
  }
  var average;
  average = sum / data.length;
  var score = Math.round(average);


  const results = data.map(e => {
    return (
      <div className= {`flex justify-between bg-${e.color} ${e.color === 'reaction' ? 'bg-reaction' : ''} ${e.color === 'memory' ? 'bg-memory' : ''} ${e.color === 'verbal' ? 'bg-verbal' : ''} ${e.color === 'visual' ? 'bg-visual' : ''}  bg-opacity-5 p-2 my-1 rounded-md items-center`} key={e.category}>
     <div className="flex items-center justify-center" > 
      <e.icon />
      <p className={`font-semibold text-${e.color} ${e.color === 'reaction' ? 'text-reaction' : ''} ${e.color === 'memory' ? 'text-memory' : ''} ${e.color === 'verbal' ? 'text-verbal' : ''} ${e.color === 'visual' ? 'text-visual' : ''} ml-2`}>{e.category}</p>
     </div>
      <span className="flex">
        <p className="font-bold mr-2 text-gray-700">{e.score}</p>
        <p className="font-semibold text-gray-500 opacity-80"> / 100</p>
      </span>
    </div>
    )
  })
   

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="sm:max-2xl:flex sm:max-2xl:w-1/2 sm:max-2xl:h-3/5 xs:max-sm:w-screen xs:max-sm:h-full xs:max-sm:grid" >
          <div className="sm:max-2xl:w-1/2 sm:max-2xl:h-full xs:max-sm:h-full xs:max-sm:w-full xs:max-sm:rounded-b-3xl sm:max-2xl:rounded-2xl shadow-2xl flex flex-col justify-center items-center bg-gradient-to-b from-background1 to-background2 p-2 text-white">
            <header className="text-center opacity-70">Your Result</header>
            <div className="h-fit w-1/3 xs:max-sm:w-1/3 xs:max-sm:h-auto rounded-full bg-gradient-to-b from-circle1 to-circle2 grid justify-center items-center gap-0 p-4 my-6">
             <span className="font-bold text-5xl text-center">{score}</span>
             <span className="text-center opacity-70">of 100</span>
            </div>
            <div className="text-xl font-bold mb-4">
              {score < 50 ? "You failed! Please Try Again": "Great"}
            </div>
            <div className="xs:max-sm:max-w-xs text-center opacity-70">
              {score > 70 ? "You scored higher than 65% of the people who have taken these tests": "Well done"}
            </div>
            </div>
          <div className="sm:max-2xl:w-1/2 sm:max-2xl:h-full rounded-e-2xl shadow-2xl p-10 flex flex-col justify-between">
            <header className="font-bold mb-3">Summary</header>
            {results}
            <button className="text-white font-bold mt-3 rounded-3xl py-3  hover:bg-gradient-to-b focus:bg-gradient-to-b focus:from-background1 focus:to-circle1 hover:from-background1 hover:to-circle1" style={{backgroundColor: "hsl(224, 30%, 27%)"}}>Continue</button>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
