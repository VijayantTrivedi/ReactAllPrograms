import React,{useState} from 'react'

function Example(){
    //const nameStateVariable=useState("Vijayant");
   
    const [name,setName] = useState("Vijayant");
    const handleClick = () =>{
        setName("Vijayant Trivedi");
    }
    return(
        <React.Fragment>
            <h1>{name}</h1>
            <button className='btn' type="button" onClick={handleClick}>Change</button>
        </React.Fragment>
    );
}
export default Example;