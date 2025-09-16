import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import ChatWindow from './components/ChatWindow'
import { loadConversations, saveConversations } from './utils/storage'

export default function App() {
  const [conversations, setConversations] = useState([])
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const stored = loadConversations()
    if (stored && stored.length) {
      setConversations(stored)
      setActiveId(stored[0].id)
    } else {
      const seed = [
        { id: '1', name: 'Alice', messages: [{ id: 'm1', sender: 'Alice', text: 'Hey!' }, { id: 'm2', sender: 'Me', text: 'Hi Alice' }] },
        { id: '2', name: 'Bob', messages: [{ id: 'm3', sender: 'Bob', text: 'Yo' }, { id: 'm4', sender: 'Me', text: 'Hey Bob' }] }
      ]
      setConversations(seed)
      setActiveId('1')
      saveConversations(seed)
    }
  }, [])

  useEffect(() => {
    saveConversations(conversations)
  }, [conversations])

  function addMessage(convoId, message) {
    setConversations(prev => prev.map(c => c.id === convoId ? {...c, messages:[...c.messages, message]} : c))
  }

  function addConversation(name) {
    const id = Date.now().toString()
    const convo = { id, name, messages: [] }
    setConversations(prev => [convo, ...prev])
    setActiveId(id)
  }

  return (
    <div className="app">
      <Sidebar
        conversations={conversations}
        activeId={activeId}
        onSelect={setActiveId}
        onAdd={addConversation}
      />
      <ChatWindow
        conversation={conversations.find(c => c.id === activeId)}
        onSend={addMessage}
      />
    </div>
  )
}
