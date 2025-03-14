"use client"
import { useToast } from '@apideck/components'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { sendMessage } from './sendMessage'
import { useModel } from '../../context/ModelContext'

interface ContextProps {
  messages: any[]
  addMessage: (content: any) => Promise<void>
  isLoadingAnswer: boolean
}

const ChatsContext = createContext<Partial<ContextProps>>({})

export function MessagesProvider({ children }: { children: ReactNode }) {
  const { addToast } = useToast()
  const [messages, setMessages] = useState<any[]>([])
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false)
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (!initialized) {
      setMessages([
        { role: 'system', content: 'You are KyanTech AI, a large language model trained by Kyan.' },
        { role: 'assistant', content: 'Hi, How can I help you today?' }
      ])
      setInitialized(true)
    }
  }, [initialized])

  const addMessage = async (content: any) => {
    const { message, model } = content
    setIsLoadingAnswer(true)

    try {
      const userMessage = { role: 'user', content: message };
      setMessages((prev) => [...prev, userMessage]);

      const newMessages = [...messages, userMessage];  
      const data = await sendMessage(newMessages, model);

      if (data?.response) {
        const assistantMessage = { role: 'assistant', content: data.response };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        addToast({ title: 'Failed to receive a response', type: 'error' });
      }
    } catch (error) {
      addToast({ title: 'An error occurred', type: 'error' });
    } finally {
      setIsLoadingAnswer(false);
    }
  };

  return (
    <ChatsContext.Provider value={{ messages, addMessage, isLoadingAnswer }}>
      {children}
    </ChatsContext.Provider>
  )
}

export const useMessages = () => useContext(ChatsContext) as ContextProps
