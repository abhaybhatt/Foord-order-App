import React, { useState } from "react";

const DateTime = () => {

    let cdate = new Date();
    // let time = cdate.toLocaleTimeString();
    let time = cdate.getHours() + ':' + cdate.getMinutes() ;
    const[ctime , setctime] = useState(time);

    const UpdateTime = () => {
        cdate = new Date();
        // console.log(typeof(cdate.getMinutes()));
        let a=cdate.getMinutes()<10?`0${cdate.getMinutes()}`:`${cdate.getMinutes()}` 
        time=cdate.getHours() + ':' + a ;
        // time = cdate.toLocaleTimeString();
        setctime(time);
    }
    setInterval(UpdateTime , 1000);

    return (  
         <h4>{ctime}</h4>
    );


}

export default DateTime;