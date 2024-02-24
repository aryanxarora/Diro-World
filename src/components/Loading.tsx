import fire from "../assets/fire.png"

const Loading = () => {
  return (
    <div
      className={`w-full flex h-screen justify-center items-center animate-pulse`}
    >
      <img src={fire} alt="" width={100} />
    </div>
  )
}

export default Loading
