import { useState } from "react"

interface Level {
    name: string,
    story: string,
    options: string[]
}

const Story = ({ options, name, story }: Level) => {
    const [characterName] = useState(name || "Aryan"); 
    const paragraph = story || "Once upon a time..."; 
    const pathways = useState(options || ["Pathway 1", "Pathway 2", "Pathway 3"]); 
  

    return (
    <>
      <div className="rpgui-content relative">
        <div className="rpgui-container w-full h-full flex flex-col items-center justify-between p-10">
          <div className="rpgui-container framed-golden-2 relative">
            <h1>{characterName}'s' World</h1>
          </div>
          <div className="!text-[10px] rpgui-container framed-golden relative">
            <p>
            {paragraph}
            </p>
          </div>
          <div className="flex flex-col">
          {pathways.map((option, index) => 
              (
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

export default Story
