import React, { useState, useRef, useEffect } from 'react'

export default function ChatWindow({ conversation, onSend }) {
  const [text, setText] = useState('')
  const listRef = useRef()

  useEffect(() => {
    setText('')
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight
  }, [conversation])

  if (!conversation) return <div className="chat-window empty">Select a conversation</div>

  function send() {
    if (!text.trim()) return
    const msg = { id: Date.now().toString(), sender: 'Me', text: text.trim() }
    onSend(conversation.id, msg)
    setText('')
  }

  return (
    <div className="chat-window">
      <div className="chat-header">{conversation.name}</div>
      <div className="message-list" ref={listRef}>
        {conversation.messages.map(m => (
          <div key={m.id} className={m.sender === 'Me' ? 'message me' : 'message them'}>
            <div className="message-sender">{m.sender}</div>
            <div className="message-text">{m.text}</div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input value={text} onChange={e => setText(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Type a message" />
        <button onClick={send}>Send</button>
      </div>
    </div>
  )
}
