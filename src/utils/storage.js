const KEY = 'assignment3_conversations_v1'

export function loadConversations() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch (e) {
    console.error('Failed to load conversations', e)
    return null
  }
}

export function saveConversations(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data))
  } catch (e) {
    console.error('Failed to save conversations', e)
  }
}
