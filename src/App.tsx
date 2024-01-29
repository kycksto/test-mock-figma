import "./App.css"

import Reaction from "./assets/reaction.svg"
import Memory from "./assets/Memory.svg"
import Verbal from "./assets/Verbal.svg"
import visual from "./assets/visual.svg"

const summaryData = [
  {
    icon: Reaction,
    text: "Reaction",
    score: 80,
    color: "#FF5555",
    bgColor: "#FFF6F6"
  },
  {
    icon: Memory,
    text: "Memory",
    score: 92,
    color: "#FFB21E",
    bgColor: "#FFFBF4",
  },
  {
    icon: Verbal,
    text: "Verbal",
    score: 61,
    color: "#00BB8F",
    bgColor: "#F2FCF9",
  },
  {
    icon: visual,
    text: "Visual",
    score: 73,
    color: "#1125D6",
    bgColor: "#F3F4FD",
  }
]

function App() {

  return (
    <div className="container-hero" >
      <div className="hero-left">
        <h1 style={{ color: "#CAC9FF", fontSize: '24px', fontWeight: "medium", textAlign: 'center' }}>
          Your Result
        </h1>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: 200, height: 200, borderRadius: "50%", background: "linear-gradient(to bottom, #4D21C9, rgba(37, 33, 201, 0)" }}>
            <p style={{ fontSize: 72, fontWeight: "bolder", color: "white", margin: 0 }}>76</p>
            <p style={{ color: "white", opacity: "51.69%", margin: 0 }}>out of 100</p>
          </div>
        </div>
        <div style={{ display: "flex", width: 260, height: 134, flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
          <h2 style={{ color: "white", fontSize: "32px", margin: 0 }}>Great</h2>
          <p style={{ maxWidth: 260, maxHeight: 69, color: "white", textAlign: "center", margin: 0 }}>Your performance exceed 65% of the people conducting the test here!</p>
        </div>
      </div>
      <div className="hero-right" style={{}}>
        <h1 style={{ color: "#303B59", fontSize: '24px', fontWeight: "medium" }}>
          Summary
        </h1>
        {summaryData.map((e, i) => {
          return (
            <div key={i} style={{ display: "flex", width: 288, height: 56, borderRadius: 12, alignItems: "center", color: e.color, background: e.bgColor, paddingInline: 8 }}>
              <img src={e.icon} alt={`${e.text}-icon`} style={{ width: 32, height: 32, marginRight: 12 }} />
              <div style={{ display: "flex", width: "100%", justifyContent: "space-between", }}>
                <p>{e.text}</p>
                <div style={{ display: "flex", gap: 5 }}>
                  <p style={{ color: "#303B59", fontWeight: "bold" }}>{e.score}</p>
                  <p style={{ color: "#303B59", opacity: "50%", fontWeight: "bold" }}>/</p>
                  <p style={{ color: "#303B59", opacity: "50%", fontWeight: "bold" }}>100</p>
                </div>
              </div>
            </div>
          )
        })}

        <button className="button-continue" style={{ cursor: "pointer" }}>
          <span>
            <p style={{ color: "white", fontSize: 18, fontWeight: "bold", }}>Continue</p>
          </span>
        </button>

      </div>
    </div>
  )
}

export default App
