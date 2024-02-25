import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { Story } from "../types"
import { getCookie } from "cookies-next"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { generateReply, quitGame } from "../app/functions"
import { setStory } from "../lib/slice"
import Loading from "./Loading"

const Quest = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const [reply, setReply] = useState("")

  const userName = getCookie("userName")
  const userId = getCookie("userId") || ""
  const story: Story = useAppSelector(state => state.app.story)

  useEffect(() => {
    if (story.id === "" || story.message === "" || story.options.length === 0) {
      navigate("/")
    }
  }, [])

  const handleChoice = async () => {
    if (
      reply.includes("quit") ||
      reply.includes("end") ||
      reply.includes("stop")
    )
      handleQuit()
    setLoading(true)
    const res = await generateReply(userId, reply)
    console.log(res)
    const contStory: Story = {
      id: res.id,
      message: res.message,
      options: res.options,
    }
    dispatch(setStory(contStory as Story))
    setLoading(false)
  }

  const handleQuit = () => {
    quitGame()
    navigate("/")
  }

  const handleReply = (event: any) => {
    setReply(event.target.value)
  }

  // const handleChoice = async (index: number) => {
  //   setLoading(true)
  //   const res = await generateReply(userId, story.options[index])
  //   console.log(res)
  //   const contStory: Story = {
  //     id: res.id,
  //     message: res.message,
  //     options: res.options,
  //   }
  //   dispatch(setStory(contStory as Story))
  //   setLoading(false)
  // }

  if (loading) return <Loading />

  return (
    <>
      <div className="rpgui-content relative">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rpgui-container w-full h-full overflow-scroll flex flex-col items-center justify-between p-10 gap-10"
        >
          <div className="rpgui-container relative flex w-full justify-between items-center">
            <h1>{userName}'s World</h1>
            <button className="rpgui-button" onClick={handleQuit}>
              <p>Quit</p>
            </button>
          </div>
          <div className="rpgui-container framed-golden relative">
            <p>{story.message}</p>
          </div>
          <div className="flex flex-col gap-5 w-full">
            {story.options.map((choice, index) => (
              <div
                key={index}
                className="rpgui-container relative framed-golden-2"
              >
                <p className="rpgui-center">{choice}</p>
              </div>
            ))}
          </div>
          <div className="rpgui-container framed relative w-full">
            <label>Action:</label>
            <textarea className="border shadow-inner" onChange={handleReply} />
            <button className="rpgui-button" onClick={handleChoice}>
              <p>Submit</p>
            </button>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Quest
