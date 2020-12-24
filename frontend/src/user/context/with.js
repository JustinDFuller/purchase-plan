import React, { useContext } from "react";

import { Context } from "./context";

export function withContext(Component) {
  return function (props) {
    const { user, setUser } = useContext(Context);

    return <Component {...props} user={user} setUser={setUser} />;
  };
}
