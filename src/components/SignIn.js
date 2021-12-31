import React from 'react';
import { Button } from '@material-ui/core';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase';

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      <Button onClick={signInWithGoogle}>SignIn with Google</Button>
    </div>
  );
}

export default SignIn;
