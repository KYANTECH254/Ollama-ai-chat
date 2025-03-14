import { useMessages } from 'utils/useMessages'
import ReactMarkdown from 'react-markdown'
import { generateRandomColorAvatar, randomUrl } from 'lib/Functions'

const MessagesList = () => {
  const { messages, isLoadingAnswer } = useMessages()
  console.log(randomUrl());
  return (
    <div className="p-5 pt-8 pb-8 w-full right-0 overflow-y-auto" style={{ height: 'calc(100vh - 150px)' }}>
      {messages?.map((message, i) => {
        const isUser = message.role === 'user'
        if (message.role === 'system') return null
        return (
          <div
            id={`message-${i}`}
            className={`flex mb-4 fade-up ${isUser ? 'justify-end' : 'justify-start'} ${i === 1 ? 'max-w-md' : ''
              }`}
            key={Math.floor(Math.random() * 1000000) + 1}
          >
            {!isUser && (
              <img
                src={generateRandomColorAvatar("ai") || ""}
                className="w-9 h-9 rounded-full shadow-lg"
                alt="avatar"
              />
            )}
            <div
              style={{ maxWidth: 'calc(100% - 45px)' }}
              className={`group relative px-3 py-2 rounded-lg ${isUser
                ? 'mr-2 bg-gradient-to-br from-primary-700 to-primary-600 text-white'
                : 'ml-2 bg-gray-200 text-gray-700'
                }`}
            >
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }: any) {
                    return !inline ? (
                      <pre className="bg-gray-800 text-white p-3 rounded-md overflow-auto">
                        <code {...props}>{children}</code>
                      </pre>
                    ) : (
                      <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">
                        <div className="font-bold">&#65;</div>
                        {children}
                      </code>
                    )
                  }
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
            {isUser && (
              <img
                src={generateRandomColorAvatar("me") || ""}
                className="w-9 h-9 rounded-full cursor-pointer shadow-lg"
                alt="avatar"
              />
            )}
          </div>
        )
      })}
      {isLoadingAnswer && (
        <div className="flex justify-start mb-4">
          <img
            src={generateRandomColorAvatar("ai") || ""}
            className="w-9 h-9 rounded-full shadow-lg"
            alt="avatar"
          />
          <div className="loader ml-2 p-2.5 px-4 bg-gray-200 dark:bg-gray-800 rounded-full space-x-1.5 flex justify-between items-center relative">
            <span className="block w-3 h-3 rounded-full"></span>
            <span className="block w-3 h-3 rounded-full"></span>
            <span className="block w-3 h-3 rounded-full"></span>
          </div>
        </div>
      )}
    </div>
  )
}

export default MessagesList
