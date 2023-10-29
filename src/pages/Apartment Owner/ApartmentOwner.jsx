import React, { useEffect, useState } from "react";
import ApartmentBox from "../../components/ApartmentBox";
import axios from 'axios';

export default function ApartmentOwner(){

    const [announcement,setAnnouncement] = useState([])
    const [newAnnouncement, setNewAnnouncement] = useState({ description: "",userName:'' });

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get('http://127.0.0.1:8080/getAnnouncements');
              setAnnouncement(response.data);
            } catch (error) {
              console.error("Error fetching announcements:", error);
            }
        };
      
        fetchData();
    },[]);

    const createPhoneListing = async (event) => {
        // Send a POST request to create a new phone listing
        try {
            const response = await axios.post('http://127.0.0.1:8080/makeAnnouncements',  { description: newAnnouncement.description,userName: newAnnouncement.userName });
            setAnnouncement([...announcement, response.data.description]);
            setNewAnnouncement({ description: "",userName:'' });
        } catch (error) {
            console.error("Error creating phone listing:", error);
        }
      };

    return(
        <>
            <div className="Apartment">

                <div>
                    <form onSubmit={createPhoneListing}>
                        <input
                        type="text"
                        name="announcement"
                        placeholder="Title"
                        value={newAnnouncement.description}
                        onChange={(e) => setNewAnnouncement({ description: e.target.value,userName:localStorage.getItem('user') })}
                        />
                        <button type="submit">Create Listing</button>
                    </form>
                </div>

                {announcement && announcement.map((ann,index) =>(
                    <ApartmentBox key={index} name={ann.userName} text={ann.description} ></ApartmentBox>
                ))}
            </div>
        </>
    )
}