import React,{useEffect,useState} from "react";
import axios from "axios";

import { useDispatch,useSelector} from "react-redux";
import { setAbout,setAge,setRegion,setWork,setInterest } from "../store/profileReducer";

export default function EditProfile(){
  const userId = localStorage.getItem('id');
  const dispatch = useDispatch();

  const [age, setAge] = useState('');
  const [interest, setInterest] = useState('');
  const [region, setRegion] = useState('');
  const [work, setWork] = useState('');
  const [about, setAbout] = useState('');


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8080/users/${userId}`);
        const userData = response.data;

        setInterest(userData.interest);
        setRegion(userData.region);
        setWork(userData.work);
        setAbout(userData.about);
        setAge(userData.age);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://127.0.0.1:8080/users/${userId}`, {
        interest,
        region,
        work,
        about,
        age,
      });

      console.log(response.data); // Updated user data
      window.location.reload()

      // Handle success message or UI update
    } catch (error) {
      console.error(error.response.data); // Error message from the server

      // Handle error message or UI update
    }
  };

    return(
        <>
            <form onSubmit={handleSubmit} className="update-container">
                <div className="upd">
                    <h3>Make some changes!</h3>

                    <div className="updateInput-con">
                        <input className="updateInput" placeholder="yes" onChange={(e) => setAge(e.target.value)}/>
                        <input className="updateInput" placeholder="region" onChange={(e) => setRegion(e.target.value)}/>
                        <input className="updateInput" placeholder="work"  onChange={(e) => setWork(e.target.value)}/>
                        <input className="updateInput" placeholder="interest" onChange={(e) => setInterest(e.target.value)}/>
                    </div>
                    
                    <textarea className="updateInput1" placeholder="about" onChange={(e) => setAbout(e.target.value)}></textarea>

                    <button>Complete</button>
                </div>
                
            </form>
        </>
    )
}