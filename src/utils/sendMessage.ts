export const sendMessage = async (messages: any[], model: any) => {
  try {
    const response = await fetch('/api/createMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ messages, model })
    })
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}
