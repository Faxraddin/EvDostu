import React,{useState} from "react";
import Box from "../../components/HomeBox";
import { NavLink } from "react-router-dom";

export default function Home2() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Number of items to display per page

  const [selectedContinent, setSelectedContinent] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleContinentClick = (event) => {
    setSelectedContinent(event);
    filterCountries(event);
    filterCountries
  };

  const dataGarden = [
    
  ];

  const dataBuilding = [
    {name:'Abseron',src:'/Abseron.JPG'},
    {name:'Xetai',src:'/Xetai.JPG'},
    {name:'Bineqedi',src:'/Bineqedi.png'},
    {name:'Nesimi',src:'/28 May.JPG'},
    {name:'Sebail',src:'/Sebai.JPG'},
    {name:'Yasamal',src:'/Xetai.JPG'},
    {name:'Narimanov',src:'/Xetai.JPG'},
    {name:'Azadlig',src:'/Bineqedi.JPG'},
    {name:'20 yanvar',src:'/20 yanvar.JPG'},
    {name:'28 May',src:'/28 May.JPG'}
  ]

  const filterCountries = (e) => {
    if (e === 'With Garden') {
      setFilteredCountries(dataGarden)
    } ;
    if (e === 'Building') {
      setFilteredCountries(dataBuilding);
    }; 
    if (e === ''){
      setFilteredCountries(dataBuilding.concat(dataGarden));
    }
    setCurrentPage(1); 
  };

   // Calculate the total number of pages
   const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

   // Get the current items to display based on pagination
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = filteredCountries.slice(
     indexOfFirstItem,
     indexOfLastItem
   );
 
   // Change the current page
   const paginate = (pageNumber) => {
     setCurrentPage(pageNumber);
   };

  return (
    <>
      <div className="container-h">
        <div className="container-con">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <ul className="filter-wrapper">
              <NavLink onClick={() => handleContinentClick('')}className={'house-option'}>
                All
              </NavLink>

              <NavLink onClick={() => handleContinentClick('Building')} className={'house-option'}>
                Building
              </NavLink>

              <NavLink onClick={() => handleContinentClick('With Garden')} className={'house-option'}>
                With Garden
              </NavLink>
            </ul>

            <button
              style={{
                fontSize: "18px",
                borderRadius: "50px",
                background: "none",
                border: "2px solid #AEAEAE",
                padding: ".7vw 1vw .7vw 1vw",
                width: "15vw",
              }}
            >
              Search
            </button>
          </div>

          <div style={{ width: "100%", gap: "10%" }}>
            
              {currentItems.map((placeOfApartment,index) => (
                <Box  key={index} place={placeOfApartment.name} src={placeOfApartment.src}></Box>
              ))}

          </div>
          <ul style={{ display: "flex", listStyle: "none", gap: "1vw" }}>
            {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index}
                  className={`page-switcher ${currentPage === index + 1 ? "active" : ""}`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </li>
            ))}
          </ul>
          <div></div>
        </div>
      </div>
    </>
  );
}
