import React from 'react'

function Isogram (){

    const isIsogram = str =>{
      return new Set(str.toLowerCase()).size === str.length;
    }
  return(
    <>
      <h1>{console.log(isIsogram("Machine"))}</h1>
    </>
  )
}
export default Isogram;