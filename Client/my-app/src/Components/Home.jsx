  import { useState,useEffect } from "react";
  import axios from "axios"
  import styled from "styled-components"; 
  import { Link } from "react-router-dom";

const Container =styled.div`
  display:flex;
  flex-direction:column;
  
`



  
 
  
  const Home  = ()=>
 {
      const [Drug,setDrug] = useState([]);
      const [search,setSearch] = useState([])

    const fetchAlldrugs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/Medicine");
        setDrug(res.data)
        setSearch(res.data)
        
      } catch (err) {
        console.log(err);
      }
    };
// console.log(Drug);
    useEffect(() => {
       
        fetchAlldrugs();
      }, []);

      const Delete  = (ID)=>
  {

    axios.delete(`http://localhost:3000/Medicine/${ID}`).then(  fetchAlldrugs
    )
  }

  function searchfun(query)
  {
    
  return setSearch(  Drug.filter(drug=>drug.NameDrug.toLowerCase().includes(query)))  
  }
    return(
      <Container>
       <h1>Medicine page</h1>
       <div className="d-flex flex-row justify-content-center align-items-baseline  ">
       <Link className="text-white " to="/Add"> <button type="button" className="btn btn-success w-30 m-2"> Add Medicine  </button> </Link>
       <div className="input-group">
  <div className="d-flex flex-row ml-auto p-2  ">
    <input type="search" id="form1" className="form-control"  onChange={(e)=>searchfun(e.target.value.toLowerCase())}/>
  <button type="button" className="btn btn-primary   h-100">
  search
  </button>
  </div>
</div>
       </div>
       <table className="table table-striped p-25">
        
              <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>ProductionDate</th>
                <th>Quantity</th>
                <th>ExpiryDate</th>
                </tr>
              </thead>

              {search.map((drug)=>{return(
              <tbody key={drug.DrugID}>
                  <tr >
                    <td>{drug.DrugID}</td>
                    <td>{drug.NameDrug}</td>
                    <td>{drug.Price}</td>
                    <td>{drug.ProductionDate}</td>
                    <td>{drug.Quantity}</td>
                    <td>{drug.ExpiryDate}</td>
                    <td>
                    <button type="button" className="btn btn-success mr-1">View</button>
                    <button type="button" className="btn btn-danger mr-1" onClick={()=>Delete(drug.DrugID)}>Delete</button>
                  <Link to={`update/${drug.ID}`}>  <button type="button" className="btn btn-primary" >Update</button></Link>
                    </td>
                    </tr>

              </tbody>
              )})}
      </table>
       </Container>
        )
 }

 export default Home;