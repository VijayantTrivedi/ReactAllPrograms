import React,{components} from 'react'

function Vowel(){
    const remvol = str =>{
        let a = ['a','e','i','o','u','A','E','I','O','U'];
        let result = "" ;
        for(let i=0;i<str.length;i++){
            if(!a.includes(str[i])){
                result += str[i];
            }
        }
        return result;
    }

    return (
        <>
          <h1>{remvol("Vijayant Trivedi")}</h1>
        </>
      )
}
export default Vowel;