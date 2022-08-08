import { createContext } from "react";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBG_pxD9mwGOTzZVU8ukSmwnuPr9PlVH_Q",
    authDomain: "chat-dev-ad6ee.firebaseapp.com",
    projectId: "chat-dev-ad6ee",
    storageBucket: "chat-dev-ad6ee.appspot.com",
    messagingSenderId: "307857954068",
    appId: "1:307857954068:web:337443556f1b3940341e01"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  // create new user
  // login user
  // userpersistance
  
  console.log(app);  
  return <AuthContext.Provider value={app}>{children}</AuthContext.Provider>;
}

