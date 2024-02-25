const SERVER_URI = import.meta.env.VITE_SERVER_URI

export const generatedUserId = async (
  name: string,
  age: string,
  interests: string,
) => {
  try {
    const response = await fetch(`${SERVER_URI}/api/test-generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        age: age,
        interests: interests,
      }),
    })

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
    const response = await fetch(`${SERVER_URI}/api/textme`, {
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
    return data
  } catch (error) {
    console.error("Error:", error)
  }
}

export const quitGame = async () => {
  try {
    const response = await fetch(`${SERVER_URI}/api/quit`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error:", error)
  }
}
