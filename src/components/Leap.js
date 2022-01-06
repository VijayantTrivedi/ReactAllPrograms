import React,{components} from 'react'

function Leap(){
const isLeap =(year) =>{
    if(year%4 === 0){
      if(year%100 ===0){
        if(year %400==0){
         return("Leap Year");
        }else{
          return("Not leap year");
        }
      }else{
        return("leap year");
      }
    }else{
      return("Not leap year");
    }
  }
  

  return(
      <h1>Check the year
       {isLeap(2021)}</h1>
  )
} 
  
export default Leap;
  
  
  