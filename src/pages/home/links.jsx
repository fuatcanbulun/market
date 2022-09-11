
import React from 'react'

// Components 
import Link from '../../components/link'

function Links() {

    const sampleData = [
        {
            id:1,
            label:'©2019 Market'
        },
        {
            id:2,
            label:'Privacy Policy'
        },
    ]

    return (
        <>
        {sampleData.map(item=>(
            <Link label={item.label}/>
        ))}
        </>   
    );
}

export default Links;
