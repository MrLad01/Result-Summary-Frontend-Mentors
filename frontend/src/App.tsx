import data from "../results-summary-component-main/data"


function App() {

 var sum = 0
  for (let i = 0; i < data.length; i++) {
    sum = sum + data[i].score;
  }
  var average;
  average = sum / data.length;
  var score = Math.round(average);
   

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="sm:max-2xl:flex sm:max-2xl:w-1/2 sm:max-2xl:h-3/5 xs:max-sm:w-screen xs:max-sm:h-screen xs:max-sm:grid" >
          <div className="sm:max-2xl:w-1/2 sm:max-2xl:h-full xs:max-sm:h-1/2 xs:max-sm:w-full sm:max-2xl:rounded-2xl shadow-2xl flex flex-col justify-center items-center bg-gradient-to-b from-background1 to-background2 p-2">
            <h3>Your Result</h3>
            <div className="h-1/3 w-2/5 rounded-full bg-gradient-to-b from-circle1 to-circle2 grid justify-center items-center gap-0">
             <span>{score}</span>
             <span>of 100</span>
            </div>
            <div>{score < 50 ? "You failed! Please Try Again": "Great"}</div>
            <div>{score > 70 ? "You scored higher than 65% of the people who have taken these test": "Well done"}</div>
            </div>
          <div className="sm:max-2xl:w-1/2 rounded-e-2xl shadow-2xl p-10 flex flex-col justify-start">
            <header>Summary</header>
            {data.map(e => (
            <div className="flex justify-between">
             <div className="flex" > 
             <e.icon key={e.category}/>
              <span className={`flex font-bold text-${e.color}`}>{e.category}</span>
              </div>
              <span>{e.score}/100</span>
              {e.color}
            </div>
            ))}
            <button>Continue</button>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
