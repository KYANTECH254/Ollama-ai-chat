"use client"
import ChatSidebar from './ChatSidebar'
import { modelOptions, useModel } from '../../context/ModelContext'

const ModelSelector = () => {
  const { selectedModel, setSelectedModel } = useModel()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const model = e.target.value
    setSelectedModel(model)
  }

  return (
    <div className=" h-full w-60 bg-gray-900 text-white p-4 shadow-lg">
      <h2 className="text-lg font-semibold mb-4">AI Model</h2>
      <select
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
        value={selectedModel}
        onChange={handleChange}
      >
        {modelOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <ChatSidebar />
    </div>
  )
}

export default ModelSelector
