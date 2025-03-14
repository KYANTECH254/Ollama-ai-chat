"use client"

import { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react'

export const modelOptions = [
  { id: 'deepseek-r1:1.5b', name: 'DeepSeek R1 1.5b' },
  { id: 'deepseek-r1:8b', name: 'DeepSeek R1 8b' },
  { id: 'ollama', name: 'Ollama' },
]

interface ModelContextProps {
  selectedModel: string
  setSelectedModel: (model: string) => void
  modelOptions: { id: string; name: string }[]
}

const ModelContext = createContext<ModelContextProps | undefined>(undefined)

export const ModelProvider = ({ children }: { children: ReactNode }) => {
  const [selectedModel, setSelectedModel] = useState(modelOptions[0].id)
  const selectedModalRef = useRef(selectedModel)

  useEffect(() => {
    selectedModalRef.current = selectedModel;
    setSelectedModel(selectedModalRef.current)
  }, [selectedModel])
  
  return (
    <ModelContext.Provider value={{ selectedModel, setSelectedModel, modelOptions }}>
      {children}
    </ModelContext.Provider>
  )
}

export const useModel = () => {
  const context = useContext(ModelContext)
  if (!context) throw new Error('useModel must be used within a ModelProvider')
  return context
}
