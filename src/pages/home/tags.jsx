
import React from 'react'

// Components 
import Box from '../../components/box'
import Title from '../../components/title'
import CheckboxGroup from '../../components/checkboxGroup'

function Tags({title}) {

    const sampleData = [
        {
            id:'lowToHigh',
            label:'Price low to high'
        },
        {
            id:'highToLow',
            label:'Price high to low'
        },
        {
            id:'newToOld',
            label:'New to old'
        },
        {
            id:'oldToNew',
            label:'Old to new'
        },
        {
            id:'lowToHigh',
            label:'Price low to high'
        },
        {
            id:'highToLow',
            label:'Price high to low'
        },
        {
            id:'newToOld',
            label:'New to old'
        },
        {
            id:'oldToNew',
            label:'Old to new'
        }
    ] 

  return (
    <>
    <Title title={title}/>      
    <Box>
        <CheckboxGroup data={sampleData} placeholder="Search tag"/>  
    </Box>
    </>
  );
}

export default Tags;
