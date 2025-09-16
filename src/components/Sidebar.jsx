import React, { useState } from 'react'

export default function Sidebar({ conversations, activeId, onSelect, onAdd }) {
  const [name, setName] = useState('')

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Chats</h2>
      </div>
      <div className="new-convo">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="New chat name" />
        <button onClick={() => { if(name.trim()){ onAdd(name.trim()); setName('') } }}>+</button>
      </div>
      <ul className="convo-list">
        {conversations.map(c => (
          <li key={c.id} className={c.id === activeId ? 'active' : ''} onClick={() => onSelect(c.id)}>
            <div className="convo-name">{c.name}</div>
            <div className="convo-last">{c.messages.length ? c.messages[c.messages.length-1].text : 'No messages'}</div>
          </li>
        ))}
      </ul>
    </aside>
  )
}
