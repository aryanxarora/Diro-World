import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { Story } from "../types"
import { getCookie } from "cookies-next"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { generateReply } from "../app/functions"
import { setStory } from "../lib/slice"

const Quest = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)

  const userId = getCookie("userId") || ""
  const userName = getCookie("userName")
  const story: Story = useAppSelector(state => state.app.story)

  console.log(story)

  useEffect(() => {
    if (story.id === "") {
      navigate("/")
    }
  }, [])

  const handleChoice = async (index: number) => {
    // console.log("handleChoice (25) ", userId, story.options[index])
    const res = await generateReply(userId, story.options[index])
    // console.log("res (27) ", res)
    const contStory: Story = {
      id: res.id,
      message: res.message,
      options: res.options,
    }
    setLoading(true)
    dispatch(setStory(contStory as Story))
    navigate("/quest")
  }

  return (
    <>
      <div className="rpgui-content relative">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="rpgui-container w-full h-full overflow-scroll flex flex-col items-center justify-between p-10 gap-10"
        >
          {/* <div className="rpgui-container framed relative">
            <h1>{userName}'s World</h1>
          </div> */}
          <div className="rpgui-container framed-golden relative">
            <p>{story.message}</p>
          </div>
          <div className="flex flex-col gap-5">
            {story.options.map((choice, index) => (
              <div
                key={index}
                className="rpgui-container relative framed-golden-2 rpgui-cursor-point"
                onClick={() => handleChoice(index)}
              >
                <p className="rpgui-center">{choice}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Quest
