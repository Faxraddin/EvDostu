import React from 'react'

const Footer = () => {
  return (
    <>
            <div className="container" style={{display:'flex',justifyContent:'center',backgroundColor:'lightgrey'}}>
                <div style={{width:'100%',display:'flex',alignItems:'center',padding:'4vw 0 4vw 0'}}>

                    <div style={{fontSize:'1.3vw',width:'50%',marginLeft:'7vw',}}>
                        <h3 style={{marginBottom:'4vw'}}>Loqo</h3>
                        <h4>Sloqan</h4>
                    </div>
                    <div style={{fontSize:'1vw',width:'50%',}}>
                        <h5 style={{marginBottom:'4vw'}}>About</h5>
                        <h5>Site Map</h5>
                    </div>

                </div>
            </div>
        </>
  )
}

export default Footer