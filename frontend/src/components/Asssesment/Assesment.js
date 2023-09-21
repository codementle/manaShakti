import { useState } from "react";
import "./Assesment.css";
import List from "./List";

const Assesment = () => {
    const [index, setIndex] = useState(0);
    const arrayLen = List.length;


    const goBack =()=>{
        if(index>=1)
        setIndex(index-1);
    }
    const goForward =()=>{
        if(index<arrayLen-1)
        setIndex(index+1);
    }

    return(
    <>
        <div id="slider" className="slider">
            <div className="questions">
                {List[index].question}
                <div dir="rtl" className="q" id="q" />
                {List[index].options.map((option1, key) => {
                    return <div className="ans" id={"ans" + `${key + 1}`} onClick={goForward}>
                        {option1}
                    </div>
                })}
            </div>
            <div id="slide-control" className="slider-controls" >
                <div id="prev" className="prev"onClick={goBack}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ fontSize: '2rem' }}>
                        <path fillRule="evenodd" d="M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                    </svg>
                </div>
                <div id="next" className="next" onClick={goForward}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ fontSize: '2rem' }}>
                        <path fillRule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            </div>
    </>
    )
}

export default Assesment;
