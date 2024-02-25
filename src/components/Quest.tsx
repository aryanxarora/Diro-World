import { useEffect } from "react"
import { useAppSelector } from "../app/hooks"
import { Story } from "../types"
import { getCookie } from "cookies-next"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const Quest = () => {
  const navigate = useNavigate()

  const userName = getCookie("userName")
  const story: Story = useAppSelector(state => state.app.story)

  console.log(story)

  useEffect(() => {
    if (story.id === "") {
      navigate("/")
    }
  }, [])

  const handleChoice = () => {
    console.log("Choice")
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
                onClick={handleChoice}
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
