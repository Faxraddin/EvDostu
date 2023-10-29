import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { setAddress,setRooms,setPrice } from "../store/aboutReducer";
import { useNavigate } from "react-router-dom";

export default function ForumBox(props){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/about')
        dispatch(setAddress(props.address));
        dispatch(setRooms(props.rooms));
        dispatch(setPrice(props.price));
    }
    return(
        <>
            <div className="container" style={{display:'flex',flexDirection:'column',width:'240px',height:'320px',border:'solid grey thin',borderRadius:'30px',float:'left',background:'grey',justifyContent:'center',alignItems:'center',margin:'0 20px 20px 0',padding:'15px'}}>
                <div style={{background:'white',width:'100%',borderRadius:'30px',height:'360px'}}></div>
                <h1 style={{fontSize:'30px',marginTop:'-5px',width:'100%',paddingTop:'15px'}}>{props.price}</h1>
                <h3 style={{fontSize:'22px',marginTop:'-15px',width:'100%'}}>{props.rooms}</h3>
                <h4 style={{fontSize:'18px',marginTop:'-15px',width:'100%'}}>{props.address}</h4>
                <button onClick={handleClick} style={{width:'100%',height:'80px',background: '#4F23FF',borderRadius: '25px',color:'white',marginTop:'-15px'}}>Bax</button>
            </div>
        </>
    )
}