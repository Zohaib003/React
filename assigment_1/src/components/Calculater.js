import React from "react"
import { useState } from "react"
export default function Calculater(){
   
    const changeAdd = ()=>{
        console.log("sss")
        setAdd(add+sub);
        setAns(add+sub);
    }

    const changeSub = ()=>{
        setSub(add-sub);
        setAns(add-sub);
    }

    const[add,setAdd]= useState(9);
    const[sub,setSub]= useState(4);
    const[ans,setAns]= useState(add+sub);
    
    return(
        <>
        <div className="div1">
        <button className="add" onClick={changeAdd}>Add</button>
        <ul>
        <p >{add}</p> <br/>
        <p>-------------------</p>
        <p > Answer is : {ans}</p>
        <p>-------------------</p>
        <p >{sub}</p></ul>
        <br></br>
        <button className="sub" onClick={changeSub}>Sub</button>
        </div>
        </>
    )
}