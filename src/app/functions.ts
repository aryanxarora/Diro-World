export const generatedUserId = async (
  name: string,
  age: string,
  interests: string,
) => {
  try {
    const response = await fetch(
      "https://mean-fans-shine.loca.lt/api/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          age: age,
          interests: interests,
        }),
      },
    )

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error:", error)
  }
}

export const generateReply = async (id: string, message: string) => {
  try {
    const response = await fetch("https://mean-fans-shine.loca.lt/api/reply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        message: message,
      }),
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const data = await response.json()
    // console.log("generateReply (51) ", data)
    return data
  } catch (error) {
    console.error("Error:", error)
  }
}
