const SignIn = ({ provider }) => {
  return (
    <button className="btn text-2xl">
      Sign In
    </button>
  );
}

const LogIn = ({ provider }) => {
  return (
    <button className="btn text-2xl">
      Log In
    </button>
  );
}

const LogOut = () => {
  return (
    <button className="btn text-2xl">
      Log Out
    </button>
  );
}

export  { SignIn, LogIn, LogOut };
