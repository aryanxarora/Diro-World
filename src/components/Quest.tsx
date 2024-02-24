import { useState } from "react"
import { useAppSelector } from "../app/hooks"
import { Story } from "../types"
import { getCookie } from "cookies-next"

const Quest = () => {
  // const [characterName] = useState("Aryan")
  // const paragraph = "Once upon a time..."
  // const pathways = useState(["Pathway 1", "Pathway 2", "Pathway 3"])
  const userName = getCookie("userName")
  const story: Story = useAppSelector(state => state.app.story)
  console.log(story)

  return (
    <>
      <div className="rpgui-content relative">
        <div className="rpgui-container w-full h-full flex flex-col items-center justify-between p-10">
          <div className="rpgui-container framed-golden-2 relative">
            <h1>{userName}'s World</h1>
          </div>
          <div className="!text-[10px] rpgui-container framed-golden relative">
            <p>{story.message}</p>
          </div>
          <div className="flex flex-col">
            {story.options.map((option, index) => (
              <button key={index} className="rpgui-button golden">
                <p className="rpgui-center">{option}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Quest
