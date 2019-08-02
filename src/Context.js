import React, {useState, createContext} from 'react'

const ctx = React.createContext();

   
export default function Context(props) {
    return (
        <ctx.Provider value={Hello}>
            {props.children}
        </ctx.Provider>
    )
}