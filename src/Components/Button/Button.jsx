import React from 'react'

export const Button = ({setPeople}) =>{
    return <button onClick = {() =>  setPeople([])}>Clear All</button>
}