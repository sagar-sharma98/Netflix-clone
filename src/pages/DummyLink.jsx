import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function DummyLink () {
    const [text, setText] = useState("Please wait...")
    const {type} = useParams();
    
    console.log(type);
    
    useEffect(() => {
        setText("Please wait...");
        setTimeout(() => {
            setText(`Sorry, work in progress on ${type}.` );
        }, 2000);
    }, [type]);

    return (
        <div style={{width: "100vw", minHeight: "60vh", paddingTop: "6rem", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <h1 style={{color: "white"}}>{text}</h1>
        </div>
    );
}

export default DummyLink;