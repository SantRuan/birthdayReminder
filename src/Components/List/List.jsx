import React from 'react'
import Data from '../../Data/data'

export const List = ({ people }) => {
    return (
        <>
            {people.map((person) => {

                const { id, age, name, image } = person
              return( <article key = {id} className ="person">
                    <img src = {image} alt ={name}></img>
                    <div>
                    <h4>{name}</h4>
                    <p>{age}</p>
                    </div>
                </article>
                
                )

            })}
        </>
    )

}
