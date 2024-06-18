import axios from "axios";
import { useState, useEffect } from "react";
import './index.css';

function Comments() {

    var [data,setData] = useState([])

    var userCount = 1


    useEffect(() => {
        axios.get("http://localhost:8085/api/getFeedback").then((res) => {
        setData(res.data)
    })
    }, [])
    


    return (  <>
    <h1>Comments</h1>
<ol  className="oList">
   { data.length > 0 ?  data.map( (user,i) => {
       return <li> <h5>Anonymous {userCount + i}</h5> <p>Rating : {user.rating}</p> <p key={i}> This user said about:{user.category}  and Commented as "{user.comments}" </p></li>
    }) : ""
   
   }
</ol>
    </>);
}

export default Comments;