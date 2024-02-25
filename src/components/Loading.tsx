import fire from "../assets/fire.png"

const Loading = () => {
  const displays = [
    "Gathering the magic...",
    "Preparing dragons...",
    "Loading the world...",
    "Summoning the spirits...",
    "Brewing the potions...",
  ]
  return (
    <div
      className={`w-full flex flex-col h-screen justify-center items-center animate-pulse rpgui-content`}
    >
      <img src={fire} alt="" width={100} />
      <div className="relative">
        <p>{displays[Math.floor(Math.random() * displays.length)]}</p>
      </div>
    </div>
  )
}

export default Loading
