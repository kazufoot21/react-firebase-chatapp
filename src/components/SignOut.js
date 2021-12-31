import React from 'react';
import { Button } from '@material-ui/core';
import { auth } from '../firebase';

function SignOut() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        width: '100%',
        backgroundColor: '#FAFAFA',
        top: 0,
        borderBottom: 'solid 1px lightgray',
        zIndex: '10',
      }}
    >
      <Button onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  );
}

export default SignOut;
