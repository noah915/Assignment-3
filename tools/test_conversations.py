import json
from datetime import datetime

sample = [
    {"id": "1", "name": "Alice", "messages": [{"id": "m1", "sender": "Alice", "text": "Hey!"}]},
    {"id": "2", "name": "Bob", "messages": [{"id": "m2", "sender": "Bob", "text": "Yo"}]} 
]

def print_summary(convos):
    print('Conversations:')
    for c in convos:
        last = c['messages'][-1]['text'] if c['messages'] else '<no messages>'
        print(f" - {c['id']} {c['name']}: {len(c['messages'])} messages, last='{last}'")

def add_message(convos, convo_id, sender, text):
    for c in convos:
        if c['id'] == convo_id:
            msg = { 'id': f'm{int(datetime.now().timestamp())}', 'sender': sender, 'text': text }
            c['messages'].append(msg)
            return True
    return False

if __name__ == '__main__':
    print('--- BEFORE ---')
    print_summary(sample)

    print('\nAdding a message to conversation id=1...')
    ok = add_message(sample, '1', 'Me', 'This message was added by test_conversations.py')
    if not ok:
        print('Failed to add message: conversation not found')

    print('\n--- AFTER ---')
    print_summary(sample)

    # show full JSON for verification
    print('\nFull JSON:')
    print(json.dumps(sample, indent=2, ensure_ascii=False))
