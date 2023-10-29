import React from "react";
import { useNavigate } from "react-router-dom";
import { setUnvan } from "../store/forumReducer";
import { useDispatch } from "react-redux";

export default function Box(props){
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleNavigate = () => {
        navigate('/forum');
        dispatch(setUnvan(props.place))
    };

    return(
        <>
            <div className="containerBox" style={{width:'20vw',height:'167px',border:'solid grey thin',alignItems:'left',borderRadius:'20px',gap:'.5vw',float:'left',marginRight:'3vw',marginTop:'1.5vw',backgroundImage:`url(${props.src})`,backgroundSize:'cover'}}>               
                <button id="bnnntntn" onClick={handleNavigate} style={{position:'relative',left:'10%',top:'70%',background:'lightgrey',borderRadius:'20px',width:'90px',fontSize:'15px',padding:'7px',textAlign:'center'}} className="place">{props.place}</button>
            </div>
        </>
    )
}