import { useState } from "react"
import { setCookie } from "cookies-next"
import dragon from "../assets/dragon.png"
import { generatedUserId } from "../app/functions"

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

  const handleStart = async () => {
    const data = await generatedUserId(name, age, hobby)
    console.log(data)
  }

  return (
    <>
      <div className="rpgui-content relative flex justify-center">
        <div className="w-full lg:w-2/3 lg:framed h-full flex flex-col items-center justify-between p-10 bg-[#4F4A4E] lg:my-5 lg:rounded-2xl md:m-5 md:rounded-2xl md:framed">
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
                value={name}
                onChange={handleName}
              />
            </div>
            {/* age */}
            <div>
              <label>Enter Age:</label>
              <input
                className="border shadow-inner"
                type="number"
                value={age}
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
                value={hobby}
                onChange={handleHobby}
              ></textarea>
              <button className="rpgui-button w-full" onClick={handleStart}>
                <p>Start</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Game
