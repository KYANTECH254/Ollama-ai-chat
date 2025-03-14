# Ollama AI Interface Tutorial Documentation
> Build and customize your own Deepseek-like web app using Next.js.

## Overview
The application uses the following components:

- Next.js for the frontend and backend server
- Tailwind CSS for styling
- Apideck components for toast notifications and modals

## Getting Started

1.  Clone the repository and navigate to the project directory.
    
2.  Install the required dependencies by running `npm install` or `yarn`.
    
3.  Start the development server by running `npm run dev` or `yarn dev`.
    
4.  Open your browser and navigate to `http://localhost:3000` to access the application.
    
5.  You can now interact with the chatbot using the input field at the bottom of the screen.

6. Make sure ollama is installed either locally or remotely `https://ollama.com/download` and is running on port `http://127.0.0.1:11434`
    

## Customizing the Application

#### Model Selection (Optional)

The current implementation of the application uses the "deepseek-r1:1.5b, deepseek-r1:8b & ollama" model for chat interactions.

You can change the model used in the application by modifying the `createMessage` function in the `/src/pages/api/createMessage.js` file or using the context provider for models `contexts/ModelContext.tsx`:

```typescript
    const response = await fetch("http://127.0.0.1:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: model, 
        prompt: lastMessage
      }),
    });
``` 

Feel free to modify the code and styles to fit your specific needs. The application uses Tailwind CSS for styling, making it easy to customize the design by modifying the `/src/styles/tailwind.css` and `/src/styles/globals.css` files.

You can also update the application logic, components, and API calls to match your requirements. The main chat functionality is located in `/src/utils/sendMessage.ts` and `/src/utils/useMessages.tsx`.

## Deploying to Production

To deploy your application, you can use a platform like Vercel or Netlify. Both platforms offer seamless integration with Next.js and support environment variables, which are required to store your OpenAI API key securely. Follow the documentation provided by your chosen platform to deploy the application.

If you have any questions or need further assistance, don't hesitate to create a GitHub issue!
