import { useEffect, useState } from "react"
import { getCookie } from "cookies-next"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Loading from "./Loading"

const Quest = () => {
  const navigate = useNavigate()
  // const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(true)
  const userName = getCookie("userName")
  // const userId = getCookie("userId") || ""
  // const story: Story = useAppSelector(state => state.app.story)

  useEffect(() => {
    if (userName === "" || userName === undefined) {
      navigate("/")
    }
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const story = {
    message: `Dear ${userName}, I am sorry to inform you that the game has been paused. Due to the operational costs associated with utilizing OpenAI's API services, we've had to temporarily halt the game. In the meantime you may checkout the following options:`,
    options: ["Portfolio", "LinkedIn", "Github"],
  }

  // const handleChoice = async () => {
  //   if (
  //     reply.toLocaleLowerCase().includes("quit") ||
  //     reply.toLocaleLowerCase().includes("end") ||
  //     reply.toLocaleLowerCase().includes("stop")
  //   )
  //     handleQuit()
  //   setLoading(true)
  //   const res = await generateReply(userId, reply)
  //   console.log(res)
  //   const contStory: Story = {
  //     id: res.id,
  //     message: res.message,
  //     options: res.options,
  //   }
  //   dispatch(setStory(contStory as Story))
  //   setLoading(false)
  // }

  const handleQuit = () => {
    // quitGame()
    navigate("/")
  }

  // const handleReply = (event: any) => {
  //   setReply(event.target.value)
  // }

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
            <p>{`Dear ${userName}, I am sorry to inform you that the game has been paused. Due to the operational costs associated with utilizing OpenAI's API services, we've had to temporarily halt the game.`}</p>
            <br />
            <p>In the meantime you may checkout the following options:</p>
          </div>
          <div className="flex flex-col gap-5 w-full">
            {story.options.map((choice, index) => (
              <a
                key={index}
                target="_blank"
                rel="noreferrer"
                href={` ${index === 0 ? "https://aryanarora.vercel.app/" : index === 1 ? "https://www.linkedin.com/in/aryanxarora/" : "https://github.com/aryanxarora"}`}
                className="rpgui-container relative framed-golden-2"
              >
                <p className="rpgui-center">{choice}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Quest
