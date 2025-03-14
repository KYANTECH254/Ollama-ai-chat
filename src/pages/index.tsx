import MessageForm from 'components/MessageForm'
import MessagesList from 'components/MessageList'
import { NextPage } from 'next'
import { MessagesProvider } from 'utils/useMessages'
import Layout from '../components/Layout'
import Header from 'components/Header'
import ModelSelector from 'components/ModelSelector'
import { ModelProvider } from '../../context/ModelContext'

const IndexPage: NextPage = () => {
  return (
    <MessagesProvider>
      <Layout>
        <ModelProvider>
          <Header />
          <div className="flex flex-row justify-between w-full h-[90vh] relative overflow-y-auto">
            <div className="flex w-1/4">
              <ModelSelector />
            </div>
            <div className="flex w-3/4">
              <MessagesList />
              <div className="fixed bottom-0 right-0 left-0">
                <MessageForm />
              </div>
            </div>
          </div>
        </ModelProvider>
      </Layout>
    </MessagesProvider>
  )
}

export default IndexPage
