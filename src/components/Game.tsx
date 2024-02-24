import React, { useState } from "react"

const Game = () => {
  const [name, setName] = useState("Traveler")
  const [age, setAge] = useState(269)
  const [hobby, setHobby] = useState(
    "Mystical arts of the arcane and the unknown.",
  )

  const handleName = (event: any) => {
    setName(event.target.value)
    console.log(name)
  }
  const handleAge = (event: any) => {
    setAge(event.target.value)
    console.log(name)
  }
  const handleHobby = (event: any) => {
    setHobby(event.target.value)
    console.log(name)
  }

  return (
    <>
      <div className="rpgui-content relative">
        <div className="rpgui-container w-full h-full flex flex-col items-center justify-between p-10">
          <div className="rpgui-container framed-golden-2 relative text-xl">
            <h1>Diro's World</h1>
          </div>
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
              <label>What are your interests</label>
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
