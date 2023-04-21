import React from 'react'

export default function NameAndInitial({name,status}) {
    return (
        <>
            <p className="userCard__initial">{name && name.slice(0, 1) || 'D'}</p>
            <h1 className="userCard__name">{name || "Default"}<span className={`userCard__status ${status || 'inactive'}`}></span></h1>
        </>
    )
}
 