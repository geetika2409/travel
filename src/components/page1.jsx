import React from 'react';
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';


const mode=["Bus","Metro","Own Two-wheeler","Own Car","Walk/Bicycle","Auto","App based ride hailing cab services including Ola/Uber"]
const distance =["<5 km","5-10 km","10-15 km","15-20 km","20-25 km",">25 km"]

function Page1(){
    const [md,setMode]=useState("");
    const [dist,setDistance]=useState("");
    const navigate=useNavigate();

    return(
    
    <div>
       
        <h2 style={{
         position: "absolute",
        top: "5%",
        left: "10%"}}>
        Q1: What is your most frequently used means of travel from your home to work location?</h2>
        <div  style={{
        position: "absolute",
        top: "13%",
        left: "10%"}} >
        {mode.map((ele)=>{
            return (<>
                <input type="radio" id={ele} name={mode} value={ele} onChange={(e)=>{setMode(e.target.value)}} ></input>
                <label htmlFor={ele}>{ele}</label><br/>
            </>)
        })}
       </div>
       <br/>
       <h2 style={{
         position: "absolute",
        top: "48%",
        left: "10%"}}>Q2: What is the total distance between your home and workplace?</h2>
        <div  style={{
        position: "absolute",
        top: "55%",
        left: "10%"}} >
        
        {distance.map((elem)=>{
            return (<>
                <input type="radio" id={elem} name={distance} value={elem} onChange={(e)=>{setDistance(e.target.value)}}></input>
                <label htmlFor={elem}>{elem}</label><br/>
            </>)
        })}
        </div>
         <Button 
         style={{
            hover:"",
            width:"100px",
        position: "absolute",
        bottom: "10%",
        left: "50%"}}
          onClick={()=>
            navigate("page2",{state:{
                mdOption:md,
                distOption:dist}})
        }>
          Next
        </Button>
        
        </div>
        );
}
export default Page1;
