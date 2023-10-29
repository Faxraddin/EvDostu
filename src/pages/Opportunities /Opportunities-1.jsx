import React,{useEffect,useState} from "react";
import EditProfile from "../../components/EditProfile";
import axios from 'axios';

import { useDispatch,useSelector} from "react-redux";
import { setAbout,setAge,setRegion,setWork,setInterest } from "../../store/profileReducer";

export default function Opportunities1(){
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.user.isAuth);

  const [update,setUpdate] = useState(false)
  const userId = localStorage.getItem('id');

  if(loggedIn) {

      const fetchUser = async () => {
          try {
            const response = await axios.get(`http://127.0.0.1:8080/users/${userId}`);
            const userData = response.data;
            const {interest,work,region,about,age} = userData;

            dispatch(setAbout(about));
            dispatch(setAge(age));
            dispatch(setRegion(region));
            dispatch(setWork(work));
            dispatch(setInterest(interest));
          } catch (error) {
            console.error(error);
          }
      };
        fetchUser();

  } 
  
    return(
        <>
            <div className="container-op">

                <div className="container-opp">

                    <div className="f-s">
                        <div style={{display:'flex',gap:'1vw',alignItems:'center'}}>
                            <div style={{display:'flex',backgroundColor:'grey',borderRadius:'50%',height:'10vw',width:'10vw'}}></div>
                            <h1 >Ad/Soyad</h1>
                        </div>
                        <div style={{display:'flex',justifyContent:'center',backgroundColor:'grey',borderRadius:'50%',height:'3vw',width:'3vw'}}></div>
                    </div>

                    {update && <EditProfile></EditProfile>}

                    <div className="s-s">
                      <div style={{ fontSize: '1.3vw', listStyle: 'none', background: 'whitesmoke', padding: '1.5vw', borderRadius: '20px', width: '25%', height: '9vw' }}>
                        <input className="s-s-input" placeholder="yas" value={useSelector((state) => state.profile.age)} onChange={(e) => dispatch(setAge(e.target.value))} name="age" />
                        <input className="s-s-input" value={useSelector((state) => state.profile.region)} onChange={(e) => dispatch(setRegion(e.target.value))} name="region" placeholder="region" />
                        <input className="s-s-input" placeholder="work" value={useSelector((state) => state.profile.work)} onChange={(e) => dispatch(setWork(e.target.value))} name="work" />
                        <input className="s-s-input" placeholder="interest" value={useSelector((state) => state.profile.interest)} onChange={(e) => dispatch(setInterest(e.target.value))} name="interest" />
                      </div>
                      <div style={{ fontSize: '1vw', listStyle: 'none', background: 'whitesmoke', padding: '1.5vw', borderRadius: '20px', width: '50%', height: '100%', wordBreak: 'break-word' }}>
                        <h3>About</h3>
                        <textarea className="textarea-a" value={useSelector((state) => state.profile.about)} onChange={(e) => dispatch(setAbout(e.target.value))}></textarea>
                      </div>
                  </div>
                    <button onClick={() => setUpdate(true)}>Update</button>

                </div>
            
            </div>
        </>
    )
}