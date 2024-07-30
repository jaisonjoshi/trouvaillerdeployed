'use client'
import { createContext, useEffect, useState } from "react";


export type myContext = {
    profileOpen: boolean;
    setProfileOpen:(val:boolean)=> void;
    linkHistoryItem: any;
    setLinkHistoryItem: (val:any) => void;
    openSearchDesk: boolean;
    setOpenSearch: (val:boolean) => void;

  };

 


export  const MyContext = createContext<myContext | null>(null);

const  MycontextProvider:React.FC<{children: any}> = ({ children }) => {
  const [profileOpen, setProfileOpen] = useState(false)
  const [linkHistoryItem, setLinkHistoryItem] = useState("/")
  const [openSearchDesk, setOpenSearch] = useState(false)
  useEffect(()=>{
    if(openSearchDesk == true){
        document.body.style.overflow = 'hidden'
    }
    else{
        document.body.style.overflow = 'auto'
    }
  }, [openSearchDesk])

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);


    return (
      <MyContext.Provider
       value={{
        profileOpen, setProfileOpen, linkHistoryItem, setLinkHistoryItem, openSearchDesk, setOpenSearch
       }}
      >
        {children}
      </MyContext.Provider>
    );
  };


  export default MycontextProvider