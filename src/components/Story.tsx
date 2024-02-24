import React, { useState } from "react"

const Story = (options,name,story) => {  
    const [name] = useState("Aryan");
    const paragraph = "Once upon a time in the bustling city of San Francisco, there lived an extraordinary young man named Aryan. At the tender age of 23, he was already a brilliant Computer Science student at the prestigious University of California, Berkeley. However, his heart yearned for something more than just algorithms and coding languages. He had an insatiable fascination with mystical dragons, ancient creatures of legend that were said to possess immense wisdom and power.";
    const options = useState(["Pathway 1","Pathway 2","Pathway 3"]);

    return (
    <>
      <div className="rpgui-content relative">
        <div className="rpgui-container w-full h-full flex flex-col items-center justify-between p-10">
          <div className="rpgui-container framed-golden-2 relative">
            <h1>{name}'s' World</h1>
          </div>
          <div className="!text-[10px] rpgui-container framed-golden relative">
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
