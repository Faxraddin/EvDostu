import React from "react";

export default function ApartmentBox(props){
    return(
        <>
            <div className="ApartmentBox" style={{border:'thin grey solid',borderRadius:'20px',width:'800px',height:'100%',padding:'10px',position:'relative',marginBottom:'33px'}}>

                <div style={{display:'flex',flexDirection:'column',gap:'5px'}}>
                    <div style={{width:'85%',height:'40px',display:'flex',justifyContent:'space-between',alignItems:'center',position:'relative',left:'90px'}}>
                        <div style={{display:'flex',alignItems:'center',gap:'7px'}}>
                            <div style={{background:'#474747',width:'30px',height:'30px',borderRadius:'50%'}}></div>
                            <h2 style={{fontSize:'18px'}}>{props.name ? props.name : 'none'}</h2>
                        </div>
                        <button style={{width:'93px',background:'#474747',borderRadius:'20px',color:'white',fontSize:'18px'}}>Qatil</button>
                    </div>
                    <p style={{width:'100%',position:'relative',left:'90px',fontSize:'17px'}}>{props.text}</p>
                    <div style={{width:'90%',background:'#D9D9D9',height:'336px',position:'relative',left:'90px'}}></div>
                    <h2 style={{position:'relative',left:'90px',fontSize:'14px'}}>35  comments</h2>
                </div>

            </div>
        </>
    )
}