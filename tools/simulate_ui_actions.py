import json
from datetime import datetime

def new_conversation(convos, name):
    cid = str(int(datetime.now().timestamp() * 1000))
    convo = { 'id': cid, 'name': name, 'messages': [] }
    convos.insert(0, convo)
    return cid

def rename_conversation(convos, convo_id, new_name):
    for c in convos:
        if c['id'] == convo_id:
            c['name'] = new_name
            return True
    return False

def delete_conversation(convos, convo_id):
    for i,c in enumerate(convos):
        if c['id'] == convo_id:
            convos.pop(i)
            return True
    return False

def send_message(convos, convo_id, sender, text):
    for c in convos:
        if c['id'] == convo_id:
            mid = 'm' + str(int(datetime.now().timestamp() * 1000))
            c['messages'].append({'id': mid, 'sender': sender, 'text': text})
            return True
    return False

def print_state(convos, title='State'):
    print('\n===', title, '===')
    for c in convos:
        last = c['messages'][-1]['text'] if c['messages'] else '<no messages>'
        print(f"{c['id']} | {c['name']} | {len(c['messages'])} msgs | last: {last}")

if __name__ == '__main__':
    convos = [
        { 'id': '1', 'name': 'Alice', 'messages': [{'id':'m1','sender':'Alice','text':'Hey!'}]},
        { 'id': '2', 'name': 'Bob', 'messages': [{'id':'m2','sender':'Bob','text':'Yo'}]}
    ]

    print_state(convos, 'Initial')

    # Create new convo
    cid = new_conversation(convos, 'Charlie')
    print(f'Created conversation id={cid}')
    print_state(convos, 'After create')

    # Rename convo
    rename_conversation(convos, cid, 'Charlie (renamed)')
    print(f'Renamed conversation id={cid}')
    print_state(convos, 'After rename')

    # Send messages
    send_message(convos, cid, 'Me', 'Hello Charlie')
    send_message(convos, '1', 'Me', 'Reply to Alice')
    print('Sent messages')
    print_state(convos, 'After send')

    # Delete Bob
    delete_conversation(convos, '2')
    print('Deleted conversation id=2')
    print_state(convos, 'Final')

    print('\nFull JSON:')
    print(json.dumps(convos, indent=2, ensure_ascii=False))
