'use client'

import { SessionProvider } from "next-auth/react";

const Provider = ({ Children, session }) => {

  // console.log(session);
  return (
    <SessionProvider session={session}>
      {Children}
    </SessionProvider>
  );
}

export default Provider;
