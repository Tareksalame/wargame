import {createContext, useEffect, useState} from 'react'

const userContext = createContext();

export const UsersProvider = ({children})=>
{
    const[user,setUser] = useState('');
  const[showMenu,setShowMenu] = useState('none')



    return (
    <userContext.Provider value={{user,setUser,showMenu,setShowMenu}}>
        {children}
    </userContext.Provider>
    )
}

export default userContext