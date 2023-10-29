import React,{useState} from "react";
import ForumBox from "../../components/ForumBox";
import { useSelector } from "react-redux";

export default function Forum() {
  const [filter, setFilter] = useState('');
  const [filteredComponents, setFilteredComponents] = useState([]);
  const [roomFilter, setRoomFilter] = useState('');
  const [unvanFilter, setUnvanFilter] = useState(useSelector(state => state.forum.unvan));

  const selectedUnvan = useSelector(state=>state.forum.unvan)

  const components = [
    { id: 1, name: 'Component 1', price: 100,rooms:1,unvan:'Azadlig' },
    { id: 2, name: 'Component 2', price: 300,rooms:2,unvan:'20 yanvar'},
    { id: 3, name: 'Component 3', price: 600,rooms:2,unvan:'28 may' },
    { id: 4, name: 'Component 4', price: 200,rooms:4,unvan:'Xetai'  },
    // ... more component data
  ];

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilter(value);
  };

  const handleRoomFilterChange = (event) => {
    const { value } = event.target;
    setRoomFilter(value);
  };
  
  const handleUnvanFilterChange = (event) => {
    const { value } = event.target;
    setUnvanFilter(value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();

    if (!filter) {
      setFilteredComponents([]); // Reset filtered components if filter is empty
      return;
    }

    const [minPrice, maxPrice] = filter.split('-').map(Number)

    // Filter the components based on changes
    const filtered = components.filter(
      (component) =>
        component.price >= minPrice && component.price <= maxPrice &&
        (roomFilter === '' || component.rooms === parseFloat(roomFilter)) &&
        component.unvan == unvanFilter
    );
    setFilteredComponents(filtered);
  };


  return (
    <>
      <div className="container1">
        <div className="con">
          <div className="filters">
            <h3>Filters</h3>
            <form onSubmit={handleFilterSubmit}  className="filters-con">

              <div className="fil">
                <span>Qiymet:</span>
                <select  className="qiy" onChange={handleFilterChange}>
                  <option>0</option>
                  <option>100-200</option>
                  <option>200-300</option>
                  <option>300-400</option>
                  <option>400-500</option>
                  <option>500-600</option>
                </select>
              </div>

              <div className="fil">
                <span>Otaq sayi:</span>
                <select className="qiy"  onChange={handleRoomFilterChange}>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <div className="fil">
                <span>Unvan:</span>
                <select className='qiy' onChange={handleUnvanFilterChange}>
                  <option>{selectedUnvan ? selectedUnvan:'none'}</option>
                  <option>Azadlig</option>
                  <option>20 yanvar</option>
                  <option>28 may</option>
                  <option>Narimanov</option>
                  <option>Yasamal</option>
                  <option>Abseron</option>
                  <option>Xetai</option>
                </select>
              </div>

              <button type="submit">Submit</button>
            </form>
            
          </div>
          
          <div className="boxes">
            {filteredComponents.length > 0 ? (
              filteredComponents.map((component) => (
                <ForumBox key={component.id} price={component.price} rooms = {component.rooms}/>
              ))
            ) : (
              <p>
                {filter ? 'No components found for the specified price range.' : 'Enter a price range to filter components.'}
              </p>
            )}
          </div>

        </div>
      </div>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "1vw",
          justifyContent: "center",
        }}
      >
        <li
          style={{
            display: "flex",
            color: "white",
            backgroundColor: "black",
            width: "2.5vw",
            height: "2.5vw",
            borderRadius: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          1
        </li>
        <li
          style={{
            display: "flex",
            color: "white",
            backgroundColor: "grey",
            width: "2.5vw",
            height: "2.5vw",
            borderRadius: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          2
        </li>
        <li
          style={{
            display: "flex",
            color: "white",
            backgroundColor: "grey",
            width: "2.5vw",
            height: "2.5vw",
            borderRadius: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          3
        </li>
        <li
          style={{
            display: "flex",
            color: "white",
            backgroundColor: "grey",
            width: "2.5vw",
            height: "2.5vw",
            borderRadius: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          4
        </li>
        <li
          style={{
            display: "flex",
            color: "white",
            backgroundColor: "grey",
            width: "2.5vw",
            height: "2.5vw",
            borderRadius: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          5
        </li>
      </ul>
    </>
  );
}
