import React,{components} from "react";

function Template(){
    

    const a="Jhon";
    const b="Joe";
    const c="Jack";
    const temp=`${a} ${b} and ${c}`;
    return(
        <>
            <h1>"The Values Are :-{temp} "</h1>
        </>
    )
    

}
export default Template;