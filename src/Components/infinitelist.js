import React,{Suspense, useEffect, useState} from 'react'
import axios from 'axios'
function Infinitelist() {

    const [data,setdata]=useState([])
    useEffect(async() => {
       await axios.get("https://randomuser.me/api/?results=100")
       .then((d)=>{
        console.log(d.data.results)
        setdata(d.data.results)
       })
       .catch((e)=>{console.log(e)})
    },[])


    return (
        <div style={{textAlign:'center'}}>
            <h1>list of people</h1>
            <li style={{listStyleType:'none' }}>
                {
                    data.map((item)=>{
                      return ( 
                      <Suspense fallback={<h4>loading....</h4>}>    
                      <div style={{padding: '10px', display:'flex', justifyContent:'space-between',border:'solid black 1px'}}>
                      <ul><h3>{item.name.first} {item.name.last}</h3></ul>
                      <ul>
                          <img src={item.picture.medium} />
                      </ul>
                      </div>
                      </Suspense>
                      )
                    })
                }                    
            </li>
        </div>
    )
}

export default Infinitelist
