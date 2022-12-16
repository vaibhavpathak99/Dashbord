import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Api() {

const[user,setUser] = useState([]);

    useEffect(() =>
    {
        axios.get("http://192.168.1.187:5019/inwarding/get_box_data?order_number=ELHS22-23-001923")
        .then((res) =>
        {
            setUser(res.data);
            console.log("eee",res.data)
        })
         .catch((err) =>
         {
            console.log(err)
         })
         
            
         
    },[])

    return (
    <div>
    
    </div>
  )}

export default Api