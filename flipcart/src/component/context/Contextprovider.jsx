import React, { createContext, useState } from 'react'

export const logincontext = createContext(null)


const Contextprovider = ({ children }) => {
    const [name, setname] = useState('')

    return (
        <div>
            <logincontext.Provider value={{name,setname}} >
            {children}
        </logincontext.Provider>
        </div>
    )
}

export default Contextprovider

