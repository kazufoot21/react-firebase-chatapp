import { Button, Input } from '@material-ui/core';
import React, { useState } from 'react';
import { db, auth } from '../firebase';

function SendMessages() {
  const [msg, setMsg] = useState('');
  async function sendMessage(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <Input
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
