import React, { useState } from "react"

const Story = () => {  
    const [name] = useState("Aryan");
    const paragraph = "In the quiet town of Eldoria, nestled between misty mountains and lush forests, lived Aryan, a 23-year-old with an insatiable curiosity for both computer science and the legends of mystical dragons. Aryan spent his days immersed in coding challenges and his nights lost in ancient tales of fire-breathing beasts that once roamed the skies. One evening, while poring over an old manuscript in the town's library, he stumbled upon a hidden passage alluding to a dragon's lair deep within the heart of the nearby Darkwood Forest. Excitement surged through Aryan's veins as he pondered his next move. Embark on a quest into the Darkwood Forest, determined to uncover the secrets of the dragon's lair. 1. Consult with the local historian to gather more information about the legends surrounding the dragons before making a decision. 2. Use his computer science skills to decipher any hidden messages within the manuscript, hoping to unveil more clues about the dragon's whereabouts."; 3. const options = ["Pathway 1","Pathway 2","Pathway 3"];

    return (
    <>
      <div className="rpgui-content relative">
        <div className="rpgui-container w-full h-full flex flex-col items-center justify-between p-10">
          <div className="rpgui-container framed-golden-2 relative">
            <h1>{name}'s' World</h1>
          </div>
          <div className="rpgui-container framed-golden relative">
            <p>
            {paragraph}
            </p>
          </div>
          <div className="flex flex-col">
          {options.map((option, index) => 
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
