import { Button, Input } from '@material-ui/core';
import React, { useState } from 'react';
import { db, auth } from '../firebase';
import firebase from 'firebase/compat/app';

function SendMessages(props) {
  const { scroll } = props;
  const [msg, setMsg] = useState('');
  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await db.collection('messages').add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg('');
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <Input
          style={{
            width: '78%',
            fontSize: '15px',
            fontWeight: '550',
            marginLeft: '5px',
            marginBottom: '-3px',
          }}
          placeholder="Message..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></Input>
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}

export default SendMessages;
