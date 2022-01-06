import React,{components} from 'react'

function Animal(){

let chickenLegs;
let cowLegs;
let pigLegs;
let legTotal;

const animal = (chickens,cows,pigs) =>{
  chickenLegs=chickens*2;
  cowLegs=cows*4;
  pigLegs=pigs*4;
  legTotal=chickenLegs+cowLegs+pigLegs;
  return legTotal;
}

return (
  <>
    <h1>{animal(2,3,5)}</h1>
  </>
)
}
export default  Animal;

