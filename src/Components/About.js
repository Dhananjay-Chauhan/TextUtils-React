import React, { useState } from 'react'


export default function About() {
    const [myStyle, setMyStyle] = useState({
        color : "black",
        backgroundColor : "white"

    })
    
    const [txt, setTxt] = useState("Enable Dark Mode")
    const toggleStyle=()=>{
        if(myStyle.backgroundColor==="white"){
            setMyStyle({
                color : "red",
                backgroundColor : "black"
            })
            setTxt("Enable Light Mode")
        }
        else{
            setMyStyle({
                color : "black",
                backgroundColor : "white"
            })
            setTxt("Enable Dark Mode")

        }
    }

    return (

        <div>
            <div className="container my-5" style={myStyle}>
                <p>
                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
                    <button className="btn btn-primary mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
                    <button className="btn btn-primary mx-2" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
                </p>
                <div className="row">
                    <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                            <div className="card card-body">
                                Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseExample2">
                            <div className="card card-body">
                                Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5 mx-4">
            <button onClick={toggleStyle} type="button" className="btn btn-primary"> {txt}</button>
            </div>
        </div>
    )

}
// github pages does not work with react routers but it does work on servers