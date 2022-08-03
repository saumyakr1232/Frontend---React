import * as React from "react";
import AuthenticationManager from "./authManager";

const authContext = React.createContext();
const authManager = new AuthenticationManager();

function useAuth() {
  const [authed, setAuthed] = React.useState({isLoggedIn: authManager.getAccessToken().length !=0});

  return {
    authed,
    login() {
      return new Promise((res) => {
        var token  = authManager.getAccessToken()
        var isLoggedIn = token.length != 0;
        console.log(token , "token checking ")
    
        setAuthed({isLoggedIn: isLoggedIn});
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        authManager.updateToken("");
        setAuthed({isLoggedIn: false});
        res();
      });
    }
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}
