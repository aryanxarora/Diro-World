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
      <div className="rpgui-content relative flex justify-center">
        <div className=" w-full gap-10 lg:w-2/3 lg:framed h-full flex flex-col items-center justify-between p-10 bg-[#4F4A4E] lg:my-5 lg:rounded-2xl md:m-5 md:rounded-2xl md:framed">
          <div className="rpgui-container framed-golden-2 relative">
            <h1>{userName}'s World</h1>
          </div>
          <div className="!text-[10px] rpgui-container framed-golden relative lg:mx-8">
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
