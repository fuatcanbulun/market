
import React from 'react'

// Components 
import Box from '../../components/box'
import Title from '../../components/title'
import RadioGroup from '../../components/radioGroup'

function Sorting({title}) {

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
        }
    ] 

  return (
    <>
    <Title title={title}/>      
    <Box>
        <RadioGroup data={sampleData}/>  
    </Box>
    </>
  );
}

export default Sorting;
