import React, { useState } from "react"
import dragon from "../assets/dragon.png"

const Game = () => {
  const [name, setName] = useState("Traveler")
  const [age, setAge] = useState("269")
  const [hobby, setHobby] = useState(
    "Mystical arts of the arcane and the unknown.",
  )

  const handleName = (event: any) => {
    setName(event.target.value)
  }
  const handleAge = (event: any) => {
    setAge(event.target.value)
  }
  const handleHobby = (event: any) => {
    setHobby(event.target.value)
  }

  return (
    <>
      <div className="rpgui-content relative">
        <div className="rpgui-container w-full h-full flex flex-col items-center justify-between p-10">
          <div className="rpgui-container framed-golden-2 relative">
            <h1>Diro's World</h1>
          </div>
          <img src={dragon} alt="" width={150} />
          <h1>
            Welcome to the magical tale of Diro <a>{name}</a> of age{" "}
            <a>{age}</a> who is interested in <a>{hobby}</a>
          </h1>
          <div className="rpgui-container framed bottom-0 relative flex flex-col gap-5">
            {/* name */}
            <div>
              <label>Enter name:</label>
              <input
                className="border shadow-inner"
                type="text"
                onChange={handleName}
              />
            </div>
            {/* age */}
            <div>
              <label>Enter Age:</label>
              <input
                className="border shadow-inner"
                type="number"
                onChange={handleAge}
              />
            </div>
            {/* interests */}
            <div>
              <label>Interests:</label>
              <textarea
                name="hoobies"
                id="hobbies"
                className="border"
                onChange={handleHobby}
              ></textarea>
              <button className="rpgui-button w-full">Start</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Game
