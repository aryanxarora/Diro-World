export const generatedUserId = async (name: string, age: string, interests: string) => {
    try {
      const response = await fetch('https://dull-houses-wink.loca.lt/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          age: age,
          interests: interests,
        }),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
} 