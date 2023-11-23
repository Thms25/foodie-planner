import { signIn, signOut } from 'next-auth/react';

const LogIn = ({ provider }) => {
  return (
    <button
      onClick={() => signIn(provider.id)}
      className="btn text-2xl"
    >
      Sign In
    </button>
  );
}

const LogOut = () => {
  return (
    <button
      onClick={() => signOut()}
      className="btn text-2xl"
    >
      Log Out
    </button>
  );
}

export  { LogIn, LogOut };
