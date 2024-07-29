'use client'
import { createContext, useState } from "react";


export type myContext = {
    profileOpen: boolean;
    setProfileOpen:(val:boolean)=> void;
    linkHistoryItem: any;
    setLinkHistoryItem: (val:any) => void;

  };

 


export  const MyContext = createContext<myContext | null>(null);

const  MycontextProvider:React.FC<{children: any}> = ({ children }) => {
  const [profileOpen, setProfileOpen] = useState(false)
  const [linkHistoryItem, setLinkHistoryItem] = useState("/hello")
    return (
      <MyContext.Provider
       value={{
        profileOpen, setProfileOpen, linkHistoryItem, setLinkHistoryItem
       }}
      >
        {children}
      </MyContext.Provider>
    );
  };


  export default MycontextProvider